import {
  DataTypes,
  HasManyGetAssociationsMixin,
  HasOneGetAssociationMixin,
  Model,
  ModelStatic,
  NonAttribute,
} from "sequelize";
import { db } from "../../db/db";
import { IEntityDetails } from "../../shared/core/IEntityDetails";
import { INote } from "../../shared/outdated/INote";
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
  declare board?: NonAttribute<Board>;
  declare getBoard: HasOneGetAssociationMixin<Board>;
  declare getVotes: HasManyGetAssociationsMixin<Vote>;
}

// A relation e.g. 1 to n should be declared on both sides. The source and the target.
// Here as example:
//    Board has Notes
//    Each to Note belongs to a Board (here the foreign key field is set to table Note with name boardId)
//    
// In addition it is possible to provide options. Here we add the option "onDelete: 'cascade'" which will deleted all notes if the corresponding board is deleted
Board.hasMany(Note, { onDelete: "cascade" });
Note.belongsTo(Board);
