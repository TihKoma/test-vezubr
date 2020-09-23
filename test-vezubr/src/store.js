import {createStore, combineReducers} from "redux";
import studReducer from "./stud-reducer";
import {reducer as formReducer} from "redux-form";

let rootReducer = combineReducers({
    stud: studReducer,
    form: formReducer
});

let store = createStore(rootReducer);

export default store;