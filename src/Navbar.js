import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { FaHome, FaUser, FaBriefcase, FaBook, FaGraduationCap, FaCertificate, FaProjectDiagram, FaEnvelope } from 'react-icons/fa'; // import the required icons

const Navigation = () => {
    return (
        <Navbar collapseOnSelect expand="lg" className="nav-color" variant="dark">
            <Navbar.Brand href="#home" className="ms-2">WD</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link href="#home"><FaHome className="me-1" /> Home</Nav.Link>
                    <Nav.Link href="#about"><FaUser  className="me-1"/> About</Nav.Link>
                    <Nav.Link href="#experience"><FaBriefcase className="me-1"/> Experience</Nav.Link>
                    <Nav.Link href="#education"><FaGraduationCap className="me-1"/> Education</Nav.Link>
                    <Nav.Link href="#publications"><FaBook className="me-1"/> Publications</Nav.Link>
                    <Nav.Link href="#certifications"><FaCertificate className="me-1"/> Certifications</Nav.Link>
                    <Nav.Link href="#projects"><FaProjectDiagram className="me-1"/> Projects</Nav.Link>
                    <Nav.Link href="#resume"><FaEnvelope className="me-1"/> Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Navigation;
