import { makeStyles, Typography, Grid } from "@material-ui/core";
import React from "react";

const HeaderStudents = () => {
  const useStyles = makeStyles({
    rootFather: {
      width: "100%",
      marginTop: "100px",
      display: "flex",
      justifyContent: "center",
    },
    styleHeader: {
      display: "flex",
      justifyContent: "center",
      boxShadow: "inset -1px 0px 20px 3px rgb(17 1 1)",
      height: "200px",
      width: "50%",
    },
    styleTitle: {
      fontFamily: "DM Serif Display, serif",
      color: "#ded7d1",
      display: "flex",
      alignItems: "center",
    },
  });
  const classes = useStyles();
  return (
    <div>
      <div className={classes.rootFather}>
        <Grid container className={classes.styleHeader}>
          <Typography className={classes.styleTitle} variant="h1">
            Harry Potter Students
          </Typography>
        </Grid>
      </div>
    </div>
  );
};

export default HeaderStudents;
