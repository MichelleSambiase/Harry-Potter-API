import { Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const Header = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      width: "100%",
      marginTop: "100px",
      display:'flex',
      justifyContent:'center',
      
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
      display:'flex',
      alignItems: "center",
      
      [theme.breakpoints.down('sm')]:{
        fontSize:"40px"
      }
    },
  }));
  const classes = useStyles();
  return (
    <div>
      <div className={classes.root}>
        <Grid container className={classes.styleHeader}>
          <Typography className={classes.styleTitle} variant="h1">
         
          </Typography>
        </Grid>
      </div>
    </div>
  );
};

export default Header;
