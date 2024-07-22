import { DataTypes, Model, ModelStatic } from "sequelize";
import { db } from "../db/db";
import { IDriverLicense } from "../shared/IDriverLicense";
import { IEntityDetails } from "../shared/core/IEntityDetails";
import { Person } from "./Person";

const driverLicense: ModelStatic<
  Model<IDriverLicense, IEntityDetails<IDriverLicense>>
> = db.define("driver-licenses", { classes: DataTypes.STRING });

export class DriverLicense extends driverLicense {}

// seems to be best practice to provide the relation to the "weaker" model
Person.hasOne(DriverLicense, { foreignKey: "personId", as: "driverLicense" }); // needs to be mapped to different foreign-key in one to one relation -> otherwise I get an error personId is a duplicate key
DriverLicense.belongsTo(Person);
