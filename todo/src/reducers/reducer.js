import { ADD_TODO, COMPLETE_TODO, REMOVE_TODO } from '../actions/actions';

const initialState = {
  todos: [
    {
        text: 'Walk the dog.',
        completed: false,
        id: 0
    },
    {
        text: 'Learn Redux.',
        completed: false,
        id: 1
    },
    {
        text: 'Learn More Redux.',
        completed: false,
        id: 2
    },
    {
        text: 'Keep Learning Redux.',
        completed: false,
        id: 3
    }
  ],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return Object.assign({}, state, {
        todos: [...state.todos, action.payload]
      });
    case COMPLETE_TODO:
      const id = action.payload;
      const todos = state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
          return todo;
        } else {
          return todo;
        }
      });
      return Object.assign({}, state, { todos: todos });
      case REMOVE_TODO:
      return  {
        todos: state.todos.filter(todo => !todo.completed)
    }               
    default:
      return state;
  }
};