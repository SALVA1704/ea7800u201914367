import { BaseEntity } from '../../../shared/domain/model/base-entity';

export class OutdoorCenter implements BaseEntity {
  #id: number;
  #name: string;
  #activityType: string;
  #capacity: string;
  #latitude: string;
  #longitude: string;

  constructor(props: { id: number; name: string; activityType: string; capacity: string; latitude: string; longitude: string }) {
    this.#id = props.id;
    this.#name = props.name;
    this.#activityType = props.activityType;
    this.#capacity = props.capacity;
    this.#latitude = props.latitude;
    this.#longitude = props.longitude;
  }

  get id(): number {
    return this.#id;
  }

  set id(value: number) {
    this.#id = value;
  }

  get name(): string {
    return this.#name;
  }

  set name(value: string) {
    this.#name = value;
  }

  get activityType(): string {
    return this.#activityType;
  }

  set activityType(value: string) {
    this.#activityType = value;
  }

  get capacity(): string {
    return this.#capacity;
  }

  set capacity(value: string) {
    this.#capacity = value;
  }

  get latitude(): string {
    return this.#latitude;
  }

  set latitude(value: string) {
    this.#latitude = value;
  }

  get longitude(): string {
    return this.#longitude;
  }

  set longitude(value: string) {
    this.#longitude = value;
  }
}

