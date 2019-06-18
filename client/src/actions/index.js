import axios from "axios";

const url = "https://langlibrary.run.goorm.io";

export const USER_LOGIN_INIT = "USER_LOGIN_INIT";
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_LOGIN_ERROR = "USER_LOGIN_ERROR";
export function loginUser(user) {
    const loggedIn = axios.post(`${url}/api/login`, user);
    return function (dispatch) {
        dispatch({type: USER_LOGIN_INIT});
        return loggedIn.then(function (res) {
            if (res.data) {
                localStorage.setItem(process.env.TOKEN, res.data.token);
                dispatch({type: USER_LOGIN_SUCCESS, payload: res.data})
            }
        }).catch((error) => dispatch({type: USER_LOGIN_ERROR, payload: error}));
    }
}

export const USER_SIGNUP_INIT = "USER_SIGNUP_INIT";
export const USER_SIGNUP_SUCCESS = "USER_SIGNUP_SUCCESS";
export const USER_SIGNUP_ERROR = "USER_SIGNUP_ERROR";
export function signupUser(user) {
    const newUser = axios.post(`${url}/api/register`, user);
    return function (dispatch) {
        dispatch({type: USER_SIGNUP_INIT});
        return newUser.then(function (res) {
            dispatch({type: USER_SIGNUP_SUCCESS, payload: res.data})
        }).catch((error) => dispatch({type: USER_SIGNUP_ERROR, payload: error}));
    }
}
