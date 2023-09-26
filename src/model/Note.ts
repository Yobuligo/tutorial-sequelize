import {
  DataTypes,
  HasManyGetAssociationsMixin,
  HasOneGetAssociationMixin,
  Model,
  ModelStatic,
} from "sequelize";
import { db } from "../db/db";
import { IEntityDetails } from "../shared/IEntityDetails";
import { INote } from "../shared/INote";
import { Board } from "./Board";
import { Vote } from "./Vote";

const note: ModelStatic<Model<INote, IEntityDetails<INote>>> = db.define(
  "notes",
  {
    text: DataTypes.STRING,
    type: DataTypes.INTEGER,
  }
);

export class Note extends note {
  declare getBoard: HasOneGetAssociationMixin<Board>;
  declare getVotes: HasManyGetAssociationsMixin<Vote>;
}

Board.hasMany(Note);
Note.belongsTo(Board);
