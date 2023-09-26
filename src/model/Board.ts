import { DataTypes, HasManyGetAssociationsMixin, Model } from "sequelize";
import { db } from "../db/db";
import { IBoard } from "../shared/IBoard";
import { IEntityDetails } from "../shared/IEntityDetails";
import Note from "./Note";
import User from "./User";

class Board extends Model<IBoard, IEntityDetails<IBoard>> {
  declare getNotes: HasManyGetAssociationsMixin<Note>;

  updateLastVersion() {
    this.update(
      { lastVersion: new Date() },
      { where: { id: this.dataValues.id } }
    );
  }
}

Board.hasMany(Note);
Board.belongsToMany(User, { through: "usersBoards" });

Board.init(
  {
    createdAt: DataTypes.DATE,
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    lastVersion: DataTypes.DATE,
    title: DataTypes.STRING,
    UUID: DataTypes.STRING,
    updatedAt: DataTypes.DATE,
  },
  {
    sequelize: db,
    tableName: "boards",
  }
);

export default Board;
