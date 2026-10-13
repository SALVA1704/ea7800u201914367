import { BaseAssembler } from '../../shared/infrastructure/base-assembler';
import { OutdoorCenter } from '../domain/model/outdoor-center.entity';
import { OutdoorCenterResource, OutdoorCenterResponse } from './outdoor-center-response';


export class OutdoorCenterAssembler implements BaseAssembler<
  OutdoorCenter,
  OutdoorCenterResource,
  OutdoorCenterResponse
> {
  toEntitiesFromResponse = (response: OutdoorCenterResponse): OutdoorCenter[] =>
    response.OutdoorCenterResponse.map((resource) => this.toEntityFromResource(resource));
  toEntityFromResource = (resource: OutdoorCenterResource): OutdoorCenter =>
    new OutdoorCenter({
      id: resource.id,
      name: resource.name,
      activityType:resource.activityType,
      capacity:resource.capacity,
      latitude:resource.latitude,
      longitude:resource.longitude,

    });

  toResourceFromEntity = (entity: OutdoorCenter): OutdoorCenterResource =>
    ({
      id: entity.id,
      name: entity.name,
      activityType: entity.activityType,
      capacity: entity.capacity,
      latitude: entity.latitude,
      longitude: entity.longitude,
    }) as OutdoorCenterResource;
}
