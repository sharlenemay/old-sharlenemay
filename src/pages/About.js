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
  h3: {
    fontStyle: "italic"
  },
  button: {
    backgroundColor: "black",
    color: "white",
  },
}));

export default function About() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container className={classes.container}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Paper className={classes.paper}>
              <h3 className={classes.h3}>
                My mission in life is not merely to survive, but to thrive; and
                to do so with some passion, some compassion, some humor, and
                some style. <br/> - Maya Angelou
              </h3>
              <h4>About Me</h4>
              <p>
                I'm Sharlene May, a Full Stack Web Developer with a background
                in the Social Sciences and Humanities and a budding passion for
                UX Research and UX Design. I'm interested in all things human
                and digital. When I'm not coding, I dedicate my time to
                researching and writing about emerging media, environmental
                sustainability, and everything in between. Blogging about slow
                fashion is my hobby and fencing is my sport.
              </p>
              <p>
                Since graduating university, I've worked in non-profit and
                corporate settings near and far; from my home city of Los
                Angeles to the suburbs of Tokyo and rural Japan. Having
                experienced life in different parts of the world, my goal is to
                bring people together through the development of inclusive UX
                Design and the optimization of human-centered digital platforms
                across diverse cultural contexts.
              </p>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Paper className={classes.paper}>
              <h4>Coding Languages and Frameworks</h4>
              <p>
                HTML, CSS, JavaScript, Node, React, Bootstrap, Material-UI,
                Handlebars
              </p>
              <h4>World Languages</h4>
              <p>
                English Native <br />
                Japanese Proficient <br />
                Elementary Korean <br />
                Elementary French
              </p>
              <h4>Education</h4>
              <p>
                Boston University, College of Communication, Master of Arts
                Candidate in Emerging Media Studies - expected Graduation May
                2022 <br />
                UCLA Extension, Bootcamp Certificate: 12-Week Full-stack Web
                Development Program - July 2020 <br />
                University of California, Los Angeles (UCLA), Bachelor of Arts
                in Anthropology and Bachelor of Arts in Asian Humanities - Magna
                Cum Laude 2018
              </p>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
