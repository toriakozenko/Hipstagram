import { gql } from "../Gql";
import { actionPromise } from "../store/actionPromise";


export const actionRegister = (login, password, nick) =>
  actionPromise('registration', 
    gql (`mutation Reg($login: String!, $password: String!) {
      createUser(login: $login, password: $password) {
        _id
        login
      }
    }`, {'login':login, 'password':password, 'nick':nick})
  );

  export const actionLogin = (login, password) =>
  actionPromise('login', 
    gql (`query login($login:String!, $password:String!){
        login(login:$login, password:$password)
    }`, {'login':login, 'password':password})
  );



