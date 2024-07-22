import { IEntity } from "./core/IEntity";
import { IPerson } from "./IPerson";

export interface ICar extends IEntity {
  brand: string;

  /**
   * A car belongs to one to many persons (many to many relation)
   */
  persons: IPerson[];
}
