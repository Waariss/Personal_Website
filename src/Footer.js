import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { FaEnvelope, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { AiFillGoogleCircle, AiFillProject } from 'react-icons/ai';

const Footer = () => {
    return (
        <Navbar bg="dark" variant="dark" className="mt-5" id="contact">
            <Container className="d-flex flex-column align-items-center">
                <Navbar.Text className="text-light text-center">
                    © 2023 by Waris Damkham
                </Navbar.Text>
                <Navbar.Text className="text-light text-center">
                    Email: waris.dam@student.mahidol.ac.th
                </Navbar.Text>
                <div className="mt-2">
                    <a href="mailto:waris.dam@student.mahidol.ac.th" target="_blank" rel="noopener noreferrer">
                        <FaEnvelope className="text-light mx-2" />
                    </a>
                    <a href="https://www.linkedin.com/in/waris-damkham/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="text-light mx-2" />
                    </a>
                    <a href="https://www.researchgate.net/profile/Waris-Damkham" target="_blank" rel="noopener noreferrer">
                        <AiFillProject className="text-light mx-2" />
                    </a>
                    <a href="https://scholar.google.com/citations?user=dug8UQQAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">
                        <AiFillGoogleCircle className="text-light mx-2" />
                    </a>
                    <a href="https://github.com/Waariss" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="text-light mx-2" />
                    </a>
                    <a href="https://www.instagram.com/waaris_m/" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="text-light mx-2" />
                    </a>
                </div>
            </Container>
        </Navbar>
    );
}

export default Footer;
