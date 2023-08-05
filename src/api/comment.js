import { gql } from "../Gql";
import { actionPromise } from "../store/actionPromise";

export const actionCreateComment = (postId, text) =>
actionPromise('comment', 
  gql (`mutation comment($comment: CommentInput) {
  CommentUpsert(comment: $comment) {
      _id
      text 
      createdAt
      post {
        _id
      }
      owner {
        login
        avatar {
          url
        }
      }
    }
  }`, { comment: {
      "text": text, 
      post: { "_id": postId}
  }
    }
));




