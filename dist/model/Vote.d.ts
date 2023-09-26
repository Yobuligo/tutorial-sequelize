import { Model } from "sequelize";
import { IEntityDetails } from "../shared/IEntityDetails";
import { IVote } from "../shared/IVote";
declare class Vote extends Model<IVote, IEntityDetails<IVote>> {
}
export default Vote;
