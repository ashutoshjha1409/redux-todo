import React from "react";
import { useSelector } from "react-redux";

// const selectTodos = (state) => state.todos;

const TodoList = () => {
  const todos = useSelector((state) => state.todos);

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
};

export default TodoList;
