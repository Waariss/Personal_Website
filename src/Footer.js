import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { FaEnvelope, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { AiFillGoogleCircle, AiFillProject } from 'react-icons/ai';
import './App.css';

const Footer = () => {
    return (
        <Navbar collapseOnSelect expand="lg" style={{ background: 'linear-gradient(90deg, rgba(10,24,61,1) 0%, rgba(28,40,51,1) 100%)' }} variant="dark" className="py-4" id="contact">
            <Container className="d-flex flex-column align-items-center">
                <Navbar.Text className="text-light text-center mb-2" style={{ fontWeight: '600', fontSize: '18px' }}>
                    © 2023 by Waris Damkham
                </Navbar.Text>
                <Navbar.Text className="text-light text-center mb-3" style={{ fontSize: '16px' }}>
                    Email: waris.dam@student.mahidol.ac.th
                </Navbar.Text>
                <div className="mt-2 icon-container">
                    {getIcons().map((icon, index) => (
                        <a key={index} href={icon.link} target="_blank" rel="noopener noreferrer" className="social-icon">
                            {icon.icon}
                        </a>
                    ))}
                </div>
            </Container>
        </Navbar>
    );
}

const getIcons = () => [
    { icon: <FaEnvelope className="text-light mx-2" />, link: 'mailto:waris.dam@student.mahidol.ac.th' },
    { icon: <FaLinkedin className="text-light mx-2" />, link: 'https://www.linkedin.com/in/waris-damkham/' },
    { icon: <AiFillProject className="text-light mx-2" />, link: 'https://www.researchgate.net/profile/Waris-Damkham' },
    { icon: <AiFillGoogleCircle className="text-light mx-2" />, link: 'https://scholar.google.com/citations?user=dug8UQQAAAAJ&hl=en' },
    { icon: <FaGithub className="text-light mx-2" />, link: 'https://github.com/Waariss' },
    { icon: <FaInstagram className="text-light mx-2" />, link: 'https://www.instagram.com/waaris_m/' }
];

export default Footer;
