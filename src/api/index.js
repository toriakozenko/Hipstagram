import { gql  } from "../Gql/index";
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
    }`, {'login':login, 'password':password}));




    export const actionAllPosts = () => 
      actionPromise('posts',
      gql(`query posts($q: String) {
          PostFind(query: $q) {
            _id
            createdAt
            title
            text
            likesCount
            owner {
              login
              avatar {
                url
              }
            }
            images {
              url
            }
            comments {
              text
              owner {
                login
              }
            }
          }
        }`, { q: "[{},{\"sort\":[{\"_id\":-1}]}]" })
      );
    ;


  

    
    export const actionAllUsers = () =>
    actionPromise('users', 
    gql (`query posts($q: String) {
      UserFind(query: $q) {
          _id
           nick 
      }
    }`, {q: "[{}]"}));
  
