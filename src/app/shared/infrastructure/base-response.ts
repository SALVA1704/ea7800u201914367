/**
 * Base contracts for API resources and responses.
 *
 * @summary Defines the minimum shape shared by every resource and response envelope.
 * @author Student Name
 */
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface BaseResponse {}

/**
 * Base contract for one resource returned by an API.
 */
export interface BaseResource {
  id: number;
}
