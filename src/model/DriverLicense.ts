import { DataTypes, Model, ModelStatic } from "sequelize";
import { db } from "../db/db";
import { IDriverLicense } from "../shared/IDriverLicense";
import { IEntityDetails } from "../shared/core/IEntityDetails";
import { Person } from "./Person";

const driverLicense: ModelStatic<
  Model<IDriverLicense, IEntityDetails<IDriverLicense>>
> = db.define("driver-licenses", { classes: DataTypes.STRING });

export class DriverLicense extends driverLicense {}

Person.hasOne(DriverLicense, { foreignKey: "personId", as: "driveLicense" }); // needs to be mapped to different foreign-key -> otherwise I get an error personId is a duplicate key
DriverLicense.belongsTo(Person);
