import changeTheNumber from "./upDwon";
import contactReducer from "./contactReducer";
import productsReducer from "./products.reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    changeTheNumber,contactReducer, products: productsReducer
});


export default rootReducer;
