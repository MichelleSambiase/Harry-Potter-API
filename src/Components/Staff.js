import { makeStyles, Grid } from '@material-ui/core'
import React from 'react'
import CharactersCard from "./CharactersCard"
import HeaderStaff from './Headers/HeaderStaff'



const Staff = (props) => {
  const useStyles = makeStyles({
    root: {
      marginTop: "100px",


    },
    styleStaff: {

      justifyContent: 'center',
    }
  })
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <HeaderStaff />
      <Grid container className={classes.styleStaff}>
        {props.wizards
          .filter((wizard) => wizard.hogwartsStaff === true)
          .map((filteredWizard, index) => (
            <CharactersCard wizard={filteredWizard} key={index} />
          ))}
      </Grid>
    </div>
  )
}

export default Staff
