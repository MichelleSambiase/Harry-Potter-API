import {
  Button,
  Dialog,
  Grid,
  makeStyles,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
  Input,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import CharactersCard from "./CharactersCard";
import Header from "./Headerds/Header";

const Home = (props) => {
  const useStyles = makeStyles({
    root: {
      marginTop: "100px",
      justifyContent: "center",
    },
    styleDialog: {
      background: "#907169",
    },
    styleTitle: {
      fontFamily: "DM Serif Display",
      fontSize: "20px",
      fontStyle: "italic",
      color: "#ded7d1",
    },
    styleInput: {
      fontFamily: "DM Serif Display",
      fontSize: "20px",
      color: "#ded7d1",
      fontStyle: "italic",
      borderBottom: "none",
      background: "inherit",
      width: "100%",
      borderBottom: "ridge 1px",
      borderTop: "none",
      borderLeft: "none",
      borderRight: "none",
    },
  });

  const [open, setOpen] = useState(true);

  const [answer, setAnswer] = useState();

  const handleClose = () => {
    setOpen(true);
  };
  const onChangeAnswer = (e) => {
    setAnswer(e.target.value);
  };
  const handleCloseOk = () => {
    if (answer === "always") {
      setOpen(false);
      sessionStorage.setItem("keyWord", "true");
    } else {
      alert("That's not the answer that Snape told to Dumbledore");
    }
  };

  useEffect(() => {
    let data = sessionStorage.getItem("keyWord");
    if (data === "true") {
      setOpen(false);
    }
  }, []);

  const classes = useStyles();
  return (
    <div>
      <Dialog className={classes.styleDialog} open={open} onClose={handleClose}>
        <DialogTitle className={classes.styleDialog} id="form-dialog-title">
          <Typography className={classes.styleTitle}>
            Dumbledore turned back to Snape, and his eyes were full of tears...{" "}
            <br />
          </Typography>
        </DialogTitle>
        <DialogContent className={classes.styleDialog}>
          <DialogContentText className={classes.styleTitle}>
            After all this time?
          </DialogContentText>
          <form>
            <input
              onChange={onChangeAnswer}
              className={classes.styleInput}
              autoFocus
              margin="dense"
              id="name"
              answer={answer}
              fullWidth
            />
            <DialogActions>
              <Button onClick={handleCloseOk}>Ok</Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
      <Header />

      <Grid container className={classes.root}>
        {props.wizards.map((elemento, index) => (
          <CharactersCard wizard={elemento} key={index} />
        ))}
      </Grid>
    </div>
  );
};

export default Home;
