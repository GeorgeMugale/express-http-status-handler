"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusMessages = exports.StatusCode = void 0;
/**
 * Enum representing standard HTTP status codes used throughout the application.
 * Codes are grouped into the standard HTTP categories:
 * - 2xx: Success
 * - 3xx: Redirection
 * - 4xx: Client errors
 * - 5xx: Server errors
 */
var StatusCode;
(function (StatusCode) {
    // -------------------------
    // 2xx — Success
    // -------------------------
    /** 200 - The request succeeded. */
    StatusCode[StatusCode["OK"] = 200] = "OK";
    /** 201 - The request succeeded and a new resource was created. */
    StatusCode[StatusCode["CREATED"] = 201] = "CREATED";
    /** 202 - The request has been accepted for processing but is not completed. */
    StatusCode[StatusCode["ACCEPTED"] = 202] = "ACCEPTED";
    /** 203 - Returned metadata is not from the origin server. */
    StatusCode[StatusCode["NON_AUTHORITATIVE"] = 203] = "NON_AUTHORITATIVE";
    /** 204 - The request succeeded with no content to return. */
    StatusCode[StatusCode["NO_CONTENT"] = 204] = "NO_CONTENT";
    /** 205 - The client should reset the document view. */
    StatusCode[StatusCode["RESET_CONTENT"] = 205] = "RESET_CONTENT";
    /** 206 - Partial content was returned for a range request. */
    StatusCode[StatusCode["PARTIAL_CONTENT"] = 206] = "PARTIAL_CONTENT";
    // -------------------------
    // 3xx — Redirects
    // -------------------------
    /** 300 - Multiple options for the resource exist. */
    StatusCode[StatusCode["MULTIPLE_CHOICES"] = 300] = "MULTIPLE_CHOICES";
    /** 301 - The resource has been moved permanently. */
    StatusCode[StatusCode["MOVED_PERMANENTLY"] = 301] = "MOVED_PERMANENTLY";
    /** 302 - The resource was found but temporarily resides elsewhere. */
    StatusCode[StatusCode["FOUND"] = 302] = "FOUND";
    /** 303 - The response can be found under another URI using GET. */
    StatusCode[StatusCode["SEE_OTHER"] = 303] = "SEE_OTHER";
    /** 304 - The resource has not changed since the last request. */
    StatusCode[StatusCode["NOT_MODIFIED"] = 304] = "NOT_MODIFIED";
    /** 307 - Temporary redirect; method must remain unchanged. */
    StatusCode[StatusCode["TEMPORARY_REDIRECT"] = 307] = "TEMPORARY_REDIRECT";
    /** 308 - Permanent redirect; method must remain unchanged. */
    StatusCode[StatusCode["PERMANENT_REDIRECT"] = 308] = "PERMANENT_REDIRECT";
    // -------------------------
    // 4xx — Client Errors
    // -------------------------
    /** 400 - The request was malformed or missing parameters. */
    StatusCode[StatusCode["BAD_REQUEST"] = 400] = "BAD_REQUEST";
    /** 401 - Authentication is required or failed. */
    StatusCode[StatusCode["UNAUTHORIZED"] = 401] = "UNAUTHORIZED";
    /** 402 - Payment is required to access the resource. */
    StatusCode[StatusCode["PAYMENT_REQUIRED"] = 402] = "PAYMENT_REQUIRED";
    /** 403 - The client is authenticated but not authorized. */
    StatusCode[StatusCode["FORBIDDEN"] = 403] = "FORBIDDEN";
    /** 404 - The requested resource could not be found. */
    StatusCode[StatusCode["NOT_FOUND"] = 404] = "NOT_FOUND";
    /** 405 - The HTTP method is not allowed for this resource. */
    StatusCode[StatusCode["METHOD_NOT_ALLOWED"] = 405] = "METHOD_NOT_ALLOWED";
    /** 406 - The requested format is not acceptable. */
    StatusCode[StatusCode["NOT_ACCEPTABLE"] = 406] = "NOT_ACCEPTABLE";
    /** 407 - Proxy authentication is required. */
    StatusCode[StatusCode["PROXY_AUTH_REQUIRED"] = 407] = "PROXY_AUTH_REQUIRED";
    /** 408 - The client took too long to send a request. */
    StatusCode[StatusCode["REQUEST_TIMEOUT"] = 408] = "REQUEST_TIMEOUT";
    /** 409 - Conflict occurred, likely due to existing resource state. */
    StatusCode[StatusCode["CONFLICT"] = 409] = "CONFLICT";
    /** 410 - The requested resource is permanently gone. */
    StatusCode[StatusCode["GONE"] = 410] = "GONE";
    /** 411 - Content-Length header is required. */
    StatusCode[StatusCode["LENGTH_REQUIRED"] = 411] = "LENGTH_REQUIRED";
    /** 412 - A precondition in the request headers failed. */
    StatusCode[StatusCode["PRECONDITION_FAILED"] = 412] = "PRECONDITION_FAILED";
    /** 413 - The request payload is too large. */
    StatusCode[StatusCode["PAYLOAD_TOO_LARGE"] = 413] = "PAYLOAD_TOO_LARGE";
    /** 414 - The URI requested is too long. */
    StatusCode[StatusCode["URI_TOO_LONG"] = 414] = "URI_TOO_LONG";
    /** 415 - The request media type is not supported. */
    StatusCode[StatusCode["UNSUPPORTED_MEDIA_TYPE"] = 415] = "UNSUPPORTED_MEDIA_TYPE";
    /** 416 - The requested range cannot be satisfied. */
    StatusCode[StatusCode["RANGE_NOT_SATISFIABLE"] = 416] = "RANGE_NOT_SATISFIABLE";
    /** 417 - The expectation given in the Expect header was not met. */
    StatusCode[StatusCode["EXPECTATION_FAILED"] = 417] = "EXPECTATION_FAILED";
    /** 418 - I’m a teapot (RFC 2324). Used as a playful error response. */
    StatusCode[StatusCode["IM_A_TEAPOT"] = 418] = "IM_A_TEAPOT";
    /** 421 - The request was directed to the wrong server. */
    StatusCode[StatusCode["MISDIRECTED_REQUEST"] = 421] = "MISDIRECTED_REQUEST";
    /** 422 - The request was well-formed but contains semantic errors. */
    StatusCode[StatusCode["UNPROCESSABLE_CONTENT"] = 422] = "UNPROCESSABLE_CONTENT";
    /** 423 - The resource is locked. */
    StatusCode[StatusCode["LOCKED"] = 423] = "LOCKED";
    /** 424 - The request failed due to a dependency failure. */
    StatusCode[StatusCode["FAILED_DEPENDENCY"] = 424] = "FAILED_DEPENDENCY";
    /** 425 - The request is too early and should be retried later. */
    StatusCode[StatusCode["TOO_EARLY"] = 425] = "TOO_EARLY";
    /** 426 - The client should switch to a different protocol. */
    StatusCode[StatusCode["UPGRADE_REQUIRED"] = 426] = "UPGRADE_REQUIRED";
    /** 428 - The request requires conditional headers. */
    StatusCode[StatusCode["PRECONDITION_REQUIRED"] = 428] = "PRECONDITION_REQUIRED";
    /** 429 - The client has sent too many requests (rate limiting). */
    StatusCode[StatusCode["TOO_MANY_REQUESTS"] = 429] = "TOO_MANY_REQUESTS";
    /** 431 - The request’s headers are too large. */
    StatusCode[StatusCode["REQUEST_HEADER_FIELDS_TOO_LARGE"] = 431] = "REQUEST_HEADER_FIELDS_TOO_LARGE";
    /** 451 - The resource is unavailable due to legal reasons. */
    StatusCode[StatusCode["UNAVAILABLE_FOR_LEGAL_REASONS"] = 451] = "UNAVAILABLE_FOR_LEGAL_REASONS";
    // -------------------------
    // 5xx — Server Errors
    // -------------------------
    /** 500 - An internal server error occurred. */
    StatusCode[StatusCode["INTERNAL_SERVER_ERROR"] = 500] = "INTERNAL_SERVER_ERROR";
    /** 501 - The server does not support the requested functionality. */
    StatusCode[StatusCode["NOT_IMPLEMENTED"] = 501] = "NOT_IMPLEMENTED";
    /** 502 - Invalid response received from an upstream server. */
    StatusCode[StatusCode["BAD_GATEWAY"] = 502] = "BAD_GATEWAY";
    /** 503 - The server is currently unavailable or overloaded. */
    StatusCode[StatusCode["SERVICE_UNAVAILABLE"] = 503] = "SERVICE_UNAVAILABLE";
    /** 504 - The server acting as a gateway timed out. */
    StatusCode[StatusCode["GATEWAY_TIMEOUT"] = 504] = "GATEWAY_TIMEOUT";
    /** 505 - The server does not support the HTTP version used. */
    StatusCode[StatusCode["HTTP_VERSION_NOT_SUPPORTED"] = 505] = "HTTP_VERSION_NOT_SUPPORTED";
    /** 506 - Variant negotiation failed. */
    StatusCode[StatusCode["VARIANT_ALSO_NEGOTIATES"] = 506] = "VARIANT_ALSO_NEGOTIATES";
    /** 507 - The server has insufficient storage to process the request. */
    StatusCode[StatusCode["INSUFFICIENT_STORAGE"] = 507] = "INSUFFICIENT_STORAGE";
    /** 508 - The server detected an infinite loop while processing. */
    StatusCode[StatusCode["LOOP_DETECTED"] = 508] = "LOOP_DETECTED";
    /** 510 - Further extensions to the request are required. */
    StatusCode[StatusCode["NOT_EXTENDED"] = 510] = "NOT_EXTENDED";
    /** 511 - Network authentication is required. */
    StatusCode[StatusCode["NETWORK_AUTH_REQUIRED"] = 511] = "NETWORK_AUTH_REQUIRED";
})(StatusCode || (exports.StatusCode = StatusCode = {}));
exports.StatusMessages = {
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
    [StatusCode.REQUEST_HEADER_FIELDS_TOO_LARGE]: "Request header fields too large.",
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
    [StatusCode.CONFLICT]: "Conflict. This resource already exists or cannot be processed.",
    [StatusCode.GONE]: "Resource is gone and will not return.",
    [StatusCode.PAYLOAD_TOO_LARGE]: "Request payload too large.",
    [StatusCode.UNSUPPORTED_MEDIA_TYPE]: "Unsupported media type.",
    [StatusCode.TOO_MANY_REQUESTS]: "Too many requests. Please try again later.",
    [StatusCode.INTERNAL_SERVER_ERROR]: "Internal server error.",
    [StatusCode.NOT_IMPLEMENTED]: "Feature not implemented.",
    [StatusCode.BAD_GATEWAY]: "Bad gateway.",
    [StatusCode.SERVICE_UNAVAILABLE]: "Server is currently unavailable or overloaded.",
    [StatusCode.GATEWAY_TIMEOUT]: "Server gateway timed out.",
};
