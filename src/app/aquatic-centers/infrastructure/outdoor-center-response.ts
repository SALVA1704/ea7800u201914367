import { BaseResource, BaseResponse } from '../../shared/infrastructure/base-response';

export interface OutdoorCenterResponse extends BaseResponse {
  OutdoorCenterResponse: OutdoorCenterResource[];
}
export interface OutdoorCenterResource extends BaseResource {
  id: number;
  name: string;
  activityType: string;
  capacity: string;
  latitude: string;
  longitude: string;

}
