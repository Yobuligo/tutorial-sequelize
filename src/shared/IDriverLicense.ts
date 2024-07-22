import { IEntity } from "./core/IEntity";
import { IPerson } from "./IPerson";

export interface IDriverLicense extends IEntity {
  classes: string;

  /**
   * A driver license belongs to one person
   */
  person: IPerson;
}
