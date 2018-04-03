const createStore = "./src/index.js";
const connect = "./src/connect.js"
const state = {todos: ""};

let AddTodo = ({ todos }) => { 
  // Some fancy implementation (not relevant for this example)
}

function reducer(state, action) {
  const newState = {...state};
  return newState;
}

const store = createStore(reducer, state)

const mapStateToProps = state =>  { todos: state.todos } 

const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: id => dispatch(toggleTodo(id)) 
  }
}

AddTodo = connect(mapStateToProps, mapDispatchToProps)(AddTodo);
