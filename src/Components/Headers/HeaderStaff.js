import { makeStyles, Typography, Grid } from "@material-ui/core";
import React from "react";

const HeaderStaff = () => {
  const useStyles = makeStyles((theme) => ({
    rootFather: {
      width: "100%",
      marginTop: "100px",
      display: "flex",
      justifyContent: "center",
    },
    styleHeader: {
      display: "flex",
      justifyContent: "center",
      boxShadow: "-1px 0px 20px 3px rgb(78 50 44)",
      height: "550px",
      width:'55%',
      fontStyle: "italic",
      [theme.breakpoints.down('sm')]:{
        boxShadow:'none'
      },
      [theme.breakpoints.down('md')]:{
        boxShadow:'none'
      },
      [theme.breakpoints.down('lg')]:{
        boxShadow:'none'
      },
    },
    styleTitle: {
      fontFamily: "DM Serif Display, serif",
      color: "#ded7d1",
      display: "flex",
      alignItems: "center",
      fontStyle: "italic",
      [theme.breakpoints.down('sm')]: {
        fontSize: "30px"
      }
    },
  }));
  const classes = useStyles();
  return (
    <div>
      <div className={classes.rootFather}>
        <Grid container className={classes.styleHeader}>
        </Grid>
      </div>
    </div>
  );
};

export default HeaderStaff;