import { gql } from "../Gql";
import { actionPromise } from "../store/actionPromise";

export const actionSubscribe = (id, login, oldUserId, userId) => 
actionPromise('subscribe',
gql(`mutation subscribe($user: UserInput) {
    UserUpsert(user: $user) {
      following {
        _id
      }
    }
  }`, 
  {
    user: {
      _id: id,
      login,
      following: oldUserId.map(id => ({ _id: id })).concat({ _id: userId })
    }
  })
);