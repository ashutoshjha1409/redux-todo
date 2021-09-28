import React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { availableColors } from "../../Utils/Constants";

const ColorFilter = (props) => {
  return (
    <>
      <h3>Filter by Color</h3>
      <FormGroup>
        {availableColors.map((color, index) => (
          <FormControlLabel
            control={<Checkbox size="small" />}
            label={color}
            key={index}
          />
        ))}
      </FormGroup>
    </>
  );
};

export default ColorFilter;
