import { IEntity } from "./core/IEntity";
import { IPerson } from "./IPerson";

export interface ICertificate extends IEntity {
  /**
   * A certificate belongs to one person
   */
  person: IPerson;
  
  title: string;
}
