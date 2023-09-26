import { Model, ModelStatic } from "sequelize";
import { IEntityDetails } from "../shared/IEntityDetails";
import { IVote } from "../shared/IVote";
export declare const VoteDefinition: ModelStatic<Model<IVote, IEntityDetails<IVote>>>;
export declare class Vote extends VoteDefinition {
}
