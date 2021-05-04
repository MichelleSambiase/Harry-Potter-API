import { makeStyles, Grid, } from "@material-ui/core";
import React from "react";
import CharactersCard from "./CharactersCard";
import HeaderStudents from "./Headers/HeaderStudents";


const Students = (props) => {
  const useStyles = makeStyles({
    root: {
      marginTop: "100px",
    },
    styleStudents: {
      justifyContent: "center",
    },
  });
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <HeaderStudents />
      <Grid container className={classes.styleStudents}>
        {props.wizards
          .filter((wizard) => wizard.hogwartsStudent === true)
          .map((filteredWizard, index) => (
            <CharactersCard wizard={filteredWizard} key={index} />
          ))}
      </Grid>
    </div>
  );
};

export default Students;
