import {
  DataTypes,
  HasManyGetAssociationsMixin,
  Model,
  ModelStatic,
} from "sequelize";
import { db } from "../db/db";
import { IEntityDetails } from "../shared/IEntityDetails";
import { IUser } from "../shared/IUser";
import { BoardDefinition } from "./Board";
import { Vote, VoteDefinition } from "./Vote";

export const UserDefinition: ModelStatic<Model<IUser, IEntityDetails<IUser>>> =
  db.define("users", {
    password: DataTypes.STRING,
    username: DataTypes.STRING,
  });

UserDefinition.hasMany(VoteDefinition);
UserDefinition.belongsToMany(BoardDefinition, { through: "usersBoards" });

export class User extends UserDefinition {
  declare getVotes: HasManyGetAssociationsMixin<Vote>;
}
