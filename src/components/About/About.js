import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import FoodNutrients from "../FoodNutrients";
import Bmr from "../BMR_Cal/BMR";

function About() {
  return (

    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Your <strong className="purple"> BMR & Calorie</strong>
            </h1>
            <Aboutcard />
          </Col>
          {/*<Col*/}
          {/*  md={5}*/}
          {/*  style={{ paddingTop: "120px", paddingBottom: "50px" }}*/}
          {/*  className="about-img"*/}
          {/*>*/}
          {/*  <img src={laptopImg} alt="about" className="img-fluid" />*/}
          {/*</Col>*/}
        </Row>
        <h1 className="project-heading">
          The <strong className="purple"> results </strong>
        </h1>

        <Techstack />
        <br/>
        <FoodNutrients/>

      </Container>
    </Container>

  );
}

export default About;
