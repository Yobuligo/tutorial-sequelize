import { DataTypes, Model } from "sequelize";
import { db } from "../db/db";
import { IEntityDetails } from "../shared/IEntityDetails";
import { INote } from "../shared/INote";
import Board from "./Board";
import Vote from "./Vote";

class Note extends Model<INote, IEntityDetails<INote>> {}

Note.init(
  {
    createdAt: DataTypes.DATE,
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    text: DataTypes.STRING,
    type: DataTypes.INTEGER,
    updatedAt: DataTypes.DATE,
  },
  {
    sequelize: db,
    tableName: "notes",
  }
);

Note.belongsTo(Board);
Note.hasMany(Vote);

export default Note;
