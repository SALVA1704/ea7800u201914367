import { HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

/**
 * Base type with HTTP error handling.
 *
 * @summary Converts HTTP errors into readable error messages for the application layer.
 * @author Student Name
 */
export abstract class ErrorHandlingEnabledBaseType {
  /**
   * Builds an operation-scoped HTTP error mapper.
   *
   * @param operation - Description of the operation that failed.
   * @returns Function that transforms an {@link HttpErrorResponse} into a failed observable.
   */
  protected handleError =
    (operation: string) =>
    (error: HttpErrorResponse): Observable<never> => {
      let errorMessage = operation;
      if (error.status === 404) {
        errorMessage = `${operation}: Resource not found`;
      } else if (error.error instanceof ErrorEvent) {
        errorMessage = `${operation}: ${error.error.message}`;
      } else {
        errorMessage = `${operation}: ${error.status || 'Unexpected error'}`;
      }
      return throwError(() => new Error(errorMessage));
    };
}
