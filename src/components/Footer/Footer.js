import React from "react";
import Grid from "@mui/material/Grid";
import Actions from "./Actions";
import RemainingTodos from "./RemainingTodos";
import ColorFilter from "./ColorFilter";
import StatusFilter from "./StatusFilter";
import "./Footer.css";

const Footer = (props) => {
  return (
    <>
      <div className="footer">
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Actions />
          </Grid>
          <Grid item xs={3}>
            <RemainingTodos />
          </Grid>
          <Grid item xs={3}>
            <StatusFilter />
          </Grid>
          <Grid item xs={3}>
            <ColorFilter />
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Footer;
