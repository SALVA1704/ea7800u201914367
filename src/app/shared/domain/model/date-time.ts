/**
 * Date and time value object.
 *
 * @summary Wraps a native Date so domain entities do not depend on raw strings or Date objects.
 * @author Student Name
 */
export class DateTime {
  private readonly date: Date;

  /**
   * Creates a new DateTime instance.
   *
   * @param value - ISO-8601 string or Date object. When omitted, the current date and time is used.
   */
  constructor(value?: string | Date) {
    this.date = value ? new Date(value) : new Date();
  }

  /**
   * Returns the ISO-8601 string representation of the date and time.
   */
  toString(): string {
    return this.date.toISOString();
  }

  /**
   * Returns the native Date object, useful for Angular DatePipe.
   */
  toDate(): Date {
    return this.date;
  }
}
