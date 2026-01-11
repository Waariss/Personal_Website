import React from 'react';
// import { Container, Card, Row, Col, ListGroup, Image, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Container} from 'react-bootstrap';
import './App.css';
import ScrollToTopButton from './button';
import Home from './components/Home'
import About from './components/About'
import Skills from './components/skills';
import Experience from './components/Exp';
import Education from './components/Edu';
import Publication from './components/Publications';
import CVE from './components/CVE';
import Certificate from './components/cert';
import Projects from './components/Project';
import ResumeDisplay from './components/ResumeDisplay';
import Competitions from './components/comp';
import Blog from './components/Blog';
import Navigation from './Navbar';
import Footer from './Footer';

const Portfolio = () => {
    return (
        <><Navigation />
        <Container fluid className="bg-light p-4">
            <ScrollToTopButton />
            <Home />
            <About />
            <Skills />
            <Experience />
            <Education />
            <Projects />
            <Publication />
            <CVE />
            <Certificate />
            <Competitions />
            <Blog />
            <ResumeDisplay />
            <button id="scrollToTopButton" onclick="scrollToTop()">Scroll to Top</button>
        </Container>
        <Footer /></>
    );
}

export default Portfolio;
