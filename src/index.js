function createStore(reducer, state ) {
  let currentState = state || {};
  const currentReducer = reducer;

  return {
    getState: () => currentState,
    dispatch: action => {
      currentState = currentReducer(currentState, action)
      return action
    }
  }
}
