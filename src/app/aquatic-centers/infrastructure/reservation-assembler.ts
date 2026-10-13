/*import { inject, Service } from '@angular/core';
import { BaseAssembler } from '../../shared/infrastructure/base-assembler';
import { OutdoorCenter } from '../domain/model/outdoor-center.entity';
import { OutdoorCenterResource, OutdoorCenterResponse } from './outdoor-center-response';
import { Reservation } from '../domain/model/reservation.entity';
import { ReservationResource, ReservationResponse } from './reservation-response';
import { DateTime } from '../../shared/domain/model/date-time';


export class ReservationAssembler implements BaseAssembler<
  Reservation,
  ReservationResource,
  ReservationResponse
> {
  toEntityFromResource(resource: ReservationResource): Reservation{
    new Reservation({
      id: resource.id,
      aquaticCenterId: resource.aquaticCenterId,
      activityType: resource.activityType,
      activityName: resource.activityName;
      participants: resource.participants;
      weatherTemperature: resource.weatherTemperature;
      reservedAt: new DateTime(resource.reservedAt);

    });
  }
  toEntitiesFromResponse(response: ReservationResponse): Reservation[] {
    return response.reservation.map((article) => this.toEntityFromResource(article));
  }

  toResourceFromEntity = (entity: OutdoorCenter): OutdoorCenterResource =>
    ({
      id: entity.id,
      name: entity.name,
      activityType: entity.activityType,
      capacity: entity.capacity,
      latitude: entity.latitude,
      longitude: entity.longitude,
    }) as OutdoorCenterResource;

}*/
