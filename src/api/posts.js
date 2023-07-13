import { gql } from "../Gql";
import { actionPromise } from "../store/actionPromise";

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
        _id
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



export const actionUserPosts = (id) =>
actionPromise('userPosts', 
  gql(`
    query userPosts($q: String) {
      PostFind(query: $q) {
        _id
        createdAt
        title
        text
        likesCount
        owner {
          _id
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
    }
  `, { q: `[{"___owner":{"$in": ["${id}"]}},{"sort":[{"_id":-1}]}]` }));


  

  export const actionCreatePost = (title, text, id) =>
  actionPromise('createPost', 
  gql (`mutation createPost($post: PostInput) {
   PostUpsert(post: $post) {
      _id
      title
      text
      images {
        _id
      }
    }
  }`, { post: { title, text, images: [{ _id: id}] }}
  ));









  // export const actionEditPost = (id) =>
  // actionPromise('editPost', 
  // gql (`mutation createPost($post: PostInput) {
  //  PostUpsert(post: $post) {
  //     _id
  //     title
  //     text
  //   }
  // }`, {q: `[{ "_id": "${id}" }]`}));

