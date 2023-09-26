import {
  DataTypes,
  HasManyAddAssociationMixin,
  HasManyGetAssociationsMixin,
  HasManyRemoveAssociationMixin,
  Model,
  ModelStatic,
} from "sequelize";
import { db } from "../db/db";
import { IBoard } from "../shared/IBoard";
import { IEntityDetails } from "../shared/IEntityDetails";
import { Note } from "./Note";

// Define the model and provide the name of the table
const board: ModelStatic<Model<IBoard, IEntityDetails<IBoard>>> = db.define(
  "boards",
  {
    lastVersion: DataTypes.DATE,
    title: DataTypes.STRING,
    UUID: DataTypes.STRING,
  }
);

// create the class which is derived from the definition
// It is possible to declare methods to provide the access to the associated objects (like here Note)
export class Board extends board {
  declare addNote: HasManyAddAssociationMixin<Note, number>;
  declare getNotes: HasManyGetAssociationsMixin<Note>;
  declare removeNote: HasManyRemoveAssociationMixin<Note, number>;

  updateLastVersion() {
    this.update(
      { lastVersion: new Date() },
      { where: { id: this.dataValues.id } }
    );
  }
}
