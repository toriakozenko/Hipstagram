export function postsReducer(state = {}, { type, posts }) {
  let newState = { ...state };

  if (type === 'GET_POSTS') {
    if (newState[posts._id]) {
      newState[posts._id] = posts;
    } else {
      newState = {
        ...newState,
        ...{ [posts._id]: { posts } },
      };
    }
    return newState;
  }
  return state; 
}

export const actionGetPosts = (posts) => {
  return {
    type: 'GET_POSTS', 
    posts
   }
};
