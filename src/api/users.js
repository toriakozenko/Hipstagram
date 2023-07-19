import { gql } from "../Gql";
import { actionPromise } from "../store/actionPromise";

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
      _id
      login
    }
    followers {
      _id
      login
    }
  }
}`, {q: `[{ "_id": "${id}" }]`}));

export const actionUserProfile = (id) =>
actionPromise('userProfile', 
gql (`query userProfile($q: String) {
 UserFindOne(query: $q) {
    _id
    login
    nick
    avatar {
      url
    }
    following {
      login
      _id
    }
    followers {
      login
      _id
    }
  }
}`, {q: `[{ "_id": "${id}" }]`}));

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



export const actionEditUserPage = (userId, login, fileId ) =>
actionPromise('editUser', 
gql (`mutation editUser($user: UserInput) {
  UserUpsert(user: $user) {
    _id
    login
    avatar {
      _id
    }
  }
}`, { user: { _id: userId, login, avatar: { _id: fileId} }}
));
