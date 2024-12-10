module.exports = {
    errors: {
        SERVER_ERROR: {
            status: 500,
            code: "E500",
            message: "An unexpected server error occurred."
        },
        DATABASE_ERROR: {
            status: 500,
            code: "E50001",
            message: "A database error occurred. Please contact the administrator."
        },
        SERVICE_UNAVAILABLE: {
            status: 503,
            code: "E503",
            message: "The service is temporarily unavailable. Please try again later."
        },
        RESOURCE_NOT_FOUND: {
            status: 404,
            code: "E404",
            message: "The requested resource could not be found."
        },
        BAD_REQUEST: {
            status: 400,
            code: "E400",
            message: "The request could not be understood or was missing required parameters."
        },
        INVALID_INPUT: {
            status: 400,
            code: "E40001",
            message: "The input provided is invalid. Please verify and try again."
        },
        AUTHENTICATION_FAILED: {
            status: 401,
            code: "E401",
            message: "Authentication failed. Please provide valid credentials."
        },
        TOKEN_INVALID: {
            status: 401,
            code: "E40101",
            message: "The provided authentication token is invalid."
        },
        ACCESS_FORBIDDEN: {
            status: 403,
            code: "E403",
            message: "You do not have permission to access this resource."
        },
        CUSTOM_ERROR_TEMPLATE: {
            status: 400,
            code: "E400XX",
            message: "Custom error message here."
        }
    }
};