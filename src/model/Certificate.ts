import {
  BelongsToGetAssociationMixin,
  BelongsToSetAssociationMixin,
  DataTypes,
  Model,
  ModelStatic,
} from "sequelize";
import { db } from "../db/db";
import { ICertificate } from "../shared/ICertificate";
import { IEntityDetails } from "../shared/core/IEntityDetails";
import { Person } from "./Person";

const certificate: ModelStatic<
  Model<ICertificate, IEntityDetails<ICertificate>>
> = db.define("certificates", { title: DataTypes.STRING });

export class Certificate extends certificate {
  declare getPerson: BelongsToGetAssociationMixin<Person>;
  declare setPerson: BelongsToSetAssociationMixin<Person, number>;
}

// seems to be best practice to provide the relation to the "weaker" model
Person.hasMany(Certificate);
Certificate.belongsTo(Person);
