import React, { createContext, useReducer, useContext, useCallback } from 'react';
import { request } from '../Utility/request'; // Adjust the relative path as needed


const apiUrl = process.env.REACT_APP_API_URL;

const initialState = {
    item: {},
    counter: 0,
    loading: false,
    error: null,
}

// Actions
export const actionTypes = {
    FETCH_ITEM_REQUEST: 'FETCH_ITEMS_REQUEST',
    FETCH_ITEM_SUCCESS: 'FETCH_ITEMS_SUCCESS',
    FETCH_ITEM_FAILURE: 'FETCH_ITEMS_FAILURE',

    INCREMENT_COUNTER: "INCREMENT_COUNTER",
    // EMPTY_CART: "EMPTY_CART",
};

function globalReducer(state, action) {
    switch (action.type) {
        case actionTypes.FETCH_ITEM_REQUEST:
            return { ...state, loading: true, error: null };
        case actionTypes.FETCH_ITEM_SUCCESS:
            return { ...state, loading: false, item: action.payload };
        case actionTypes.FETCH_ITEM_FAILURE:
            return { ...state, loading: false, error: action.payload };

        case actionTypes.INCREMENT_COUNTER:
            return { ...state, counter: state.counter + 1 };
        // Other actions
        default:
            return state;
    }
}

const GlobalContext = createContext();

export function GlobalProvider({ children }) {
    const [state, dispatch] = useReducer(globalReducer, initialState);


    const fetchItem = useCallback(async () =>
        request({
            dispatch,
            requestAction: actionTypes.FETCH_ITEM_REQUEST,
            successAction: actionTypes.FETCH_ITEM_SUCCESS,
            failureAction: actionTypes.FETCH_ITEM_FAILURE,
            url: 'https://some-random-api.com/animal/cat',
            headers: { 'x-access-token': `${localStorage.getItem('accessToken')}` },
        }), []);

    const incrementCounter = useCallback(() => {
        dispatch({ type: actionTypes.INCREMENT_COUNTER });
    }, []);


    return (
        <GlobalContext.Provider
            value={{
                state,
                fetchItem,
                incrementCounter
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
}

// Custom hook to use GlobalContext
export function useItems() {
    return useContext(GlobalContext);
}
