import errorCodes from './errorCode';

export const handleError = (errorResponse, navigate) => {
    if (!errorResponse || (!errorResponse.error && !errorResponse.status)) {
        // Default case: No error details provided
        navigate('/error'); // Navigate to a general error page
        return;
    }

    const { error, status } = errorResponse;

    // Check if the error exists in errorCodes
    const errorInfo = error ? Object.values(errorCodes.errors).find((e) => e.code === error) : null;

    if (errorInfo) {
        // If a matching error code is found, navigate to the specific error page
        navigate(`/error?errorCode=${error}`);
    } else {
        // Fallback to handling generic status codes
        if (status >= 500) {
            navigate('/error?errorCode=SERVER_ERROR'); // General server error
        } else if (status >= 400) {
            navigate('/error?errorCode=CLIENT_ERROR'); // General client error
        } else {
            navigate('/error'); // General fallback error page
        }
    }
};