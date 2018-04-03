function createStore(reducer, state ) {
  let currentState = state || {};
  const currentReducer = reducer;

  return {
    getState: () => currentState,
  }
}
