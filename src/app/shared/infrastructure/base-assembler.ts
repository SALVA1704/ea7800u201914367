import { BaseEntity } from '../domain/model/base-entity';
import { BaseResource, BaseResponse } from './base-response';

/**
 * Base assembler contract.
 *
 * @summary Translates between infrastructure resources and domain entities.
 * @author Student Name
 */
export interface BaseAssembler<
  TEntity extends BaseEntity,
  TResource extends BaseResource,
  TResponse extends BaseResponse,
> {
  /** Maps one infrastructure resource to a domain entity. */
  toEntityFromResource(resource: TResource): TEntity;
  /** Maps one domain entity to an infrastructure resource. */
  toResourceFromEntity(entity: TEntity): TResource;
  /** Maps a response envelope to a domain entity collection. */
  toEntitiesFromResponse(response: TResponse): TEntity[];
}
