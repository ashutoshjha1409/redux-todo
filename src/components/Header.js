import React from "react";
import TextField from "@mui/material/TextField";

const Header = (props) => {
  return (
    <>
      <TextField
        fullWidth
        label="What needs to be done?"
        id="fullWidth"
        placeholder="What needs to be done?"
        size="small"
        onChange={() => {}}
      />
    </>
  );
};

export default Header;
