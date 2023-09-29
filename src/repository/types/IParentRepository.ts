import { IEntity } from "../../shared/IEntity";
import { IEntityDetails } from "../../shared/IEntityDetails";
import { IFilterConfig } from "../types/IFilterConfig";
import { IRepository } from "./IRepository";

/**
 * An implementation of this interface represents a parent repository.
 * A parent repository refers to an entity {@link TEntity} that has to parent and is standalone.
 */
export interface IParentRepository<TEntity extends IEntity>
  extends IRepository<TEntity> {
  add(entity: IEntityDetails<TEntity>): Promise<TEntity>;
  findAll(filter?: IFilterConfig<TEntity>): Promise<TEntity[]>;
  findFirst(filter?: IFilterConfig<TEntity>): Promise<TEntity | undefined>;
}
