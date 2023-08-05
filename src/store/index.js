import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { authReducer } from "./authReducer";
import { localStoredReducer } from "./localStoredReducer";
import { promiseReducer } from "./promiseReducer";
import { postsReducer } from './postsReducer';



const reducer = combineReducers({
  promise: promiseReducer,
  posts: postsReducer, 
  auth: localStoredReducer(authReducer, 'auth'),
});

const store = configureStore({
  reducer,
});

export default store;
