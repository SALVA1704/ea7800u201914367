import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable } from 'rxjs';
import { BaseAssembler } from './base-assembler';
import { BaseResource, BaseResponse } from './base-response';
import { BaseEntity } from '../domain/model/base-entity';
import { ErrorHandlingEnabledBaseType } from './error-handling-enabled-base-type';

/**
 * Generic REST endpoint.
 *
 * @summary Implements the CRUD operations for one resource; concrete endpoints only provide the URL and assembler.
 * @author Student Name
 */
export abstract class BaseApiEndpoint<
  TEntity extends BaseEntity,
  TResource extends BaseResource,
  TResponse extends BaseResponse,
  TAssembler extends BaseAssembler<TEntity, TResource, TResponse>,
> extends ErrorHandlingEnabledBaseType {
  protected constructor(
    protected http: HttpClient,
    protected endpointUrl: string,
    protected assembler: TAssembler,
  ) {
    super();
  }

  /**
   * Loads all records. Supports plain arrays (json-server) and response envelopes (DummyJSON).
   */
  getAll(): Observable<TEntity[]> {
    return this.http.get<TResponse | TResource[]>(this.endpointUrl).pipe(
      map((response) =>
        Array.isArray(response)
          ? response.map((resource) => this.assembler.toEntityFromResource(resource))
          : this.assembler.toEntitiesFromResponse(response),
      ),
      catchError(this.handleError('Failed to fetch entities')),
    );
  }

  /**
   * Loads one record by identifier.
   *
   * @param id - Record identifier.
   */
  getById(id: number): Observable<TEntity> {
    return this.http.get<TResource>(`${this.endpointUrl}/${id}`).pipe(
      map((resource) => this.assembler.toEntityFromResource(resource)),
      catchError(this.handleError('Failed to fetch entity')),
    );
  }

  /**
   * Persists a new entity. When the entity id is 0, the id is omitted so the backend generates it.
   *
   * @param entity - Entity to create.
   */
  create(entity: TEntity): Observable<TEntity> {
    const { id, ...resourceWithoutId } = this.assembler.toResourceFromEntity(entity);
    const body = id ? { id, ...resourceWithoutId } : resourceWithoutId;
    return this.http.post<TResource>(this.endpointUrl, body).pipe(
      map((created) => this.assembler.toEntityFromResource(created)),
      catchError(this.handleError('Failed to create entity')),
    );
  }

  /**
   * Persists the changes of an existing entity.
   *
   * @param entity - Entity with the changes.
   * @param id - Record identifier.
   */
  update(entity: TEntity, id: number): Observable<TEntity> {
    const resource = this.assembler.toResourceFromEntity(entity);
    return this.http.put<TResource>(`${this.endpointUrl}/${id}`, resource).pipe(
      map((updated) => this.assembler.toEntityFromResource(updated)),
      catchError(this.handleError('Failed to update entity')),
    );
  }

  /**
   * Deletes one record by identifier.
   *
   * @param id - Record identifier.
   */
  delete(id: number): Observable<void> {
    return this.http
      .delete<void>(`${this.endpointUrl}/${id}`)
      .pipe(catchError(this.handleError('Failed to delete entity')));
  }
}
