import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {
  FaHome, FaUser, FaBriefcase, FaBook, FaGraduationCap, 
  FaCertificate, FaProjectDiagram, FaEnvelope, FaTrophy, 
  FaBlog, FaTools, FaShieldAlt, FaMicrophone
} from 'react-icons/fa';
import './App.css';

const NAV_ITEMS = [
    { id: 'home', label: 'Home', icon: FaHome },
    { id: 'about', label: 'About', icon: FaUser },
    { id: 'skills', label: 'Skills', icon: FaTools },
    { id: 'experience', label: 'Experience', icon: FaBriefcase },
    { id: 'education', label: 'Education', icon: FaGraduationCap },
    { id: 'projects', label: 'Projects', icon: FaProjectDiagram },
    { id: 'publications', label: 'Publications', icon: FaBook },
    { id: 'cves', label: 'CVEs', icon: FaShieldAlt },
    { id: 'speaker', label: 'Speaker', icon: FaMicrophone },
    { id: 'certifications', label: 'Certifications', icon: FaCertificate },
    { id: 'competitions', label: 'Competitions', icon: FaTrophy },
    { id: 'blog', label: 'Blog', icon: FaBlog },
    { id: 'resume', label: 'Resume', icon: FaEnvelope },
];

const Navigation = () => {
    return (
        <Navbar collapseOnSelect expand="lg" style={{ 
            background: 'linear-gradient(90deg, rgba(10,24,61,1) 0%, rgba(28,40,51,1) 100%)', 
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)'
        }} variant="dark">
            <Navbar.Brand as={Link} to="/" className="ms-2" style={{ fontFamily: "'Poppins', sans-serif", fontSize: '24px', fontWeight: 'bold' }}>WD</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ms-auto">
                    {NAV_ITEMS.map(({ id, label, icon: Icon }) => (
                        <Nav.Link 
                            key={id} 
                            as={Link}
                            to={`/#${id}`}
                            style={{ 
                                fontFamily: "'Poppins', sans-serif", 
                                transition: 'color 0.3s, transform 0.3s', 
                                fontWeight: '500'
                            }}
                            className="hover-grow"
                        >
                            <Icon className="me-1" />
                            {label}
                        </Nav.Link>
                    ))}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Navigation;
