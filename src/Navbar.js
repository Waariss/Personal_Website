import React, { useMemo, useState } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
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
import useScrollSpy from './hooks/useScrollSpy';

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

const NAV_SCROLL_OFFSET = 92;

const Navigation = () => {
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const sectionIds = useMemo(() => NAV_ITEMS.map((item) => item.id), []);
  const activeId = useScrollSpy(sectionIds);

  const scrollToSection = (id) => {
    const target = document.getElementById(id);
    if (!target) {
      return;
    }

    const top = target.getBoundingClientRect().top + window.scrollY - NAV_SCROLL_OFFSET;
    window.history.replaceState(null, '', `/#${id}`);
    window.scrollTo({ top, behavior: 'smooth' });
  };

  const handleNavClick = (event, id) => {
    event.preventDefault();
    setExpanded(false);

    if (location.pathname !== '/') {
      navigate(`/#${id}`);
      return;
    }

    scrollToSection(id);
  };

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      sticky="top"
      expanded={expanded}
      onToggle={(nextValue) => setExpanded(Boolean(nextValue))}
      className="portfolio-navbar"
      variant="dark"
      aria-label="Primary navigation"
    >
      <Navbar.Toggle aria-controls="responsive-navbar-nav" className="portfolio-navbar-toggle" />
      <Navbar.Collapse id="responsive-navbar-nav" className="portfolio-navbar-collapse">
        <Nav className="portfolio-navbar-nav">
          {NAV_ITEMS.map(({ id, label, icon }) => {
            const Icon = NAV_ICON_MAP[icon];
            const isActive = location.pathname === '/' && activeId === id;

            return (
              <Nav.Link
                key={id}
                as={Link}
                to={`/#${id}`}
                onClick={(event) => handleNavClick(event, id)}
                className={`portfolio-navbar-link ${isActive ? 'active' : ''}`}
                aria-current={isActive ? 'page' : undefined}
              >
                {Icon ? <Icon className="portfolio-nav-icon me-1" /> : null}
                {label}
              </Nav.Link>
            );
          })}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
