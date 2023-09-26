import { Model, ModelStatic } from "sequelize";
import { IEntityDetails } from "../shared/IEntityDetails";
import { INote } from "../shared/INote";
export declare const NoteDefinition: ModelStatic<Model<INote, IEntityDetails<INote>>>;
export declare class Note extends NoteDefinition {
}
