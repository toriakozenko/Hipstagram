import { gql } from "../Gql";
import { actionPromise } from "../store/actionPromise";

export const actionCreateLike = (postId) =>
actionPromise('likes', 
  gql (`mutation likes($like: LikeInput) {
  LikeUpsert(like: $like) {
      _id
      post {
        _id
      }
      owner {
        _id
      }
    }
  }`, { like: {post: { "_id": postId}}}
));


