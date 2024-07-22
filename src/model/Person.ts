import {
  DataTypes,
  HasOneSetAssociationMixin,
  Model,
  ModelStatic,
} from "sequelize";
import { db } from "../db/db";
import { IPerson } from "../shared/IPerson";
import { IEntityDetails } from "../shared/core/IEntityDetails";
import { DriverLicense } from "./DriverLicense";

const person: ModelStatic<Model<IPerson, IEntityDetails<IPerson>>> = db.define(
  "persons",
  { firstname: DataTypes.STRING, lastname: DataTypes.STRING }
);

export class Person extends person {
  declare setDriveLicense: HasOneSetAssociationMixin<DriverLicense, number>;
}
