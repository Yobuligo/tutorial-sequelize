import { Model, ModelStatic } from "sequelize";
import { IEntity } from "../../shared/IEntity";
import { IEntityDetails } from "../../shared/IEntityDetails";

export type ISequelizeModel<T extends IEntity> = ModelStatic<
  Model<T, IEntityDetails<T>>
>;
