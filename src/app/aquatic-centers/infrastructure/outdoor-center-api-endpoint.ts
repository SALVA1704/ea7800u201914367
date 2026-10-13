import { OutdoorCenter } from '../domain/model/outdoor-center.entity';
import { OutdoorCenterResource, OutdoorCenterResponse } from './outdoor-center-response';
import { OutdoorCenterAssembler } from './outdoor-center-assembler';
import { HttpClient } from '@angular/common/http';
import { BaseApiEndpoint } from '../../shared/infrastructure/base-api-endpoint';
import { environment } from '../../../environments/environment';

export class OutdoorCenterApiEndpoint extends BaseApiEndpoint<
  OutdoorCenter,
  OutdoorCenterResource,
  OutdoorCenterResponse,
  OutdoorCenterAssembler
> {

  constructor(http: HttpClient) {
    super(
      http,
      `${environment.platformProviderApiBaseUrl}${environment.platformProviderOutdoorCenterEndpointPath}`,
      new OutdoorCenterAssembler(),
    );
  }
}
