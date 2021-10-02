import React from "react";
import { useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { statusFilters } from "../../utils/Constants";
import "./Footer.css";

const statusArr = Object.keys(statusFilters);

const StatusFilter = (props) => {
  const dispatch = useDispatch();
  const handleStatusChange = (status) => {
    dispatch({ type: "STATUS_FILTER_CHANGED", payload: status });
  };

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
            <Button
              key={status}
              size="large"
              onClick={() => handleStatusChange(status)}
            >
              {status}
            </Button>
          ))}
        </ButtonGroup>
      </div>
    </>
  );
};

export default StatusFilter;
