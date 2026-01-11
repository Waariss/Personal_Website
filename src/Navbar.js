import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import {
  FaHome, FaUser, FaBriefcase, FaBook, FaGraduationCap, 
  FaCertificate, FaProjectDiagram, FaEnvelope, FaTrophy, 
  FaBlog, FaTools, FaShieldAlt, FaMicrophone
} from 'react-icons/fa';
import './App.css';

const Navigation = () => {
    return (
        <Navbar collapseOnSelect expand="lg" style={{ 
            background: 'linear-gradient(90deg, rgba(10,24,61,1) 0%, rgba(28,40,51,1) 100%)', 
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)'
        }} variant="dark">
            <Navbar.Brand href="/" className="ms-2" style={{ fontFamily: "'Poppins', sans-serif", fontSize: '24px', fontWeight: 'bold' }}>WD</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ms-auto">
                    {['home', 'about', 'skills', 'experience', 'education', 'projects', 'publications', 'cves', 'speaker', 'certifications', 'competitions', 'blog', 'resume'].map((link, index) => (
                        <Nav.Link 
                            key={index} 
                            href={`/#${link}`} 
                            style={{ 
                                fontFamily: "'Poppins', sans-serif", 
                                transition: 'color 0.3s, transform 0.3s', 
                                fontWeight: '500'
                            }}
                            className="hover-grow"
                        >
                            {getIconForLink(`#${link}`)}
                            {getLabelForLink(`#${link}`)}
                        </Nav.Link>
                    ))}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

const getIconForLink = (link) => {
    switch(link) {
        case '#home': return <FaHome className="me-1" />;
        case '#about': return <FaUser className="me-1" />;
        case '#skills': return <FaTools className="me-1" />;
        case '#experience': return <FaBriefcase className="me-1" />;
        case '#education': return <FaGraduationCap className="me-1" />;
        case '#projects': return <FaProjectDiagram className="me-1" />;
        case '#publications': return <FaBook className="me-1" />;
        case '#cves': return <FaShieldAlt className="me-1" />;
        case '#speaker': return <FaMicrophone className="me-1" />;
        case '#certifications': return <FaCertificate className="me-1" />;
        case '#competitions': return <FaTrophy className="me-1" />;
        case '#blog': return <FaBlog className="me-1" />;
        case '#resume': return <FaEnvelope className="me-1" />;
        default: return null;
    }
}

const getLabelForLink = (link) => {
    switch(link) {
        case '#home': return 'Home';
        case '#about': return 'About';
        case '#skills': return 'Skills';
        case '#experience': return 'Experience';
        case '#education': return 'Education';
        case '#publications': return 'Publications';
        case '#cves': return 'CVEs';
        case '#speaker': return 'Speaker';
        case '#certifications': return 'Certifications';
        case '#projects': return 'Projects';
        case '#competitions': return 'Competitions';
        case '#blog': return 'Blog';
        case '#resume': return 'Contact';
        default: return '';
    }
}

export default Navigation;
