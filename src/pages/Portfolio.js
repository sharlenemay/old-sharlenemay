import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Grid, Container } from "@material-ui/core";
import "./styles.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    alignContent: "center",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "left",
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

export default function Portfolio() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container className={classes.container}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <h4>Under construction.</h4>
            </Paper>
          </Grid>
          {/* <Grid item xs={12}>
                <Paper className={classes.paper}>
                    <h4>Dinner and a Movie</h4>
                </Paper>
            </Grid> */}
          {/* <Grid item xs={12}>
                <Paper className={classes.paper}>
                    <h4>Selfcare Sidekick</h4>
                </Paper>
            </Grid>
            <Grid item xs={12}>
                <Paper className={classes.paper}>
                    <h4>The Space Hub</h4>
                </Paper>
            </Grid> */}
        </Grid>
      </Container>
    </div>
  );
}
