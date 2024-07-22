import { Model, ModelStatic } from "sequelize";
import { IEntity } from "../../../shared/core/IEntity";
import { IEntityDetails } from "../../../shared/core/IEntityDetails";

export type ISequelizeModel<T extends IEntity> = ModelStatic<
  Model<T, IEntityDetails<T>>
>;
