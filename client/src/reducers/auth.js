import {
    USER_LOGIN_INIT,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_ERROR,
    USER_SIGNUP_INIT,
    USER_SIGNUP_SUCCESS,
    USER_SIGNUP_ERROR
} from "../actions";

const initialState = {
    registering: false,
    loggingIn: false,
    error: null
}

export default function (state = initialState, action) {
    switch(action.type) {
        case USER_SIGNUP_INIT:
            return {
                ...state,
                registering: true
            };
        case USER_SIGNUP_SUCCESS:
            return {
                ...state,
                registering: false
            };
        case USER_SIGNUP_ERROR:
            return {
                ...state,
                error: action.payload
            };
        case USER_LOGIN_INIT:
            return {
                ...state,
                loggingIn: true
            };
        case USER_LOGIN_SUCCESS:
            return {
                ...state,
                loggingIn: false
            };
        case USER_LOGIN_ERROR:
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
}
