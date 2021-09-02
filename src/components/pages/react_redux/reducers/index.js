import changeTheNumber from "./upDwon";
import contactReducer from "./contactReducer";
import productsReducer from "./products.reducer";

import { registration } from '../../react_redux_user_panel/reducers/registration.reducer';
import { alert } from '../../react_redux_user_panel/reducers/alert.reducer';

import {authentication} from '../../react_redux_user_panel/reducers/authentication.reducer';
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    changeTheNumber,contactReducer, products: productsReducer,registration,alert,authentication,
});


export default rootReducer;
