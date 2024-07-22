import { IEntity } from "../core/IEntity";

export interface IBoard extends IEntity {
  lastVersion: Date;
  title: string;
  UUID: string;
}
