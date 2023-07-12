import { gql  } from "../Gql/index";
import { actionPromise } from "../store/actionPromise";

//////////////////////////
export const actionRegister = (login, password, nick) =>
  actionPromise('registration', 
  gql (`mutation Reg($login: String!, $password: String!) {
    createUser(login: $login, password: $password) {
      _id
      login
    }
  }`, {'login':login, 'password':password, 'nick':nick})
  );
//////////////////////////////////

/////////////////////////

  export const actionLogin = (login, password) =>
  actionPromise('login', 
  gql (`query login($login:String!, $password:String!){
      login(login:$login, password:$password)
    }`, {'login':login, 'password':password}));

//////////////////////////////

////////////////////ALL POST
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
                _id
                login
              }
            }
          }
        }`, { q: "[{},{\"sort\":[{\"_id\":-1}]}]" })
      );
 ///////////////////////////////////////


      export const actionAllUsers = () => 
      actionPromise('users',
      gql(`query users($q: String) {
          UserFind(query: $q) {
            _id
            login
            nick
            avatar {
              url
            }
          }
        }`, { q: "[{},{\"sort\":[{\"_id\":-1}]}]" })
      );
 



///////////////////// SEARCH
 export const actionGetUserByLogin = (login) => 
      actionPromise('userByLogin',
      gql(`query userByLogin($q: String) {
          UserFind(query: $q) {
            _id
            login
            nick
            avatar {
              url
            }
          }
        }`, 
        {q: `[{ "login": "${login}" }]`})
      );
/////////////////////////////////////////

    export const actionOneUser = (id) =>
    actionPromise('oneUser', 
    gql (`query oneUser($q: String) {
     UserFindOne(query: $q) {
        _id
        login
        nick
        avatar {
          url
        }
        following {
          login
        }
        followers {
          login
        }
      }
    }`, {q: `[{ "_id": "${id}" }]`}));

   



    export const actionUserPosts = (id) =>
    actionPromise('userPosts', 
      gql(`
        query userPosts($q: String) {
          PostFind(query: $q) {
            _id
            title
            owner {
              _id
              login
            }
          }
        }
      `, { "q": `[{ "_id": "${id}" }]` }));
  






    export const actionCreatePost = () =>
    actionPromise('createPost', 
    gql (`mutation createPost($post: PostInput) {
     PostUpsert(post: $post) {
        _id
        title
        text
      }
    }`, {"post": {}}));



    export const actionEditPost = (id) =>
    actionPromise('editPost', 
    gql (`mutation createPost($post: PostInput) {
     PostUpsert(post: $post) {
        _id
        title
        text
      }
    }`, {q: `[{ "_id": "${id}" }]`}));
  


    export const actionCollection = () =>
    actionPromise('collection', 
    gql (`query collection($q: String) {
     CollectionFind(query: $q) {
        _id
        text
        posts {
          title
          text
        }
        owner {
          _id
          login
        }
      }
    }`,  { q: "[{},{\"sort\":[{\"_id\":-1}]}]" }));
  