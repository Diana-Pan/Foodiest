import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/Salt.jpg";
import Home2 from "./Home2";
import Type from "./Type";
import { useNavigate } from "react-router-dom";
import {Button} from "antd";


function Home() {

  // let navigate = useNavigate();
  // const routeChange = () =>{
  //   let path = 'about';
  //   navigate(path);
  // }

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Revitalising Your{" "}
              </h1>

              <h1 className="heading-name">
                <strong className="main-name"> Lifestyle </strong>
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
                <br/>
                <br/>
                <h4 className="desc">
                  The best way to live and eat healthier starts with us.
                  <Button href="#home-about-section">Get start</Button>
                </h4>
                {/*<Button color="primary" className="px-4"*/}
                {/*        onClick={routeChange}*/}
                {/*>*/}
                {/*  Get start*/}
                {/*</Button>*/}

              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "600px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
