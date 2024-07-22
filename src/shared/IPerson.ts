import { IEntity } from "./core/IEntity";

export interface IPerson extends IEntity {
  firstname: string;
  lastname: string;
}
