// import React, {  useEffect } from 'react';
import { Button, Offcanvas } from 'react-bootstrap';
// import Button from "react-bootstrap/Button";
// import React from "react-bootstrap";
// import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../Images/Capture.PNG";
import { useState,useEffect } from "react";
import { Modal } from "react-bootstrap";
import { IoIosSearch } from "react-icons/io";
import { BsFacebook } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { VscThreeBars } from "react-icons/vsc";


const Navbars = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);

  const handleClose = () => setShowOffcanvas(false);
  const handleShow = () => setShowOffcanvas(true);

  const handleWindowResize = () => {
    setIsDesktop(window.innerWidth > 768);
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);
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
  const renderNavbarLinks = () => {
    if (isDesktop) {
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
            // style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">OSHA 10</Nav.Link>
            <Nav.Link href="#action1">OSHA 30</Nav.Link>
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
    } else {
      return (
        <Offcanvas show={showOffcanvas} onHide={handleClose} placement="start">
          <Offcanvas.Header closeButton>
            {/* <Offcanvas.Title>Offcanvas</Offcanvas.Title> */}
          </Offcanvas.Header>
          <Offcanvas.Body>
          <div className="max">
      <Navbar expand="lg">
        <Navbar.Brand href="#">
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>
        </Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="navbarScroll" /> */}
        {/* <Navbar.Collapse id="navbarScroll"> */}
          <Nav
            className="me-auto my-2 my-lg-0"
            // style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">OSHA 10</Nav.Link>
            <Nav.Link href="#action1">OSHA 30</Nav.Link>
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
        {/* </Navbar.Collapse> */}
        {modalContent}
      </Navbar>
    </div>
          </Offcanvas.Body>
        </Offcanvas>
      );
    }
  };

  return (
    <>
      <div onClick={handleShow} className='off_btn'>
        <VscThreeBars/>
      </div>

      {isDesktop ? (
        renderNavbarLinks()
      ) : (
        <div className="mobile-navbar-links">{renderNavbarLinks()}</div>
      )}
    </>
  );
};

export default Navbars;
