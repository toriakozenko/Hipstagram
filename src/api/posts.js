import { gql } from "../Gql";
import { actionPromise } from "../store/actionPromise";
import { actionGetPosts } from "../store/postsReducer";

export const actionAllPosts = (skip, limit) => 
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
      likes {
        _id
        owner {
          _id
        }
      }
    }
  }`, { q: `[{},{"sort":[{"_id":-1}], "skip": [${skip}], "limit": [${limit}] }]`})
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
        likes {
          _id
          owner {
            _id
          }
        }
      }
    }
  `, { q: `[{"___owner":{"$in": ["${id}"]}},{"sort":[{"_id":-1}]}]` }));

  export const actionAllFollowingPosts = (arr, skip, limit) =>
  actionPromise('allFollowingPosts',
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
        likes {
          _id
          owner {
            _id
          }
        }
      }
    }
  `, { q: `[{"___owner":{"$in": ${arr}}},{"sort":[{"_id":-1}], "skip": [${skip}], "limit": [${limit}] }]` }));

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

  export const actionEditPost = (postId, title, text, id) =>
  actionPromise('editPost', 
  gql (`mutation editPost($post: PostInput) {
   PostUpsert(post: $post) {
      _id
      title
      text
      images {
        _id
      }
    }
  }`, { post: { _id: postId, title, text, images: [{ _id: id}] }}
  ));



