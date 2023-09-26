import {
  DataTypes,
  HasOneGetAssociationMixin,
  Model,
  ModelStatic,
} from "sequelize";
import { db } from "../db/db";
import { IEntityDetails } from "../shared/IEntityDetails";
import { INote } from "../shared/INote";
import { Board } from "./Board";

const note: ModelStatic<Model<INote, IEntityDetails<INote>>> = db.define(
  "notes",
  {
    text: DataTypes.STRING,
    type: DataTypes.INTEGER,
  }
);

Board.hasMany(note);
note.belongsTo(Board);

export class Note extends note {
  declare getBoard: HasOneGetAssociationMixin<Board>;
}
