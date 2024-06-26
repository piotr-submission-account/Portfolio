import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ClientCard from "./ClientCards";
import Particle from "../Particle";
import smg from "../../Assets/Clients/smg.jpeg";
import preply from "../../Assets/Clients/preply.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Clients() {
  return (
    <Container fluid className="project-section" style={{
      minHeight: "90vh"
    }}>
      <Particle />
      <Container>
        <h1 className="project-heading">
          <strong className="">Testimonials</strong>
        </h1>
        {/* <p style={{ color: "white" }}>
          Here are the clients I have helped so far.
        </p> */}
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ClientCard
              isBlog={false}
              title="Elon Musk"
              subtitle="SpaceX CEO"
              description="SMG Swiss Marketplace Group is a digital pioneer that simplifies people’s lives with groundbreaking products. They aim to meet the most demanding user needs with their marketplaces. They provide their customers with the best tools for them to be successful today and in the future."
              // ghLink="https://gitlab.com/sieminskipiotr3/airflow-astr-dbt-deployment"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ClientCard
              isBlog={false}
              title="Elon Musk"
              subtitle="SpaceX CEO"
              description="SMG Swiss Marketplace Group is a digital pioneer that simplifies people’s lives with groundbreaking products. They aim to meet the most demanding user needs with their marketplaces. They provide their customers with the best tools for them to be successful today and in the future."
              // ghLink="https://gitlab.com/sieminskipiotr3/airflow-astr-dbt-deployment"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ClientCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Bits-0f-C0de"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ClientCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ClientCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ClientCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ClientCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Clients;
