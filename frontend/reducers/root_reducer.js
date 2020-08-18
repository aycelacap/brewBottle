import { combineReducers } from 'redux';
import sessionReducer from "./session_reducer";
import errors from "./errors_reducer";

const rootReducer = combineReducers({
    sessionReducer,
    errors
})

export default rootReducer;