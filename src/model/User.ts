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

Board.belongsToMany(user, { through: "usersBoards" });
user.belongsToMany(Board, { through: "usersBoards" });

export class User extends user {
  declare getBoards: BelongsToManyGetAssociationsMixin<Board>;
  declare getVotes: HasManyGetAssociationsMixin<Vote>;
}
