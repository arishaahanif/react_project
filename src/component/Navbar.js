import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Modal } from "react-bootstrap";
import { IoIosSearch } from "react-icons/io";
import { BsFacebook } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { useState } from "react";

import logo from "../Images/Capture.PNG";

function NavScrollExample() {
  const [showModal, setShowModal] = useState(false);
  console.log(showModal);
  const modalContent = (
    <Modal
      show={showModal}
      onHide={() => setShowModal(false)}
      dialogClassName="modal-90w"
      centered
    >
      <Modal.Body>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Control type="text" placeholder="Search..." />
          </Form.Group>
        </Form>
      </Modal.Body>
    </Modal>
  );
  return (
    <div className="max">
      <Navbar expand="lg">
        <Navbar.Brand href="#">
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto ms-auto my-2 my-lg-0"
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            
            <Nav.Link href="#action1">Courses</Nav.Link>
            <Nav.Link href="#action1">Group Discount</Nav.Link>
            <Nav.Link href="#action1">FAQ</Nav.Link>
            <Nav.Link href="#action1">Articles</Nav.Link>
            <Nav.Link href="#action1">Contact</Nav.Link>
            <Button className="review" variant="primary" size="sm">
              Reviews
            </Button>{" "}
            <Button className="reviews" variant="primary" size="sm">
              American Recriuts
            </Button>{" "}
            <IoIosSearch
              size={20}
              className="Ci_search"
              onClick={() => setShowModal(true)}
            />
          </Nav>
          <Form className="d-flex icons">
            <BsFacebook className="icons" size={20} />
            <BsYoutube className="icons" size={20} />
            <AiOutlineTwitter className="icons" size={20} />
            <AiOutlineInstagram className="icons" size={20} />
            <AiFillLinkedin className="icons" size={20} />
          </Form>
        </Navbar.Collapse>
        {modalContent}
      </Navbar>
    </div>
  );
}

export default NavScrollExample;
