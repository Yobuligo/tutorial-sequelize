import {
  BelongsToGetAssociationMixin,
  BelongsToSetAssociationMixin,
  DataTypes,
  Model,
  ModelStatic,
} from "sequelize";
import { db } from "../db/db";
import { IDriverLicense } from "../shared/IDriverLicense";
import { IEntityDetails } from "../shared/core/IEntityDetails";
import { Person } from "./Person";

const driverLicense: ModelStatic<
  Model<IDriverLicense, IEntityDetails<IDriverLicense>>
> = db.define("driver-licenses", { classes: DataTypes.STRING });

export class DriverLicense extends driverLicense {
  // declare getPerson: BelongsToGetAssociationMixin<Person>;
  // declare setPerson: BelongsToSetAssociationMixin<Person, number>;
}

Person.hasOne(DriverLicense);
DriverLicense.belongsTo(Person);
