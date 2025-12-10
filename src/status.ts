import { StatusCode, StatusMessages } from "./http.status.js";

/**
 * Custom error interface that includes a status code
 * @extends Error
 */
export interface IHttpError extends Error {
  /** HTTP status code associated with the error */
  code: number;
}

/**
 * Standard interface for API response structure
 * @template T - The type of the payload data (defaults to any)
 */
export interface IStatus<T = any> {
  /**
   * The HTTP status code of the response
   */
  code: number;

  /**
   * Indicates if the request was successful
   */
  success: boolean;

  /**
   * Human-readable message describing the result
   */
  message: string;

  /**
   * Optional payload data returned from the request
   */
  payload: T | null;
}

/**
 * A standardized HTTP status response handler for building consistent API responses.
 * This class provides methods to create success and error responses with proper typing.
 *
 * @template T - The type of the payload data (defaults to any)
 *
 * @example
 * ```typescript
 * const status = new Status<{ userId: number }>();
 * const { details } = req.body;
 *
 * if (details) {
 *  status.successStatus(StatusCode.CREATED, { userId: 123 });
 * } else {
 *  status.errorStatus(StatusCode.BAD_REQUEST);
 * }
 * return res.status(status.code).json(status);
 * ```
 */
export class Status<T = any> implements IStatus<T> {
  /** HTTP status code */
  code: number;
  /** Indicates if the request was successful */
  success: boolean;
  /** Human-readable message */
  message: string;
  /** Response payload data */
  payload: T | null;

  /**
   * Creates a new Status instance with default values
   * Defaults to 400 Bad Request error state
   */
  constructor() {
    this.code = 400;
    this.success = false;
    this.message = "";
    this.payload = null;
  }

  /**
   * Internal method to set message and payload properties
   * @param options - Partial status properties to update
   * @param options.message - The message to set
   * @param options.payload - The payload data to set
   */
  private set({ message, payload }: Partial<IStatus<T>>): void {
    if (message) this.message = message;
    if (payload) this.payload = payload;
  }

  /**
   * Sets the status to success with provided options
   * Automatically sets the appropriate success status message
   * @param success - Success response options
   * @param payload - Optional success payload data
   */
  successStatus(success: StatusCode, payload?: T): void {
    this.code = success;
    this.success = true;
    this.set({ message: StatusMessages[success], payload });
  }

  /**
   * Sets the status to error based on an HTTP status code
   * Automatically sets the appropriate error status message
   * @param error - The HTTP error code from status codes
   */
  errorStatus(error: StatusCode): void {
    this.code = error;
    this.success = false;
    this.payload = null;
    this.set({ message: StatusMessages[error] });
  }

  /**
   * Static factory method to create an error status from an HTTP error code
   * @template T - The type of the payload data
   * @param error - The HTTP error code
   * @returns A new Status instance configured for error
   *
   * @example
   * ```typescript
   * const status = Status.ERR(StatusCode.NOT_FOUND);
   * ```
   */
  static ERR<T>(error: StatusCode): Status<T> {
    const status = new Status<T>();
    status.errorStatus(error);
    return status;
  }

  /**
   * Static factory method to create a success status
   * @template T - The type of the payload data
   * @param success - Success status code
   * @param payload - Success payload data
   * @returns A new Status instance configured for success
   *
   * @example
   * ```typescript
   * const status = Status.SUCCESS(StatusCode.CREATED, { id: 1, name: "John" });
   * ```
   */
  static SUCCESS<T>(success: StatusCode, payload: T): Status<T> {
    const status = new Status<T>();
    status.successStatus(success, payload);
    return status;
  }

  /**
   * Handles custom errors that implement the IHttpError interface
   * @param err - Custom error object with code property
   *
   * @example
   * ```typescript
   * const customError = new Error("Not authorized") as IHttpError;
   * customError.code = 401;
   * status.error(customError);
   * ```
   */
  error(err: IHttpError): void {
    this.code = err.code;
    this.success = false;
    this.payload = null;
    this.set({ message: err.message });
  }

  /**
   * Sets the status to success with provided options and default OK status code
   * @param options - Success response options
   * @param options.message - Success message
   * @param options.payload - Success payload data
   *    * @example
   * ```typescript
   * status.successOK({message: "User created", payload: { id: 1, name: "John" }});
   * ```
   */
  successOK(options: Partial<IStatus<T>>): void {
    this.code = StatusCode.OK;
    this.success = true;
    this.set(options);
  }

  /**
   * Handles generic JavaScript errors as internal server errors
   * Use this as a fallback for unexpected errors
   * @param err - Generic JavaScript Error object
   *
   * @example
   * ```typescript
   * try {
   *   // some operation
   * } catch (err) {
   *   status.genericError(err);
   * }
   * ```
   */
  genericError(err: Error): void {
    this.code = StatusCode.INTERNAL_SERVER_ERROR;
    this.success = false;
    this.payload = null;
    this.set({ message: err.message });
  }
}
