import ErrorPage from "../Containers/Error";

export const request = async ({
    dispatch,
    requestAction,
    successAction,
    failureAction,
    url,
    method = 'GET',
    body = null,
    headers = {},
}) => {
    dispatch({ type: requestAction });
    try {
        const response = await fetch(url, {
            method,
            headers: {
                'Content-Type': 'application/json',
                ...headers,
            },
            body: body ? JSON.stringify(body) : null,
        });

        if (!response.ok) {
            // Try to parse the error response
            let errorResponse;

            try {
                // Attempt to parse the error response as JSON
                errorResponse = await response.json();
            } catch {
                // If JSON parsing fails, fallback to text or default error message
                errorResponse = {
                    status: response.status,
                    message: await response.text().catch(() => 'Unknown error occurred'),
                };
            }

            console.error('Error response:', errorResponse); // Log for debugging

            // Dispatch the failure action with the error response or a default message
            dispatch({
                type: failureAction,
                payload: errorResponse || { 
                    status: response.status,
                    ...errorResponse,
                 },
            });
            return null;
        }

        const data = await response.json();
        dispatch({ type: successAction, payload: data });
        return data;
    } catch (error) {
        // console.error('Unexpected error:', error); // Log for debugging

        // Dispatch the failure action with the error message
        dispatch({
            type: failureAction,
            payload: { error: 'network_error', message: error.message },
        });
        return null;
    }
};