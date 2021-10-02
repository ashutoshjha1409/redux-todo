import { color } from "@mui/system";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import TodoListItem from "./TodoListItem";

// const selectTodos = (state) => state.todos;

const TodoList = () => {
  const { todos } = useSelector((state) => state.todosList);
  const { status, color } = useSelector((state) => state.filters);
  const [filteredTodos, setFilteredTodos] = useState(todos);

  useEffect(() => {
    let filterTodos = todos;
    if (status === "Completed") {
      filterTodos = filterTodos.filter((todo) => todo.completed === true);
    }
    if (status === "Active") {
      filterTodos = filterTodos.filter((todo) => todo.completed === false);
    }
    setFilteredTodos(filterTodos);
  }, [status]);

  return (
    <ul className="todo-list">
      {filteredTodos.map((todo) => (
        <TodoListItem id={todo.id} key={todo.id} />
      ))}
    </ul>
  );
};

export default TodoList;
