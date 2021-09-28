import React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { StatusFilters } from "../../Utils/Constants";
import "./Footer.css";

const statusArr = Object.keys(StatusFilters);

const StatusFilter = (props) => {
  return (
    <>
      <h3>Filter by status</h3>
      <div className="status-container">
        <ButtonGroup
          orientation="vertical"
          aria-label="vertical contained button group"
          variant="text"
        >
          {statusArr.map((status) => (
            <Button key={status} size="large">
              {status}
            </Button>
          ))}
        </ButtonGroup>
      </div>
    </>
  );
};

export default StatusFilter;
