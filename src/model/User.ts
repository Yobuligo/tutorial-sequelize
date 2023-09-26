import {
  BelongsToManyGetAssociationsMixin,
  DataTypes,
  HasManyGetAssociationsMixin,
  Model,
  ModelStatic,
} from "sequelize";
import { db } from "../db/db";
import { IEntityDetails } from "../shared/IEntityDetails";
import { IUser } from "../shared/IUser";
import { Board } from "./Board";
import { Vote } from "./Vote";

const user: ModelStatic<Model<IUser, IEntityDetails<IUser>>> = db.define(
  "users",
  {
    password: DataTypes.STRING,
    username: DataTypes.STRING,
  }
);

export class User extends user {
  declare getBoards: BelongsToManyGetAssociationsMixin<Board>;
  declare getVotes: HasManyGetAssociationsMixin<Vote>;
}

Board.belongsToMany(User, { through: "usersBoards" });
User.belongsToMany(Board, { through: "usersBoards" });
