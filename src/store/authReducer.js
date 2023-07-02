import { actionLogin, actionRegister } from "../api";


export function authReducer(state = {}, {type, token}) {
  if (token) {
    localStorage.authToken = token;
  }
  
  if (type === 'AUTH_LOGIN') {
    const payload = jwtDecode(token);
    if (payload) {
      return {
        token, 
        payload
      };
    }
  }

  if (type === 'AUTH_LOGOUT') {
    return {};
  }
  return state;
}


const jwtDecode = (token) => {
  try {
    let split = token.split('.', 2);
    return JSON.parse(atob(split[1]));
  } catch (e) {
    alert('Ты не зарегистрирован ');
  }
};

const actionAuthLogin = (token) => {
  return {
    type: 'AUTH_LOGIN', 
    token
 }
};

const actionAuthLogout = ()=> {
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
  

export const actionFullRegister = (login, password, nick) => {
  return async dispatch => {
    await dispatch(actionRegister(login, password, nick));
    dispatch(actionFullLogin(login, password));
  }
};