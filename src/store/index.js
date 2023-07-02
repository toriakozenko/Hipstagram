import {  authReducer} from "./authReducer";
import {  promiseReducer} from "./promiseReducer";
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { localStoredReducer } from "./localStoredReducer";
// import { cartReducer } from "./cartReducer";

const reducer = combineReducers({
    promise: promiseReducer,
    auth: localStoredReducer(authReducer, 'authToken'),
    // cart: localStoredReducer(cartReducer, 'cart'), 
});

const store = configureStore({
  reducer,
});

export default store;
