import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { AiFillStar } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";


function Example() {
  const [lgShow, setLgShow] = useState(false);
  return (
    <>
{/* <section className="section"> */}
<div className="show1">
<Button onClick={() => setLgShow(true)}>
  <div className="y_tube">
  <AiFillYoutube className="youtube"size={50}/>
  <p>Must watch before you Enroll OSHA training with us!</p>

  </div>
</Button>
</div>
{/* </section> */}
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
         
         </Modal.Header> 

        <Modal.Body className="thomas">
          {/* <div> */}
            <iframe className="say"
              height="315"
              src="https://www.youtube.com/embed/W-XKJ9UCh30"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            {/* </div> */}
       
          <p className="addition">
            Here's what JT THOMAS had to say about oshaonlinecenter.com in
            addition to their video testimonial:
          </p>
          <p className="training">
            The course was extensive but very well structured. It allows ample
            time to finish and to comprehend each cell.
          </p>

          <p className="training">
            <span>Course Taken:</span> OSHA 30-hour Construction Safety Training
          </p>
          <p className="training">
            <span>State:</span> Nevada
          </p>
          <p className="training">
            <span>Review Date:</span> 25 January 2023
          </p>
          <p>Pbith also gave oshaonlinecenter.com the following</p>
          <p className="training">
            Rebuy:
            <span>
              {" "}
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </span>
          </p>
          <p className="training">
            Price:
            <span>
              {" "}
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </span>
          </p>
          <p className="training">
            Product:
            <span>
              {" "}
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </span>
          </p>
        </Modal.Body>
      </Modal>
    </>
  );
}
export default Example;
