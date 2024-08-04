import React from 'react';
import { Container} from 'react-bootstrap';
import { FaEnvelope, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
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
                    {getIcons().map((icon, index) => (
                        <a key={index} href={icon.link} target="_blank" rel="noopener noreferrer" aria-label={icon.label} className="social-icon">
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
    // { icon: <FaInstagram className="text-secondary mx-2" />, link: 'https://www.instagram.com/waaris_m/' }
];

export default Footer;



//     return (
//         <Navbar collapseOnSelect expand="lg" style={{ background: '#f8f9fa' }} variant="light" className="py-4" id="contact">
//             <Container className="d-flex flex-column align-items-center">
//                 <Navbar.Text className="text-dark text-center mb-2" style={{ fontWeight: '600', fontSize: '18px' }}>
//                     © 2023 by Waris Damkham
//                 </Navbar.Text>
//                 <Navbar.Text className="text-dark text-center mb-3" style={{ fontSize: '16px' }}>
//                     Email: waris.dam@student.mahidol.ac.th
//                 </Navbar.Text>
//                 <div className="mt-2 icon-container">
//                     {getIcons().map((icon, index) => (
//                         <a key={index} href={icon.link} target="_blank" rel="noopener noreferrer" className="social-icon">
//                             {icon.icon}
//                         </a>
//                     ))}
//                 </div>
//             </Container>
//         </Navbar>
//     );
// }