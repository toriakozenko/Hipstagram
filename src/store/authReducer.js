import jwt_decode from "jwt-decode";
import { actionRegister,actionLogin } from "../api/auth";


export function authReducer(state = {}, {type, token}) {
  if (token) {
    localStorage.authToken = token;
  }
  
  if (type === 'AUTH_LOGIN') {
    const payload =  jwt_decode(token);
    if (payload) {
      return {
        token, 
        payload
      };
    }
  }

  if (type === 'AUTH_LOGOUT') {
    delete localStorage.authToken;
    return {};
  }
  return state;
}


export const actionAuthLogin = (token) => {
  return {
    type: 'AUTH_LOGIN', 
    token
 }
};

export const actionAuthLogout = ()=> {
  return {
    type: 'AUTH_LOGOUT'
  };
};


export const actionFullLogin = (login, password) => {
  return async dispatch => {
    const token = await dispatch(actionLogin(login, password));
    if(token) {
      dispatch(actionAuthLogin(token));
    } 
  }
};
  

export const actionFullRegister = (login, password) => {
  return async dispatch => {
    await dispatch(actionRegister(login, password));
    dispatch(actionFullLogin(login, password));
  }
};

