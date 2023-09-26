import { DataTypes, Model, ModelStatic } from "sequelize";
import { db } from "../db/db";
import { IEntityDetails } from "../shared/IEntityDetails";
import { IVote } from "../shared/IVote";
import { NoteDefinition } from "./Note";
import { UserDefinition } from "./User";

export const VoteDefinition: ModelStatic<Model<IVote, IEntityDetails<IVote>>> =
  db.define("votes", {
    type: DataTypes.INTEGER,
  });

VoteDefinition.belongsTo(NoteDefinition);
VoteDefinition.belongsTo(UserDefinition);

export class Vote extends VoteDefinition {}
