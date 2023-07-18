import {  authReducer} from "./authReducer";
import {  promiseReducer} from "./promiseReducer";
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { localStoredReducer } from "./localStoredReducer";
import { postsReducer } from "./postsReducer";



const reducer = combineReducers({
  promise: promiseReducer,
  auth: localStoredReducer(authReducer, 'auth'),
  posts: localStoredReducer(postsReducer, 'posts'), 
});

const store = configureStore({
  reducer,
});

export default store;
