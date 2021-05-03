import React, { useState } from "react";
import { withRouter } from "react-router-dom";

import {
  Button,
  makeStyles,
  Toolbar,
  Typography,
  AppBar,

} from "@material-ui/core";
const useStyles = makeStyles({
  root: {
    boxShadow: "none",
    background: "inherit",
  },
  navbarItems: {
    marginLeft: "auto",
  },
  styleNavbarItems: {
    fontSize: "22px",
    color: "#ded7d1",
    fontFamily: "DM Serif Display, serif",
    fontStyle: "italic",
    marginLeft: "auto",
  },
});
const Navbar = (props) => {
  const handleClickInicio = () => {
    props.history.push("/Harry-Potter-API");
  };

  const handleClickStudents = () => {
    props.history.push("/Harry-Potter-API/Students");
  };

  const handleClickStaff = () => {
    props.history.push("/Harry-Potter-API/Staff");
  };

  const classes = useStyles();
  return (
    <div>
      <AppBar className={classes.root}>
        <Toolbar className={classes.navbarItems}>
          <Button
            className={classes.styleNavbarItems}
            onClick={handleClickInicio}
          >
            Home
          </Button>
          <Button
            className={classes.styleNavbarItems}
            onClick={handleClickStudents}
          >
            Students
          </Button>
          <Button
            className={classes.styleNavbarItems}
            onClick={handleClickStaff}
          >
            Staff
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withRouter(Navbar);
