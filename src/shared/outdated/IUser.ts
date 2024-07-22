import { IEntity } from "../core/IEntity";

export interface IUser extends IEntity {
  username: string;
  password: string;
}
