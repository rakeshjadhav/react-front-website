import changeTheNumber from "./upDwon";
import contactReducer from "./contactReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    changeTheNumber,contactReducer
});


export default rootReducer;
