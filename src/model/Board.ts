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
import { Note, NoteDefinition } from "./Note";
import { UserDefinition } from "./User";

export const BoardDefinition: ModelStatic<
  Model<IBoard, IEntityDetails<IBoard>>
> = db.define("boards", {
  lastVersion: DataTypes.DATE,
  title: DataTypes.STRING,
  UUID: DataTypes.STRING,
});

BoardDefinition.hasMany(NoteDefinition);
BoardDefinition.belongsToMany(UserDefinition, { through: "usersBoards" });

export class Board extends BoardDefinition {
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
