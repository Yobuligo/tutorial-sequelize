import { HasManyGetAssociationsMixin, Model, ModelStatic } from "sequelize";
import { IEntityDetails } from "../shared/IEntityDetails";
import { IUser } from "../shared/IUser";
import { Vote } from "./Vote";
export declare const UserDefinition: ModelStatic<Model<IUser, IEntityDetails<IUser>>>;
export declare class User extends UserDefinition {
    getVotes: HasManyGetAssociationsMixin<Vote>;
}
