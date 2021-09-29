import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";

const Header = (props) => {
  const [todoText, setTodoText] = useState("");

  const dispatch = useDispatch();

  const handleTodoSubmit = () => {
    const text = todoText.trim();

    dispatch({ type: "TODO_ADDED", payload: text });
    setTodoText("");
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={10}>
          <TextField
            fullWidth
            label="What needs to be done?"
            id="fullWidth"
            placeholder="What needs to be done?"
            size="small"
            value={todoText}
            onChange={(e) => {
              setTodoText(e.target.value);
            }}
          />
        </Grid>
        <Grid item xs={2}>
          <Button variant="contained" fullWidth onClick={handleTodoSubmit}>
            Submit
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default Header;
