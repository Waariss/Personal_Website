import React from 'react';
import { Container } from 'react-bootstrap';
import './App.css';
import ScrollToTopButton from './ScrollToTopButton';
import {
  About,
  Blog,
  CVE,
  Certifications,
  Competitions,
  Education,
  Experience,
  Home,
  Projects,
  Publications,
  ResumeDisplay,
  Skills,
  Speaker,
} from './components';
import Navigation from './Navbar';
import Footer from './Footer';

const Portfolio = () => (
  <>
    <Navigation />
    <Container fluid className="bg-light p-4">
      <ScrollToTopButton />
      <Home />
      <About />
      <Experience />
      <CVE />
      <Speaker />
      <Publications />
      <Projects />
      <Skills />
      <Certifications />
      <Education />
      <Competitions />
      <Blog />
      <ResumeDisplay />
    </Container>
    <Footer />
  </>
);

export default Portfolio;
