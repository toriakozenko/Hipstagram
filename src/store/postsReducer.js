export function postsReducer(state = [], {type, payload}) {

  if (type === "ALL_POSTS") {
    return  payload ? [...payload] : [];
  }

  if (type === "ADD_POSTS") {
    return [...state, ...payload];
  }

  return state; 
}


export const actionSetPosts = (payload) => {
  return {
    type: "ALL_POSTS",
    payload
  }
}

export const actionAddPosts = (payload) => {
  return {
    type: "ADD_POSTS",
    payload
  }
}

