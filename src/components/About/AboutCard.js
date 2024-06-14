import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Arun </span>
            from <span className="purple"> TamilNadu, India.</span>
            <br />
            I am currently employed as a software developer at ATDXT.
            <br />
            I have completed Integrated B.E in Electronics and Communications at KGiSL Instiute of Technology
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Transform ideas into reality with every line!"{" "}
          </p>
          <footer className="blockquote-footer">Arun</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
