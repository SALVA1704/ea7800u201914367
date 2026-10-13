import { BaseEntity } from '../../../shared/domain/model/base-entity';
import { DateTime } from '../../../shared/domain/model/date-time';

export class Reservation implements BaseEntity {
  #id: number;
  #aquaticCenterId: number;
  #activityType: string;
  #activityName: string;
  #participants: string;
  #weatherTemperature: string;
  #reservedAt: DateTime;

  constructor(props: {
    id: number;
    aquaticCenterId: number;
    activityType: string;
    activityName: string;
    participants: string;
    weatherTemperature: string;
    reservedAt: DateTime;
  }) {
    this.#id = props.id;
    this.#aquaticCenterId = props.aquaticCenterId;
    this.#activityType = props.activityType;
    this.#activityName = props.activityName;
    this.#participants = props.participants;
    this.#weatherTemperature = props.weatherTemperature;
    this.#reservedAt = new DateTime();
  }

  get id(): number {
    return this.#id;
  }

  set id(value: number) {
    this.#id = value;
  }

  get aquaticCenterId(): number {
    return this.#aquaticCenterId;
  }

  set aquaticCenterId(value: number) {
    this.#aquaticCenterId = value;
  }

  get activityType(): string {
    return this.#activityType;
  }

  set activityType(value: string) {
    this.#activityType = value;
  }

  get activityName(): string {
    return this.#activityName;
  }

  set activityName(value: string) {
    this.#activityName = value;
  }

  get participants(): string {
    return this.#participants;
  }

  set participants(value: string) {
    this.#participants = value;
  }

  get weatherTemperature(): string {
    return this.#weatherTemperature;
  }

  set weatherTemperature(value: string) {
    this.#weatherTemperature = value;
  }
}

