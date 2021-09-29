import { combineReducers } from "redux";

import todosListReducer from "./TodoListReducer";
// import filtersReducer from "./FiltersReducer";

const rootReducer = combineReducers({
  todos: todosListReducer,
  // filters: filtersReducer,
});

export default rootReducer;
