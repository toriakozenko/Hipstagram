import { gql } from "../Gql";
import { actionPromise } from "../store/actionPromise";

export const actionSubscribe = (login, id) => 
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
    login,
    following: [{_id: id}],
  }
  })
);


