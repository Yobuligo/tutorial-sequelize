import { HasManyGetAssociationsMixin, Model } from "sequelize";
import { IBoard } from "../shared/IBoard";
import { IEntityDetails } from "../shared/IEntityDetails";
import Note from "./Note";
declare class Board extends Model<IBoard, IEntityDetails<IBoard>> {
    getNotes: HasManyGetAssociationsMixin<Note>;
    updateLastVersion(): void;
}
export default Board;
