import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { availableColors } from "../utils/Constants";

const selectTodoById = (state, props) => {
  return state.todosList.todos.find((todo) => todo.id === props.id);
};

const TodoListItem = (id) => {
  const todo = useSelector((state) => selectTodoById(state, id));
  const [selectedColors, setSelectedColors] = useState([]);
  const { text, completed } = todo;
  const dispatch = useDispatch();
  const label = { inputProps: { "aria-label": text } };

  const handleCompletedChanged = () => {
    dispatch({ type: "TODO_TOGGLED", payload: todo.id });
  };

  const handleColorChange = (event) => {
    const color = event.target.value;
    setSelectedColors(color);
    dispatch({
      type: "COLOR_CATEGORY_ADDED",
      payload: { todoId: todo.id, color },
    });
  };

  const handleDeleteTodo = () => {
    dispatch({ type: "TODO_DELETED", payload: todo.id });
  };

  return (
    <List>
      <ListItem
        disablePadding
        secondaryAction={
          <>
            <FormControl sx={{ m: 1, width: 200 }}>
              <Select
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                value={selectedColors}
                onChange={handleColorChange}
              >
                {availableColors.map((color) => (
                  <MenuItem key={color} value={color}>
                    {color}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <IconButton edge="end" aria-label="delete" color="error">
              <DeleteIcon onClick={handleDeleteTodo} />
            </IconButton>
          </>
        }
      >
        <ListItemButton>
          <ListItemIcon>
            <Checkbox
              {...label}
              checked={completed}
              onChange={handleCompletedChanged}
            />
          </ListItemIcon>
          <ListItemText primary={text} />
        </ListItemButton>
      </ListItem>
    </List>
  );
};

export default TodoListItem;
