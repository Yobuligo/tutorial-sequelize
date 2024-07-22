import {
  BelongsToManyAddAssociationMixin,
  BelongsToManyGetAssociationsMixin,
  DataTypes,
  HasManyAddAssociationMixin,
  HasManyGetAssociationsMixin,
  HasOneGetAssociationMixin,
  HasOneSetAssociationMixin,
  Model,
  ModelStatic,
} from "sequelize";
import { db } from "../db/db";
import { IPerson } from "../shared/IPerson";
import { IEntityDetails } from "../shared/core/IEntityDetails";
import { Car } from "./Car";
import { Certificate } from "./Certificate";
import { DriverLicense } from "./DriverLicense";

const person: ModelStatic<Model<IPerson, IEntityDetails<IPerson>>> = db.define(
  "persons",
  { firstname: DataTypes.STRING, lastname: DataTypes.STRING }
);

export class Person extends person {
  // declare getDriverLicense: HasOneGetAssociationMixin<DriverLicense>;
  // declare setDriverLicense: HasOneSetAssociationMixin<DriverLicense, number>;
  // declare addCertificate: HasManyAddAssociationMixin<Certificate, number>;
  // declare getCertificates: HasManyGetAssociationsMixin<Certificate>;
  // declare getCars: BelongsToManyGetAssociationsMixin<Car>;
  // declare addCar: BelongsToManyAddAssociationMixin<Car, number>;
}



// Person.hasMany(Certificate);
// Certificate.belongsTo(Person);

// Person.belongsToMany(Car, { through: "person-cars" });
// Car.belongsToMany(Person, { through: "person-cars" });
