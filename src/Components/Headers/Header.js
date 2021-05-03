import { Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const Header = () => {
  const useStyles = makeStyles({
    root: {
      width: "100%",
      marginTop: "100px",
      display:'flex',
      justifyContent:'center',
      
    },
    styleHeader: {
      display: "flex",
      justifyContent: "center",
      boxShadow: "inset -1px 0px 20px 3px rgb(17 1 1)",
      height: "200px",
      width:'50%'
    },
    styleTitle: {
      fontFamily: "DM Serif Display, serif",
      color: "#ded7d1",
      display:'flex',
      alignItems: "center",
    },
  });
  const classes = useStyles();
  return (
    <div>
      <div className={classes.root}>
        <Grid container className={classes.styleHeader}>
          <Typography className={classes.styleTitle} variant="h1">
            Harry Potter
          </Typography>
        </Grid>
      </div>
    </div>
  );
};

export default Header;
