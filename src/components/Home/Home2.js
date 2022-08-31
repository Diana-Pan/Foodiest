import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Pinapple.jpg";
import Tilt from "react-parallax-tilt";
import secImg from "../../Assets/hand.jpg"
import {Button} from "antd";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              OUR <span className="purple"> MISSION </span>
            </h1>
            <p className="home-about-body">

              <br /> Young adults often neglect good eating behaviour due to pressure from society's harsh standards of body image and ideal body figure. The risks of poor nutrition due to poor eating habits can lead to short and long term effects.
              <i>
                <b className="purple"> We aim to change that by promoting good eating habits among people like YOU so that you may life a long and and fulfilling life. </b>
              </i>
              <br />
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>

        <br />
        <br />
        <br />
        <br />

      </Container>
      <Col className="home-about-description-2">
        <h1 style={{ fontSize: "2.6em" }}>
          <span className="purple">Unhealthy <i className="home-about-description-2-text">diets</i></span>
        </h1>
        <p className="home-about-body-2">
          Your body image is how you perceive, think and feel about your body. This can include
          <br/>
          your body’s size, shape and weight, or individual body parts. Your body image may not
          <br/>
          be directly related to your actual appearance. A negative body image increases the
          <br/>
          risk of engaging in unhealthy lifestyle behaviours, such as dieting or restrictive eating,
          <br/>
          overexercising and other disordered eating or weight control behaviours.
          <br />
          <br />
          <br />

          <div>
            <Button style={{backgroundColor: "#B3FEA1"}}
                onClick={() => {
                  window.location.href="/project";
                }}>
              Learn more
            </Button>
          </div>
          <br />
          <br />

        </p>
      </Col>

      <Row>
        <Col md={6} className="myAvtar-1">
          <Tilt>
            <img src={secImg} className="img-fluid" alt="avatar" />
          </Tilt>
        </Col>

        <Col md={6} className="home-about-description-3">
          <h1 style={{ fontSize: "2.6em" }}>
            Your <span className="purple"> Eating Habits </span>
          </h1>
          <p className="home-about-body-3">

            <br /> Reducing the number of calories you eat per day can be an effective weight loss method. However, figuring out exactly how many calories you should eat can be tricky,
            <i>
              <b className="purple"> as it depends on a variety of factors, including your age, sex, size, and activity level.</b>
            </i>

            <br />
            <br />
            <br />
            <br />

            <div>
              <Button style={{backgroundColor: "#B3FEA1"}}
                  onClick={() => {
                    window.location.href="/about";
                  }}>
                Learn more
              </Button>
            </div>
          </p>
        </Col>

      </Row>
    </Container>


  );
}
export default Home2;
