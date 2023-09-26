import { DataTypes, Model } from "sequelize";
import { db } from "../db/db";
import { IEntityDetails } from "../shared/IEntityDetails";
import { IUser } from "../shared/IUser";
import Board from "./Board";
import Vote from "./Vote";

class User extends Model<IUser, IEntityDetails<IUser>> {}

User.hasMany(Vote);
User.belongsToMany(Board, { through: "usersBoards" });

User.init(
  {
    createdAt: DataTypes.DATE,
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    password: DataTypes.STRING,
    updatedAt: DataTypes.DATE,
    username: DataTypes.STRING,
  },
  {
    sequelize: db,
    tableName: "users",
  }
);

export default User;
