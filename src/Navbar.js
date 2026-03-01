import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {
  FaBlog,
  FaBook,
  FaBriefcase,
  FaCertificate,
  FaEnvelope,
  FaGraduationCap,
  FaHome,
  FaMicrophone,
  FaProjectDiagram,
  FaShieldAlt,
  FaTools,
  FaTrophy,
  FaUser,
} from 'react-icons/fa';
import './App.css';
import { NAV_ITEMS } from './data';

const NAV_ICON_MAP = {
  blog: FaBlog,
  book: FaBook,
  briefcase: FaBriefcase,
  certificate: FaCertificate,
  envelope: FaEnvelope,
  'graduation-cap': FaGraduationCap,
  home: FaHome,
  microphone: FaMicrophone,
  'project-diagram': FaProjectDiagram,
  'shield-alt': FaShieldAlt,
  tools: FaTools,
  trophy: FaTrophy,
  user: FaUser,
};

const Navigation = () => (
  <Navbar collapseOnSelect expand="lg" className="portfolio-navbar" variant="dark">
    <Navbar.Brand as={Link} to="/" className="ms-2 portfolio-navbar-brand">
      WD
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="ms-auto">
        {NAV_ITEMS.map(({ id, label, icon }) => {
          const Icon = NAV_ICON_MAP[icon];

          return (
            <Nav.Link
              key={id}
              as={Link}
              to={`/#${id}`}
              className="hover-grow portfolio-navbar-link"
            >
              {Icon ? <Icon className="me-1" /> : null}
              {label}
            </Nav.Link>
          );
        })}
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Navigation;
