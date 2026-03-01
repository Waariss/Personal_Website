import React from 'react';
import { Container} from 'react-bootstrap';
import { FaEnvelope, FaLinkedin, FaGithub} from 'react-icons/fa';
import { AiFillGoogleCircle, AiFillProject } from 'react-icons/ai';
import './App.css';

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <div className="footer-container">
            <Container className="footer-content">
                <div className="footer-section footer-text">
                    <p>Email: waris.dam@outlook.com</p>
                </div>
                <div className="footer-section footer-text">
                    <p>© {year} by Waris Damkham</p>
                </div>
                <div className="footer-section footer-icons">
                    {getIcons().map((icon) => (
                        <a key={icon.link} href={icon.link} target="_blank" rel="noopener noreferrer" aria-label={icon.label} className="social-icon">
                            {icon.icon}
                        </a>
                    ))}
                </div>
            </Container>
        </div>
    );
}

const getIcons = () => [
    { icon: <FaEnvelope className="text-secondary mx-2" />, link: 'mailto:waris.dam@outlook.com' },
    { icon: <FaLinkedin className="text-secondary mx-2" />, link: 'https://www.linkedin.com/in/waris-damkham/' },
    { icon: <AiFillProject className="text-secondary mx-2" />, link: 'https://www.researchgate.net/profile/Waris-Damkham' },
    { icon: <AiFillGoogleCircle className="text-secondary mx-2" />, link: 'https://scholar.google.com/citations?user=dug8UQQAAAAJ&hl=en' },
    { icon: <FaGithub className="text-secondary mx-2" />, link: 'https://github.com/Waariss' }
];

export default Footer;
