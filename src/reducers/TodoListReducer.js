const initialState = {
  todos: [
    { id: 0, text: "Learn React", completed: true },
    { id: 1, text: "Learn Redux", completed: false, color: "purple" },
    { id: 2, text: "Build something fun!", completed: false, color: "blue" },
  ],
};

const nextTodoId = (todos) => {
  const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
  return maxId + 1;
};

const findTodo = (todoId) => {
  const todo = initialState.find((todo) => todo.id === todoId);
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TODO_ADDED": {
      return {
        ...state,
        todos: {
          id: nextTodoId(state),
          text: action.payload,
          completed: false,
        },
      };
    }
    case "COLOR_CATEGORY_ADDED": {
      const { color, todoId } = action.payload;
      return state.map((todo) => {
        if (todo.id !== todoId) {
          return todo;
        }

        return {
          ...todo,
          color,
        };
      });
    }
    case "TODO_TOGGLED": {
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id !== action.payload) {
            return todo;
          }
          return {
            ...todo,
            completed: !todo.completed,
          };
        }),
      };
    }
    case "TODO_DELETED": {
      return state.filter((todo) => todo.id !== action.payload);
    }
    case "TODO_ALL_COMPLETED": {
      return state.map((todo) => {
        return { ...todo, completed: true };
      });
    }
    default: {
      return state;
    }
  }
};

export default todosReducer;

// export default function todosReducer(state = initialState, action) {
//   switch (action.type) {
//     case "todos/todoAdded": {
//       // Can return just the new todos array - no extra object around it
//       return [
//         ...state,
//         {
//           id: nextTodoId(state),
//           text: action.payload,
//           completed: false,
//         },
//       ];
//     }
//     case "todos/todoToggled": {
//       return state.map((todo) => {
//         if (todo.id !== action.payload) {
//           return todo;
//         }

//         return {
//           ...todo,
//           completed: !todo.completed,
//         };
//       });
//     }
//     case "todos/colorSelected": {
//       const { color, todoId } = action.payload;
//       return state.map((todo) => {
//         if (todo.id !== todoId) {
//           return todo;
//         }

//         return {
//           ...todo,
//           color,
//         };
//       });
//     }
//     case "todos/todoDeleted": {
//       return state.filter((todo) => todo.id !== action.payload);
//     }
//     case "todos/allCompleted": {
//       return state.map((todo) => {
//         return { ...todo, completed: true };
//       });
//     }
//     case "todos/completedCleared": {
//       return state.filter((todo) => !todo.completed);
//     }
//     default:
//       return state;
//   }
// }
