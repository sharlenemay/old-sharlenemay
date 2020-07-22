import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import img from "../photos/IMG_1189.jpeg";
import "./styles.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    alignContent: "center",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    boxShadow: "none",
  },
  container: {
    paddingTop: "10vh",
    paddingBottom: "12vh",
    height: "100vh",
  },
  h2: {
    color: "black",
    textAlign: "left",
    margin: "5%",
  },

  button: {
    backgroundColor: "black",
    color: "white",
  },
}));

export default function Landing() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container className={classes.container}>
        <Paper className={classes.paper}>
          <Grid container spacing={3}>
              <Grid item xs={12}>
                  <img src={img} alt="mountain hike"></img>
              </Grid>
          </Grid>
        </Paper>
      </Container>
    </div>
  );
}
