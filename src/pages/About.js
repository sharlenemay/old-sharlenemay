import React from "react";
import { Row, Col } from "react-bootstrap";
import "./styles.css";
import img from "../photos/me.jpg";

export default function About() {
  return (
    <div className="main">
      <Row>
      <Col xs={12} sm={12} md={6} lg={6}>
        <img src={img} alt="autumn colors"></img>
        </Col>
        <Col xs={12} sm={12} md={6} lg={6}>
          <h3 className="green">
            User Researcher, Experience Designer
            {/* My mission in life is not merely to survive, but to thrive; and to
            do so with some passion, some compassion, some humor, and some
            style. - Maya Angelou */}
          </h3>
          <h5>About</h5>
          <p>I'm Sharlene May, a UX Researcher and Designer interested in all things human and digital.</p>
          <p>
            Since graduating with a Double B.A. in Anthropology and Asian
            Humanities, I've worked in non-profit and business settings near
            and far; from my home city of Los Angeles to the suburbs of Tokyo
            and rural Japan. Having experienced life in different parts of the
            world, my goal is to bring people together through the development
            of inclusive UX Engineering and the optimization of human-centered
            interaction design across cultural contexts.
          </p>
          <h5>Education</h5>
          <p>
            Boston University, College of Communication (BU COM)
            <br />
            Master of Arts Candidate in Emerging Media Studies - Expected
            Graduation May 2022
          </p>
          <p>
            University of California, Los Angeles (UCLA)
            <br />
            Bachelor of Arts in Anthropology, Bachelor of Arts in Asian
            Humanities - Magna Cum Laude 2018
          </p>
        </Col>

      </Row>
    </div>
  );
}
