export function localStoredReducer(originalReducer, localStorageKey) {
  function wrapper(state, action) {
    if (state === undefined) {
      try {
        return JSON.parse(localStorage[localStorageKey]);
      }
      catch(error){};   
    }
    const stateNew = originalReducer(state, action);
    localStorage[localStorageKey] = JSON.stringify(stateNew);
    return stateNew;
  }
  return wrapper;
}