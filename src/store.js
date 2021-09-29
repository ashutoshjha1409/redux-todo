import { createStore } from "redux";
import rootReducer from "./reducers/rootReducers";

const store = createStore(rootReducer);

export default store;

// let preloadedState;
// const persistedTodosString = localStorage.getItem("todos");

// if (persistedTodosString) {
//   preloadedState = {
//     todos: JSON.parse(persistedTodosString),
//   };
// }

// const store = createStore(rootReducer, preloadedState);