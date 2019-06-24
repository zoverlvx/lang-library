import {combineReducers} from "redux";
import auth from "./auth.js";

const root = combineReducers({
    registration: auth
});

export default root;
