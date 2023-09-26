import { IEntity } from "./IEntity";
export interface INote extends IEntity {
    text: string;
    type: number;
}
