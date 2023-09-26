import { Model } from "sequelize";
import { IEntityDetails } from "../shared/IEntityDetails";
import { IUser } from "../shared/IUser";
declare class User extends Model<IUser, IEntityDetails<IUser>> {
}
export default User;
