import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import MetaTags from 'react-meta-tags';

function Home() {
  return (
    <section>
      <MetaTags>
        <title>Piotr Siemiński | Portfolio</title>
        <meta id="meta-description" name="description" content="Piotr Siemiński's Portfolio - Data developer" />
        <meta id="og-title" property="og:title" content="Piotr Siemiński | Portfolio" />
        <meta id="og-image" property="og:image" content="index.png" />
      </MetaTags>
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
