import { Row, Col } from "react-bootstrap";

const Online = () => {
  return (
   <section className="section">
     <div className="safety">
      <div className="eee">
        <h1 className="priority">
          OSHA ONLINE CENTER - YOUR SAFETY IS OUR PRIORITY
        </h1>
        <p className="need">
          All you need to know about OSHA Online Safety Training
        </p>
        <div className="show_iframe">
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
        </div>
      </div>
    </div>
   </section>
  );
};
export default Online;
