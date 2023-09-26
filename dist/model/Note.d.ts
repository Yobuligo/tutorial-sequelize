import { Model } from "sequelize";
import { IEntityDetails } from "../shared/IEntityDetails";
import { INote } from "../shared/INote";
declare class Note extends Model<INote, IEntityDetails<INote>> {
}
export default Note;
