import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./footer.css";

function Footer() {
  return (
    <div className="footer">
      <Row>
      <Col>
      <h5>
      &copy;Sharlene May Minosa
      <br/>
      <a href="mailto:sminosa@bu.edu">sminosa@bu.edu</a>
      </h5>
      </Col>
      <Col id="footer-right">
      <div>
      <a href="https://github.com/sharlenemay" target="_blank">Github</a>
      <br />
      <a href="https://instagram.com/yamenelrahs" target="_blank">Instagram</a>
      </div>
      </Col>
      </Row>
    </div>
  );
}

export default Footer;
