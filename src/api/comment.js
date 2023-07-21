import { gql } from "../Gql";
import { actionPromise } from "../store/actionPromise";

export const actionCreateComment = (postId, comment) =>
actionPromise('comment', 
  gql (`mutation comment($comment: CommentInput) {
  CommentUpsert(comment: $comment) {
      _id
      text 
      createdAt
      post {
        _id
      }
    }
  }`, { comment: {
      "text": comment, 
      post: { "_id": postId}
  }
    }
));