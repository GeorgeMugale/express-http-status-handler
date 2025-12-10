/**
 * Enum representing standard HTTP status codes used throughout the application.
 * Codes are grouped into the standard HTTP categories:
 * - 2xx: Success
 * - 3xx: Redirection
 * - 4xx: Client errors
 * - 5xx: Server errors
 */
export enum StatusCode {
  // -------------------------
  // 2xx — Success
  // -------------------------

  /** 200 - The request succeeded. */
  OK = 200,

  /** 201 - The request succeeded and a new resource was created. */
  CREATED = 201,

  /** 202 - The request has been accepted for processing but is not completed. */
  ACCEPTED = 202,

  /** 203 - Returned metadata is not from the origin server. */
  NON_AUTHORITATIVE = 203,

  /** 204 - The request succeeded with no content to return. */
  NO_CONTENT = 204,

  /** 205 - The client should reset the document view. */
  RESET_CONTENT = 205,

  /** 206 - Partial content was returned for a range request. */
  PARTIAL_CONTENT = 206,

  // -------------------------
  // 3xx — Redirects
  // -------------------------

  /** 300 - Multiple options for the resource exist. */
  MULTIPLE_CHOICES = 300,

  /** 301 - The resource has been moved permanently. */
  MOVED_PERMANENTLY = 301,

  /** 302 - The resource was found but temporarily resides elsewhere. */
  FOUND = 302,

  /** 303 - The response can be found under another URI using GET. */
  SEE_OTHER = 303,

  /** 304 - The resource has not changed since the last request. */
  NOT_MODIFIED = 304,

  /** 307 - Temporary redirect; method must remain unchanged. */
  TEMPORARY_REDIRECT = 307,

  /** 308 - Permanent redirect; method must remain unchanged. */
  PERMANENT_REDIRECT = 308,

  // -------------------------
  // 4xx — Client Errors
  // -------------------------

  /** 400 - The request was malformed or missing parameters. */
  BAD_REQUEST = 400,

  /** 401 - Authentication is required or failed. */
  UNAUTHORIZED = 401,

  /** 402 - Payment is required to access the resource. */
  PAYMENT_REQUIRED = 402,

  /** 403 - The client is authenticated but not authorized. */
  FORBIDDEN = 403,

  /** 404 - The requested resource could not be found. */
  NOT_FOUND = 404,

  /** 405 - The HTTP method is not allowed for this resource. */
  METHOD_NOT_ALLOWED = 405,

  /** 406 - The requested format is not acceptable. */
  NOT_ACCEPTABLE = 406,

  /** 407 - Proxy authentication is required. */
  PROXY_AUTH_REQUIRED = 407,

  /** 408 - The client took too long to send a request. */
  REQUEST_TIMEOUT = 408,

  /** 409 - Conflict occurred, likely due to existing resource state. */
  CONFLICT = 409,

  /** 410 - The requested resource is permanently gone. */
  GONE = 410,

  /** 411 - Content-Length header is required. */
  LENGTH_REQUIRED = 411,

  /** 412 - A precondition in the request headers failed. */
  PRECONDITION_FAILED = 412,

  /** 413 - The request payload is too large. */
  PAYLOAD_TOO_LARGE = 413,

  /** 414 - The URI requested is too long. */
  URI_TOO_LONG = 414,

  /** 415 - The request media type is not supported. */
  UNSUPPORTED_MEDIA_TYPE = 415,

  /** 416 - The requested range cannot be satisfied. */
  RANGE_NOT_SATISFIABLE = 416,

  /** 417 - The expectation given in the Expect header was not met. */
  EXPECTATION_FAILED = 417,

  /** 418 - I’m a teapot (RFC 2324). Used as a playful error response. */
  IM_A_TEAPOT = 418,

  /** 421 - The request was directed to the wrong server. */
  MISDIRECTED_REQUEST = 421,

  /** 422 - The request was well-formed but contains semantic errors. */
  UNPROCESSABLE_CONTENT = 422,

  /** 423 - The resource is locked. */
  LOCKED = 423,

  /** 424 - The request failed due to a dependency failure. */
  FAILED_DEPENDENCY = 424,

  /** 425 - The request is too early and should be retried later. */
  TOO_EARLY = 425,

  /** 426 - The client should switch to a different protocol. */
  UPGRADE_REQUIRED = 426,

  /** 428 - The request requires conditional headers. */
  PRECONDITION_REQUIRED = 428,

  /** 429 - The client has sent too many requests (rate limiting). */
  TOO_MANY_REQUESTS = 429,

  /** 431 - The request’s headers are too large. */
  REQUEST_HEADER_FIELDS_TOO_LARGE = 431,

  /** 451 - The resource is unavailable due to legal reasons. */
  UNAVAILABLE_FOR_LEGAL_REASONS = 451,

  // -------------------------
  // 5xx — Server Errors
  // -------------------------

  /** 500 - An internal server error occurred. */
  INTERNAL_SERVER_ERROR = 500,

  /** 501 - The server does not support the requested functionality. */
  NOT_IMPLEMENTED = 501,

  /** 502 - Invalid response received from an upstream server. */
  BAD_GATEWAY = 502,

  /** 503 - The server is currently unavailable or overloaded. */
  SERVICE_UNAVAILABLE = 503,

  /** 504 - The server acting as a gateway timed out. */
  GATEWAY_TIMEOUT = 504,

  /** 505 - The server does not support the HTTP version used. */
  HTTP_VERSION_NOT_SUPPORTED = 505,

  /** 506 - Variant negotiation failed. */
  VARIANT_ALSO_NEGOTIATES = 506,

  /** 507 - The server has insufficient storage to process the request. */
  INSUFFICIENT_STORAGE = 507,

  /** 508 - The server detected an infinite loop while processing. */
  LOOP_DETECTED = 508,

  /** 510 - Further extensions to the request are required. */
  NOT_EXTENDED = 510,

  /** 511 - Network authentication is required. */
  NETWORK_AUTH_REQUIRED = 511,
}

export const StatusMessages: Record<StatusCode, string> = {
  [StatusCode.OK]: "Request succeeded.",
  [StatusCode.CREATED]: "Resource created successfully.",
  [StatusCode.ACCEPTED]: "Request accepted and is being processed.",
  [StatusCode.NON_AUTHORITATIVE]: "Non-authoritative information.",
  [StatusCode.RESET_CONTENT]: "Reset content.",
  [StatusCode.PARTIAL_CONTENT]: "Partial content delivered.",

  [StatusCode.MULTIPLE_CHOICES]: "Multiple choices available.",
  [StatusCode.MOVED_PERMANENTLY]: "Resource moved permanently.",
  [StatusCode.FOUND]: "Resource found at another location.",
  [StatusCode.SEE_OTHER]: "See another resource.",
  [StatusCode.NOT_MODIFIED]: "Not modified since last request.",
  [StatusCode.TEMPORARY_REDIRECT]: "Temporary redirect.",
  [StatusCode.PERMANENT_REDIRECT]: "Permanent redirect.",

  [StatusCode.NOT_ACCEPTABLE]: "Not acceptable response format.",
  [StatusCode.PROXY_AUTH_REQUIRED]: "Proxy authentication required.",
  [StatusCode.LENGTH_REQUIRED]: "Content length header required.",
  [StatusCode.PRECONDITION_FAILED]: "Precondition failed.",
  [StatusCode.URI_TOO_LONG]: "URI too long.",
  [StatusCode.RANGE_NOT_SATISFIABLE]: "Requested range not satisfiable.",
  [StatusCode.EXPECTATION_FAILED]: "Expectation failed.",
  [StatusCode.IM_A_TEAPOT]: "I'm a teapot.",
  [StatusCode.MISDIRECTED_REQUEST]: "Request was misdirected.",
  [StatusCode.UNPROCESSABLE_CONTENT]: "Unprocessable content.",
  [StatusCode.LOCKED]: "Resource is locked.",
  [StatusCode.FAILED_DEPENDENCY]: "Failed dependency.",
  [StatusCode.TOO_EARLY]: "Request too early.",
  [StatusCode.UPGRADE_REQUIRED]: "Upgrade required.",
  [StatusCode.PRECONDITION_REQUIRED]: "Precondition required.",
  [StatusCode.REQUEST_HEADER_FIELDS_TOO_LARGE]:
    "Request header fields too large.",
  [StatusCode.UNAVAILABLE_FOR_LEGAL_REASONS]: "Unavailable for legal reasons.",
  [StatusCode.HTTP_VERSION_NOT_SUPPORTED]: "HTTP version not supported.",
  [StatusCode.VARIANT_ALSO_NEGOTIATES]: "Variant negotiation failed.",
  [StatusCode.INSUFFICIENT_STORAGE]: "Insufficient storage.",
  [StatusCode.LOOP_DETECTED]: "Loop detected.",
  [StatusCode.NOT_EXTENDED]: "Not extended.",
  [StatusCode.NETWORK_AUTH_REQUIRED]: "Network authentication required.",
  [StatusCode.NO_CONTENT]: "Request succeeded, no content to return.",
  [StatusCode.BAD_REQUEST]: "Bad request. Please check your input.",
  [StatusCode.UNAUTHORIZED]: "Unauthorized. Please log in.",
  [StatusCode.PAYMENT_REQUIRED]: "Payment required.",
  [StatusCode.FORBIDDEN]: "Forbidden. You do not have access.",
  [StatusCode.NOT_FOUND]: "Resource not found.",
  [StatusCode.METHOD_NOT_ALLOWED]: "Method not allowed.",
  [StatusCode.REQUEST_TIMEOUT]: "Request timed out.",
  [StatusCode.CONFLICT]:
    "Conflict. This resource already exists or cannot be processed.",
  [StatusCode.GONE]: "Resource is gone and will not return.",
  [StatusCode.PAYLOAD_TOO_LARGE]: "Request payload too large.",
  [StatusCode.UNSUPPORTED_MEDIA_TYPE]: "Unsupported media type.",
  [StatusCode.TOO_MANY_REQUESTS]: "Too many requests. Please try again later.",
  [StatusCode.INTERNAL_SERVER_ERROR]: "Internal server error.",
  [StatusCode.NOT_IMPLEMENTED]: "Feature not implemented.",
  [StatusCode.BAD_GATEWAY]: "Bad gateway.",
  [StatusCode.SERVICE_UNAVAILABLE]:
    "Server is currently unavailable or overloaded.",
  [StatusCode.GATEWAY_TIMEOUT]: "Server gateway timed out.",
};
