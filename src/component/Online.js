import { Row, Col } from "react-bootstrap";

const Online = () => {
  return (
    <div className="safety">
      <Row>
        <Col lg={12}>
          <h1 className="priority">
            OSHA ONLINE CENTER - YOUR SAFETY IS OUR PRIORITY
          </h1>
          <p className="need">
            All you need to know about OSHA Online Safety Training
          </p>
          <iframe
            className="video"
           
            width="700"
            height="400"
            src="https://www.youtube.com/embed/FtfYZDxcrr4"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </Col>
      </Row>
    </div>
  );
};
export default Online;
