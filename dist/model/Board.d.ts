import { HasManyAddAssociationMixin, HasManyGetAssociationsMixin, HasManyRemoveAssociationMixin, Model, ModelStatic } from "sequelize";
import { IBoard } from "../shared/IBoard";
import { IEntityDetails } from "../shared/IEntityDetails";
import { Note } from "./Note";
export declare const BoardDefinition: ModelStatic<Model<IBoard, IEntityDetails<IBoard>>>;
export declare class Board extends BoardDefinition {
    addNote: HasManyAddAssociationMixin<Note, number>;
    getNotes: HasManyGetAssociationsMixin<Note>;
    removeNote: HasManyRemoveAssociationMixin<Note, number>;
    updateLastVersion(): void;
}
