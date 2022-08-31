import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import Bmr from "../BMR_Cal/BMR";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <Bmr/>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
