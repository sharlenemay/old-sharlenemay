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

export default function About() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container className={classes.container}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Paper className={classes.paper}>
              <h4>About Me</h4>
              <p>
                Hello! I'm Sharlene (also known as May) and I'm a Full Stack Web
                Developer with a background in the Social Sciences and
                Humanities and a budding passion for UX Research and Web Design.
              </p>
              <p>
                I have interest in all things both human and digital. When I'm
                not coding, I dedicate my time to researching and writing about
                emerging media, environmental sustainability, racial injustice,
                and everything in between. I'm also a slow fashion activist and
                tiny house enthusiast.
              </p>
              <p>
                Since graduating with my Bachelor’s degree, I've worked in
                non-profit and corporate settings near and far; from my home
                city of Los Angeles to the suburbs of Tokyo and rural Japan.
                Having experienced life in different parts of the world, my goal
                is to bring people together through inclusive and inspiring
                digital platforms and the optimization of human-centered web
                applications across diverse cultural environments.
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
