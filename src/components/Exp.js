import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { FaNewspaper, FaFileAlt, FaImage  } from 'react-icons/fa'; // New Icons
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
                                    <img src={experience.internshipImage} alt="Internship Experience" className="internship-image float-right ml-3" />
                                    <Card.Title className="mb-3 experience-title">{experience.title}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">{experience.company} · {experience.type}</Card.Subtitle>
                                    <Card.Subtitle className="mb-2 text-muted">{experience.duration}</Card.Subtitle>
                                    <Card.Subtitle className="mb-3 text-muted">{experience.location}</Card.Subtitle>
                                    <Card.Text className="mb-3">{experience.description}</Card.Text>
                                    <Card.Text className="mb-3">
                                        <strong>Skills:</strong> <a className="skills">{experience.skills}</a>
                                    </Card.Text>
                                    <Card.Text className="mb-3 link-group">
                                        {experience.links.map((link, linkIndex) => (
                                            <Card.Link
                                                key={linkIndex}
                                                href={link.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="custom-link"
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
        internshipImage: './images/IMG_5203.jpg',
        title: 'Detecting Vulnerable OAuth 2.0 Implementations in Android Applications',
        company: 'Ritsumeikan University',
        type: 'Internship',
        duration: 'May 2023 - July 2023 · 3 mos',
        location: 'Shiga, Japan · On-site',
        description: 'I researched the security vulnerabilities in Android apps using OAuth 2.0 with Google accounts, focusing on cross-site request forgery (CSRF) risks. By developing an app and analyzing others, I evaluated critical components like the state parameter and authorization code essential for CSRF prevention. The study reveals the protection level against CSRF in OAuth 2.0 Android implementations. Our aim is to promote user safety by highlighting vulnerable apps and underscoring the need for robust security measures. This research sets a benchmark for future app security audits.', // Full description here
        skills: 'Android Development · OAuth2.0 · Application Security · Security · Cybersecurity · Java', // Full skills list here
        links: [
            { url: 'https://www.ict.mahidol.ac.th/thai/abroad-internship-academic-year-2022/', type: 'news', label: 'News' },
            { url: 'https://waariss.github.io/Poster_Cyber_Lab/', type: 'poster', label: 'Poster' }
        ]
    },
    {
        companyLogo: './images/tu1.png',
        internshipImage: './images/ce16.png',
        title: 'Automated COVID-19 Screening Framework Using Deep CNN With Chest X-Ray Medical Images',
        company: 'National Central University',
        type: 'Internship',
        duration: 'Jun 2022 - Jul 2022 · 2 mos',
        location: 'Taoyuan City, Taiwan · Remote',
        description: 'I contributed to a project on automated COVID-19 diagnosis using chest X-rays, presented at the 2022 6th International Conference on Information Technology (InCIT). We proposed an AI-based screening method utilizing transfer learning and deep neural networks. Using Grad-CAM visualization, our convolutional neural network model showcased superior performance in accuracy, precision, recall, and F-measure on public datasets. This work advanced early COVID-19 detection and highlighted my skills in AI, deep learning, and medical imaging.', // Full description here
        skills: 'Public Speaking · Jupyter · Convolutional Neural Networks (CNN) · Deep Learning · Artificial Intelligence (AI) · Communication · Python', // Full skills list here
        links: [
            { url: 'https://www.ict.mahidol.ac.th/closing-ceremony-for-online-taiwan-summer-internship-2022/', type: 'news', label: 'News' },
            { url: 'https://ieeexplore.ieee.org/document/10067528', type: 'paper', label: 'Conference Paper' }
        ]
    }
];

export default Experience;
