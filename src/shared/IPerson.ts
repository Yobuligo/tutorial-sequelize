import { ICar } from "./ICar";
import { ICertificate } from "./ICertificate";
import { IDriverLicense } from "./IDriverLicense";
import { IEntity } from "./core/IEntity";

export interface IPerson extends IEntity {
  /**
   * A person can have one driver license
   */
  driverLicense: IDriverLicense;

  /**
   * A person can have one to many certificates
   */
  certificates: ICertificate[];

  /**
   * A person belongs to one to many cars (many to many relation)
   */
  cars: ICar[];

  firstname: string;
  lastname: string;
}
