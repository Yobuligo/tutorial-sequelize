import {
  BelongsToManyAddAssociationMixin,
  BelongsToManyGetAssociationsMixin,
  DataTypes,
  Model,
  ModelStatic,
} from "sequelize";
import { db } from "../db/db";
import { ICar } from "../shared/ICar";
import { IEntityDetails } from "../shared/core/IEntityDetails";
import { Person } from "./Person";

const car: ModelStatic<Model<ICar, IEntityDetails<ICar>>> = db.define(
  "cars",
  { brand: DataTypes.STRING }
);

export class Car extends car {
  declare addPerson: BelongsToManyAddAssociationMixin<Person, number>;
  declare getPersons: BelongsToManyGetAssociationsMixin<Person>;
}
