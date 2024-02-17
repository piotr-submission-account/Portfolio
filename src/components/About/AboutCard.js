import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Piotr Sieminski </span>
            from <span className="purple"> Warsaw, Poland.</span>
            <br />
            I am currently working as a Data/Analytics Engineering contractor on various projects across Europe.
            <br />
            I am certified in cutting-edge technologies like Snowflake, DBT and AWS Cloud.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Sports of all sorts
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning new languages
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Engineering and modelling data, re-designing processes for governance, observability and in turn better data quality."{" "}
          </p>
          <footer className="blockquote-footer">Piotr Sieminski</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
