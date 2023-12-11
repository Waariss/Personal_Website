import React from 'react';
import { Card, Row, Col} from 'react-bootstrap';
import { FaNewspaper, FaFileAlt, FaImage  } from 'react-icons/fa';
import '../App.css';

const Experience = () => {
    return (
        <section id="experience" className="my-5">
            <h1 className="mb-4 text-center title-enhanced">Experience</h1>
            {getExperiences().map((experience, index) => (
                <Card key={index} className="mb-4 border-0 shadow-sm experience-card hover-shadow">
                    <Card.Body>
                        <Row>
                            <Col xs={2} className="d-flex align-items-start justify-content-center">
                                <img src={experience.companyLogo} alt="Company Logo" className="company-logo" />
                            </Col>
                            <Col xs={10}>
                                <div className="details-container">
                                    <img src={experience.internshipImages} alt="Internship Experience" className="internship-image float-right ml-3" />
                                    <Card.Title className="mb-3 experience-title">{experience.title}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">{experience.company} · {experience.type}</Card.Subtitle>
                                    <Card.Subtitle className="mb-2 text-muted">{experience.duration}</Card.Subtitle>
                                    <Card.Subtitle className="mb-3 text-muted">{experience.location}</Card.Subtitle>
                                    <Card.Text className="mb-3">{experience.description}</Card.Text>
                                    <Card.Text className="mb-3">
                                        <strong>Skills:</strong> <span className="skills">{experience.skills}</span>
                                    </Card.Text>
                                    <Card.Text className="mb-3 link-group">
                                        {experience.links.map((link, linkIndex) => (
                                            <Card.Link
                                                key={linkIndex}
                                                href={link.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="btn btn-outline-dark custom-link"
                                            >
                                                {getIconForLinkType(link.type)} {link.label}
                                            </Card.Link>
                                        ))}
                                    </Card.Text>
                                </div>
                            </Col>
                        </Row>
                        
                    </Card.Body>
                </Card>
            ))}
        </section>
    );
};

const getIconForLinkType = (type) => {
    switch(type) {
        case 'news': return <FaNewspaper className="me-1" />;
        case 'paper': return <FaFileAlt className="me-1" />;
        case 'poster': return <FaImage className="me-1" />;  // Using FaImage for poster
        default: return null;
    }
};

const getExperiences = () => [
    // You can add more experiences in this array in the same format
    {
        companyLogo: './images/tu.jpeg',
        internshipImages: './images/IMG_5203.jpg',
        title: 'Detecting Vulnerable OAuth 2.0 Implementations in Android Applications',
        company: 'Ritsumeikan University',
        type: 'Internship',
        duration: 'May 2023 - July 2023 · 3 mos',
        location: 'Shiga, Japan 🇯🇵 · On-site',
        description: 'I conducted research on the security vulnerabilities in Android apps that use OAuth 2.0 with Google accounts, with a focus on the risks of cross-site request forgery (CSRF). My findings were presented at the Workshop on Cyber Forensics, Security, and E-discovery, during the 23rd IEEE International Conference on Software Quality, Reliability, and Security in 2023. By developing an app and analyzing others, I evaluated critical components such as the state parameter and authorization code, which are essential for CSRF prevention. The study reveals the level of protection against CSRF in implementations of OAuth 2.0 on Android. Our goal is to enhance user safety by identifying vulnerable apps and emphasizing the necessity for robust security measures. This research establishes a benchmark for future security audits of apps.', // Full description here
        skills: 'Android Development · OAuth2.0 · Application Security · Security · Cybersecurity · Java', // Full skills list here
        links: [
            { href: 'https://www.ict.mahidol.ac.th/thai/abroad-internship-academic-year-2022/', type: 'news', label: 'News' },
            { href: '/pdf/Ritsumeikan_University_Poster', type: 'poster', label: 'Poster' }
        ]
    },
    {
        companyLogo: './images/tu1.png',
        internshipImages: './images/ce16.png',
        title: 'Automated COVID-19 Screening Framework Using Deep CNN With Chest X-Ray Medical Images',
        company: 'National Central University',
        type: 'Internship',
        duration: 'Jun 2022 - Jul 2022 · 2 mos',
        location: 'Taoyuan City, Taiwan 🇹🇼 · Remote',
        description: 'I contributed to a project on automated COVID-19 diagnosis using chest X-rays, presented at the 2022 6th International Conference on Information Technology (InCIT). We proposed an AI-based screening method utilizing transfer learning and deep neural networks. Using Grad-CAM visualization, our convolutional neural network model showcased superior performance in accuracy, precision, recall, and F-measure on public datasets. This work advanced early COVID-19 detection and highlighted my skills in AI, deep learning, and medical imaging.', // Full description here
        skills: 'Public Speaking · Jupyter · Convolutional Neural Networks (CNN) · Deep Learning · Artificial Intelligence (AI) · Communication · Python', // Full skills list here
        links: [
            { href: 'https://www.ict.mahidol.ac.th/closing-ceremony-for-online-taiwan-summer-internship-2022/', type: 'news', label: 'News' },
            { href: 'https://ieeexplore.ieee.org/document/10067528', type: 'paper', label: 'Conference Paper' },
            { href: '/pdf/NCU_CERT', type: 'poster', label: 'Show Credential' },
            { href: '/pdf/INCIT_CERT', type: 'poster', label: 'Conference Certifications' },
        ]
    }
];

export default Experience;
