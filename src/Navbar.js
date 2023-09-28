import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { FaHome, FaUser, FaBriefcase, FaBook, FaGraduationCap, FaCertificate, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';

const Navigation = () => {
    return (
        <Navbar collapseOnSelect expand="lg" style={{ background: 'linear-gradient(90deg, rgba(10,24,61,1) 0%, rgba(28,40,51,1) 100%)' }} variant="dark">
            <Navbar.Brand href="#home" className="ms-2" style={{ fontFamily: "'Poppins', sans-serif", fontSize: '24px' }}>WD</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link href="#home" style={{ fontFamily: "'Poppins', sans-serif", transition: 'color 0.3s' }} activeStyle={{ color: '##FFD700' }}><FaHome className="me-1" /> Home</Nav.Link>
                    <Nav.Link href="#about" style={{ fontFamily: "'Poppins', sans-serif", transition: 'color 0.3s' }} activeStyle={{ color: '#FFD700' }}><FaUser className="me-1"/> About</Nav.Link>
                    <Nav.Link href="#experience" style={{ fontFamily: "'Poppins', sans-serif", transition: 'color 0.3s' }} activeStyle={{ color: '#FFD700' }}><FaBriefcase className="me-1"/> Experience</Nav.Link>
                    <Nav.Link href="#education" style={{ fontFamily: "'Poppins', sans-serif", transition: 'color 0.3s' }} activeStyle={{ color: '#FFD700' }}><FaGraduationCap className="me-1"/> Education</Nav.Link>
                    <Nav.Link href="#publications" style={{ fontFamily: "'Poppins', sans-serif", transition: 'color 0.3s' }} activeStyle={{ color: '#FFD700' }}><FaBook className="me-1"/> Publications</Nav.Link>
                    <Nav.Link href="#certifications" style={{ fontFamily: "'Poppins', sans-serif", transition: 'color 0.3s' }} activeStyle={{ color: '#FFD700' }}><FaCertificate className="me-1"/> Certifications</Nav.Link>
                    <Nav.Link href="#projects" style={{ fontFamily: "'Poppins', sans-serif", transition: 'color 0.3s' }} activeStyle={{ color: '#FFD700' }}><FaProjectDiagram className="me-1"/> Projects</Nav.Link>
                    <Nav.Link href="#resume" style={{ fontFamily: "'Poppins', sans-serif", transition: 'color 0.3s' }} activeStyle={{ color: '#FFD700' }} ><FaEnvelope className="me-1"/> Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Navigation;
                    