import React, { useState } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { availableColors } from "../../utils/Constants";

const ColorFilter = (props) => {
  // const [selectedColors, setSelectedColors] = useState([]);
  const handleColorChange = (color) => {};
  return (
    <>
      <h3>Filter by Color</h3>
      <FormGroup>
        {availableColors.map((color, index) => (
          <FormControlLabel
            control={
              <Checkbox size="small" onChange={handleColorChange(color)} />
            }
            label={color}
            key={index}
          />
        ))}
      </FormGroup>
    </>
  );
};

export default ColorFilter;
