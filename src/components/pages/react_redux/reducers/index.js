import changeTheNumber from "./upDwon";
import contactReducer from "./contactReducer";
import productsReducer from "./products.reducer";

import { registration } from '../../react_redux_user_panel/reducers/registration.reducer';

import { combineReducers } from "redux";

const rootReducer = combineReducers({
    changeTheNumber,contactReducer, products: productsReducer,registration,
});


export default rootReducer;
