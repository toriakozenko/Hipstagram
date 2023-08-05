export const actionPromise = (name, promise) => {
  return async dispatch => { 
    dispatch(actionPending(name));
    try {
      const payload = await promise;
      dispatch(actionFulfilled(name, payload));
      return payload;
    }
    catch (error) {
      dispatch(actionRejected(name, error));
    }
  };
};
  

const actionPending = (name) => {
  return {
    type: 'PROMISE', 
    status: 'PENDING', 
    name
  }
};

const actionFulfilled = (name, payload) => {
  return {
    type: 'PROMISE', 
    status: 'FULFILLED', 
    payload, 
    name 
  }
};

const actionRejected = (name, error) => {
  return {
    type: 'PROMISE', 
    status: 'REJECTED',  
    error: error.message, 
    name 
  }
};