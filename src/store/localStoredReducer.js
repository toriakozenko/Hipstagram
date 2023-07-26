export function localStoredReducer(originalReducer, localStorageKey) {
  function wrapper(state, action) {
    if (state === undefined) {
      const keyData = localStorage.getItem(localStorageKey);

      if (keyData !== '{}' && keyData !== null) {
        return JSON.parse(keyData);
      }
    }
    const stateNew = originalReducer(state, action);
    localStorage[localStorageKey] = JSON.stringify(stateNew);
    return stateNew;
  }
  return wrapper;
}

