import React from 'react';
// import { Container, Card, Row, Col, ListGroup, Image, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Container} from 'react-bootstrap';
import './App.css';
import ScrollToTopButton from './button';
import Home from './components/Home'
import About from './components/About'
import Experience from './components/Exp';
import Education from './components/Edu';
import Publication from './components/Publications';
import Certificate from './components/cert';
import Projects from './components/Project';
import ResumeDisplay from './components/ResumeDisplay';

const Portfolio = () => {
    return (
        <Container fluid className="bg-light p-4">
            <ScrollToTopButton />
            <Home/>
            <About/>
            <Experience/>
            <Education/>
            <Publication/>
            <Certificate/>
            <Projects/>
            <ResumeDisplay />
            <button id="scrollToTopButton" onclick="scrollToTop()">Scroll to Top</button>
        </Container>
    );
}

export default Portfolio;