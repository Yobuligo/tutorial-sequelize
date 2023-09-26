import { DataTypes, Model, ModelStatic } from "sequelize";
import { db } from "../db/db";
import { IEntityDetails } from "../shared/IEntityDetails";
import { IVote } from "../shared/IVote";
import { Note } from "./Note";
import { User } from "./User";

const vote: ModelStatic<Model<IVote, IEntityDetails<IVote>>> = db.define(
  "votes",
  {
    type: DataTypes.INTEGER,
  }
);

Note.hasMany(vote);
vote.belongsTo(Note);

User.hasMany(vote);
vote.belongsTo(User);

export class Vote extends vote {}
