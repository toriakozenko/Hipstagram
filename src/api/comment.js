import { gql } from "../Gql";
import { actionPromise } from "../store/actionPromise";

export const actionCreateComment = (postId, text, id) =>
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
      "text": text, 
      post: { "_id": postId}
  }
    }
));


// export const actionCommentDelete = (commentId) =>
//   actionPromise('commentDelete', 
//     gql(`
//       mutation commentDelete($comment: CommentInput) {
//         CommentDelete(comment: $comment) {
//           _id
//         }
//       }
//     `, { comment: { _id: commentId}}
  
//     ));


