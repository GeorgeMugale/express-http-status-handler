# HTTP Status Handler

A lightweight, TypeScript-first response status handler for building consistent API responses. This package provides a standardized way to structure success and error responses in your Node.js applications, ensuring consistent response formats across your API endpoints.

## Why This Package?

### 🚫 Common Problem: Inconsistent Response Handling

In Express.js applications, developers often forget to set proper HTTP status codes or maintain consistent response structures:

```javascript
// ❌ Problematic pattern - inconsistent responses
app.get('/user', (req, res) => {
  try {
    const user = getUser();
    res.json(user); // Forgot to set status code!
  } catch (error) {
    res.json({ error: error.message }); // No status code, inconsistent structure
  }
});

app.post('/user', (req, res) => {
  try {
    const user = createUser();
    res.status(201).json({ data: user, message: "Created" }); // Different structure
  } catch (error) {
    res.status(500).json({ message: error.message }); // Yet another structure
  }
});
````

### ✅ Solution: Standardized Response Pattern

This package enforces consistency and prevents common mistakes:

```typescript
// ✅ Consistent pattern with HTTP Status Handler
app.get('/user', (req, res) => {
  const status = new Status();
  
  try {
    const user = getUser();
    // Use successOK for standard 200 responses with data
    status.successOK({ 
      message: "User retrieved successfully", 
      payload: user 
    });
  } catch (error) {
    // Use errorStatus with standard StatusCodes
    status.errorStatus(StatusCode.NOT_FOUND);
  }
  
  return res.status(status.code).json(status); // Always proper status code + consistent structure
});
```

## Features

  - ✅ **TypeScript Support**: Fully typed with generic support for payload data
  - ✅ **Standardized Response Format**: Consistent structure for all API responses
  - ✅ **HTTP Status Code Management**: Built-in handling for common HTTP status codes
  - ✅ **Error Code Mapping**: Predefined error messages for standard HTTP error codes
  - ✅ **Zero Dependencies**: Lightweight and framework-agnostic
  - ✅ **Comprehensive Documentation**: Full JSDoc support with examples

## Installation

```bash
npm install express-http-status-handler
```

## Quick Start

```typescript
import { Status, ErrorCode } from 'express-http-status-handler';

// Static factory usage
const success = Status.SUCCESS(StatusCode.CREATED, { id: 1, name: "John" });
const error = Status.ERR(StatusCode.NOT_FOUND);

// Instance usage
const status = new Status<{ userId: number }>();

// For 200 OK with custom message/payload
status.successOK({ 
  message: "Operation successful", 
  payload: { userId: 123 } 
});

// For specific status codes (e.g., 201 Created)
status.successStatus(StatusCode.CREATED, { userId: 123 });
```

## Real-World Example

Here's how this package improves code quality in a production scenario:

```typescript
import { Status, ErrorCode } from 'express-http-status-handler';
import { Request, Response } from 'express';

class AuthController {
  activate = async (req: Request, res: Response) => {
    const status = new Status();

    try {
      const isValid = await tokenSchema.isValid(req.params);

      if (isValid) {
        const { token, email } = req.params as { token: string; email: string };

        const userDump = await userDAO.selectDump(email);

        if (userDump) {
          const isMatch = await this.verifyToken(
            token,
            userDump.Activation_Hash
          );

          if (isMatch) {
            const result = await this.dao.insert({
              ...userDump,
              Verified: true,
              Active: true,
            });

            if (result) {
              this.dao.deleteDump(userDump.ID);

              Mailer.send({
                to: result.Email,
                subject: MailSubject.ACCOUNT_VERIFIED,
              });

              // Sets status to 200 OK and allows custom message
              status.successOK({
                message: "Account successfully verified.",
              });
            }
          } else {
            // Even if incorrect, maintain security by saying user cannot be found
            status.errorStatus(StatusCode.NOT_FOUND);
          }
        } else {
          status.errorStatus(StatusCode.NOT_FOUND);
        }
      } else {
        status.errorStatus(StatusCode.BAD_REQUEST);
      }
    } catch (error) {
      console.error("error:", error);
      // Handles generic JS errors as 500 Internal Server Error
      status.genericError(error);
    }

    // ✅ Always returns proper HTTP status code and consistent structure
    return res.status(status.code).json(status);
  };
}
```

### Benefits Demonstrated in This Example:

1.  **Never Forget Status Codes**: The pattern enforces `res.status(status.code).json(status)`
2.  **Consistent Structure**: All responses have the same `{ code, success, message, payload }` format
3.  **Type Safety**: Generic types ensure payload consistency
4.  **Security**: Proper error handling without leaking implementation details
5.  **Maintainability**: Clear, predictable response patterns across all endpoints

## API Reference

### Status Class

The main class for creating standardized responses.

```typescript
const status = new Status<T>(); // T is the payload type
```

### Static Methods

#### `Status.SUCCESS<T>(success: StatusCode, payload: T): Status<T>`

Creates a new Status instance configured for success.

#### `Status.ERR<T>(error: StatusCode): Status<T>`

Creates a new Status instance configured for error.

### Instance Methods

#### `successStatus(success: StatusCode, payload?: T): void`

Sets the status to a specific success code (e.g., 201 Created) and automatically sets the standard message for that code.

#### `successOK(options: Partial<IStatus<T>>): void`

A helper specifically for 200 OK responses. Allows you to easily override the message and payload.

```typescript
status.successOK({ message: "Custom success message", payload: data });
```

#### `errorStatus(error: StatusCode): void`

Sets the status to error based on HTTP status code and automatically sets the corresponding error message.

#### `error(err: IHttpError): void`

Handles custom errors that implement the `IHttpError` interface (must have a `code` property).

#### `genericError(err: Error): void`

Handles generic JavaScript errors. Automatically sets the code to 500 (Internal Server Error) and the message to the error's message.

### Status Codes

Comprehensive HTTP status code coverage via the `StatusCode` enum:

```typescript
StatusCode.OK                   // 200
StatusCode.CREATED              // 201
StatusCode.BAD_REQUEST          // 400
StatusCode.UNAUTHORIZED         // 401
StatusCode.FORBIDDEN            // 403
StatusCode.NOT_FOUND            // 404
StatusCode.VALIDATION_ERROR     // 422
StatusCode.INTERNAL_SERVER_ERROR // 500
// ... and many more
```

## Response Structure

All responses follow this consistent format:

```typescript
{
  code: number;      // HTTP status code
  success: boolean;  // true for success, false for error
  message: string;   // Human-readable message
  payload: T | null; // Response data or null
}
```

## About This Project

### My First NPM Package\! 🎉

While this might seem like a trivial project, I'm proud to publish it as my first NPM package. It represents:

  - **Learning Journey**: Understanding the complete package creation and publishing process
  - **Real Problem Solving**: Addressing inconsistent API response patterns I've encountered
  - **Best Practices**: Implementing TypeScript, proper documentation, and testing
  - **Community Contribution**: Sharing a solution that might help other developers

This package embodies the principle that even simple utilities can significantly improve code quality when they enforce good patterns and prevent common mistakes.

## Contributing

Contributions are welcome\! Please feel free to submit pull requests or open issues for suggestions.

## License

MIT © George Mugale

-----

**Never forget to set HTTP status codes again\!** 🚀

```
```