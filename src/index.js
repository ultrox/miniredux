function createStore(reducer, state ) {
  let currentState = state || {};
  const currentReducer = reducer;
  const listener = () => {};
  return {
    getState: () => currentState,
    dispatch: action => {
      currentState = currentReducer(currentState, action)
      listener(); // magic
      return action
    },
    subscribe: newListener => listener = newListener;
  }
}
