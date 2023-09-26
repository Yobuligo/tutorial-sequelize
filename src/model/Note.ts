import { DataTypes, Model, ModelStatic } from "sequelize";
import { db } from "../db/db";
import { IEntityDetails } from "../shared/IEntityDetails";
import { INote } from "../shared/INote";
import { BoardDefinition } from "./Board";
import { VoteDefinition } from "./Vote";

export const NoteDefinition: ModelStatic<Model<INote, IEntityDetails<INote>>> =
  db.define("notes", {
    text: DataTypes.STRING,
    type: DataTypes.INTEGER,
  });

NoteDefinition.hasMany(VoteDefinition);
NoteDefinition.belongsTo(BoardDefinition);

export class Note extends NoteDefinition {}
