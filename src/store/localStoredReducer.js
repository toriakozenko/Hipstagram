export function localStoredReducer(originalReducer, localStorageKey) {
  function wrapper(state, action) {
    if (state === undefined) {
      try {
        const storedState = localStorage[localStorageKey];
        return storedState ? JSON.parse(storedState) : undefined;
      }
      catch(error){
        console.log(error)
      };   
    }
    const stateNew = originalReducer(state, action);
    localStorage[localStorageKey] = JSON.stringify(stateNew);
    return stateNew;
  }
  return wrapper;
}