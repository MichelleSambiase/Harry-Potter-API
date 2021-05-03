import React, { useState } from "react";

import {
  makeStyles,
  Card,
  CardContent,
  Typography,
  CardMedia,
  Button,
  Dialog,
  DialogTitle,
  Container,
  DialogContent,
  Divider,
} from "@material-ui/core";

const CharactersCard = (props) => {
  const useStyles = makeStyles({
    styleCardWizars: {
      width: "300px",
      height: "600px",
      margin: "10px",
    },
    styleImgWizard: {
      height: "600px",
    },
    container: {
      position: "absolute",
    },
    stylebuttonInfo: {
      position: "relative",
      bottom: "60px",
      left: "65px",
      fontFamily: "DM Serif Display",
      fontStyle: "italic",
      fontSize: "22px",
      color: "#ded7d1",
    },
    styleDialog: {
      height: "500px",
    },
    dialogTitle: {
      display: "flex",
      justifyContent: "center",
      fontFamily: "DM Serif Display",
      fontStyle: "italic",
      fontSize: "30px",
    },
    styleContentDialog: {
      fontFamily: "DM Serif Display",
      fontStyle: "italic",
      fontSize: "20px",
      textAlign: "center",
      lineHeight:'1.6',
    },
    buttonRoot: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      padding:'0 0 15px 0'
    },
    styleButtonOkDialog: {
      width: "20%",
      fontFamily: "DM Serif Display",
      fontSize: "20px",
      fontStyle: "italic",

    },
  });
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const classes = useStyles();
  return (
    <div>
      <Container>
        <Card className={classes.styleCardWizars}>
          <CardMedia
            className={classes.styleImgWizard}
            image={props.wizard.image}
          >
            {props.image}
          </CardMedia>

          <CardContent>
            <div className={classes.container}>
              <Button
                className={classes.stylebuttonInfo}
                onClick={handleClickOpen}
              >
                More info
              </Button>
            </div>
            <Dialog
              className={classes.styleDialog}
              open={open}
              onClose={handleClose}
            >
              <DialogTitle>
                <Typography className={classes.dialogTitle}>
                  About Wizards
                </Typography>
              </DialogTitle>
              <DialogContent>
                <Typography className={classes.styleContentDialog}>
                  Name: {props.wizard.name} <br />
                  Date of Birth: {props.wizard.dateOfBirth} <br />
                  Species: {props.wizard.species}
                  <br />
                  Ancestry: {props.wizard.ancestry} <br />
                  <Divider />
                  House: {props.wizard.house} <br />
                  Patronus: {props.wizard.patronus} <br />
                  Wand: {props.wizard.wand.wood}
                  <br />
                  Actor/Actress: {props.wizard.actor}
                </Typography>
              </DialogContent>
              <div className={classes.buttonRoot}>
                <Button
                  variant="outlined"
                  className={classes.styleButtonOkDialog}
                  onClick={handleClose}
                >
                  Ok
                </Button>
              </div>
            </Dialog>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

export default CharactersCard;
