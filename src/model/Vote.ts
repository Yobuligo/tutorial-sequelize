import { DataTypes, Model } from "sequelize";
import { db } from "../db/db";
import { IEntityDetails } from "../shared/IEntityDetails";
import { IVote } from "../shared/IVote";
import Note from "./Note";
import User from "./User";

class Vote extends Model<IVote, IEntityDetails<IVote>> {}

Vote.belongsTo(Note);
Vote.belongsTo(User);

Vote.init(
  {
    createdAt: DataTypes.DATE,
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    type: DataTypes.INTEGER,
    updatedAt: DataTypes.DATE,
  },
  { sequelize: db, tableName: "votes" }
);

export default Vote;
