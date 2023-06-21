// import React, { useState, useEffect } from 'react';
// import { Offcanvas, Nav, Navbar } from 'react-bootstrap';
// import logo from '../Images/Capture.PNG';
// import { IoIosSearch } from 'react-icons/io';
// import { BsFacebook, BsYoutube } from 'react-icons/bs';
// import { AiOutlineTwitter, AiOutlineInstagram, AiFillLinkedin } from 'react-icons/ai';
// import { VscThreeBars } from 'react-icons/vsc';

// const ResponsiveNavbar = () => {
//   const [showOffcanvas, setShowOffcanvas] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);

//   const handleClose = () => setShowOffcanvas(false);
//   const handleShow = () => setShowOffcanvas(true);

//   const handleWindowResize = () => {
//     setIsMobile(window.innerWidth <= 768);
//   };

//   useEffect(() => {
//     handleWindowResize(); // Check initial window size
//     window.addEventListener('resize', handleWindowResize);
//     return () => {
//       window.removeEventListener('resize', handleWindowResize);
//     };
//   }, []);

//   const renderNavbarLinks = () => {
//     return (
//       <div className="sidebar-navbar-links">
//         <Nav className="flex-column">
//           <Nav.Link href="#action1">Home</Nav.Link>
//           <Nav.Link href="#action2">OSHA 10</Nav.Link>
//           <Nav.Link href="#action1">OSHA 30</Nav.Link>
//           <Nav.Link href="#action1">Courses</Nav.Link>
//           <Nav.Link href="#action1">Group Discount</Nav.Link>
//           <Nav.Link href="#action1">FAQ</Nav.Link>
//           <Nav.Link href="#action1">Articles</Nav.Link>
//           <Nav.Link href="#action1">Contact</Nav.Link>
//         </Nav>
//         <div className="d-flex icons">
//           <BsFacebook className="icon" size={20} />
//           <BsYoutube className="icon" size={20} />
//           <AiOutlineTwitter className="icon" size={20} />
//           <AiOutlineInstagram className="icon" size={20} />
//           <AiFillLinkedin className="icon" size={20} />
//         </div>
//       </div>
//     );
//   };

//   return (
//     <>
//       <Navbar className="desktop-navbar" expand="lg">
//         <Navbar.Brand href="#">
//           <div className="logo">
//             <img src={logo} alt="Logo" />
//           </div>
//         </Navbar.Brand>
//         {isMobile ? (
//           <div onClick={handleShow} className="off_btn">
//             <VscThreeBars />
//           </div>
//         ) : (
//           <>
//             {renderNavbarLinks()}
//             <IoIosSearch size={20} className="Ci_search" />
//           </>
//         )}
//       </Navbar>

//       <Offcanvas show={showOffcanvas} onHide={handleClose} placement="start">
//         <Offcanvas.Header closeButton>
//           <Offcanvas.Title>Menu</Offcanvas.Title>
//         </Offcanvas.Header>
//         <Offcanvas.Body>{renderNavbarLinks()}</Offcanvas.Body>
//       </Offcanvas>
//     </>
//   );
// };

// export default ResponsiveNavbar;
