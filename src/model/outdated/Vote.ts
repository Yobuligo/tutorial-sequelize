import {
  BelongsToGetAssociationMixin,
  BelongsToSetAssociationMixin,
  DataTypes,
  Model,
  ModelStatic,
} from "sequelize";
import { db } from "../../db/db";
import { IEntityDetails } from "../../shared/core/IEntityDetails";
import { IVote } from "../../shared/outdated/IVote";
import { Note } from "./Note";
import { User } from "./User";

const vote: ModelStatic<Model<IVote, IEntityDetails<IVote>>> = db.define(
  "votes",
  {
    type: DataTypes.INTEGER,
  }
);

export class Vote extends vote {
  declare getNote: BelongsToGetAssociationMixin<Note>;
  declare getUser: BelongsToGetAssociationMixin<User>;
  declare setNote: BelongsToSetAssociationMixin<Note, number>;
  declare setUser: BelongsToSetAssociationMixin<User, number>;
}

Note.hasMany(Vote);
Vote.belongsTo(Note);

User.hasMany(Vote);
Vote.belongsTo(User);
