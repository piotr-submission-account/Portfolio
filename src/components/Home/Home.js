import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            minHeight: "450px"
          }}>
            <Col md={7} className="home-header" style={{
              width: '100%'
            }}>
              <h1 className="heading-name">
                <strong className="main-name">PIOTR SIEMINSKI</strong>
              </h1>
              <Type />
              {/* <h2 className="secondary-name">Data Developer</h2> */}
            </Col>
            <div className="circle-blur"></div>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
