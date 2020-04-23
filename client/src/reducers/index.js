import counterReducer from "./counter"
import loggedReducer from "./islogged";
import buttonReducer from "./button"
import { combineReducers } from "redux";

const allReducers = combineReducers({
    counter : counterReducer,
    isLogged : loggedReducer,
    button : buttonReducer
})
export default allReducers;