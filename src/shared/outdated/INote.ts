import { IEntity } from "../core/IEntity";

export interface INote extends IEntity {
  text: string;
  type: number;
}
