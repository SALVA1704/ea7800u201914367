import { BaseResource, BaseResponse } from '../../shared/infrastructure/base-response';
import { DateTime } from '../../shared/domain/model/date-time';

export interface ReservationResponse extends BaseResponse {
  OutdoorCenterResponse: ReservationResource[];
}
export interface ReservationResource extends BaseResource {
  id: number;
  aquaticCenterId: number;
  activityId: number;
  activityName: string;
  participants: string;
  weatherTemperature: string;
  reservedAt: string  ;
  name: string;
  activityType: string;
  capacity: string;
  latitude: string;
  longitude: string;
}
