import React from 'react';
import { Card, Row, Col, Badge } from 'react-bootstrap';
import { FaCalendar, FaUniversity, FaExternalLinkAlt } from 'react-icons/fa';
import '../App.css';

const Publication = () => {
    const conferences = getConferences();
    
    return (
        <section id="publications" className="my-5">
            <h2 className="mb-4 text-center title-enhanced">Academic Publications</h2>
            <p className="text-center text-muted mb-4">
                Research papers presented at international IEEE conferences
            </p>
            
            <Row>
                {conferences.map((publication) => (
                    <Col key={`${publication.conference}-${publication.title}`} xs={12} md={6} lg={4} className="mb-4">
                        <Card className="publication-card h-100 border-0 shadow-sm">
                            <Card.Body className="d-flex flex-column">
                                <div className="publication-header">
                                    <Badge bg="primary" className="conference-badge">
                                        <FaUniversity className="me-2" />
                                        {publication.conference}
                                    </Badge>
                                </div>

                                <h5 className="publication-paper-title mt-3">
                                    {publication.title}
                                </h5>

                                <p className="publication-venue">
                                    {publication.venue}
                                </p>

                                <p className="publication-abstract flex-grow-1">
                                    {publication.description}
                                </p>

                                <div className="publication-meta">
                                    <small className="text-muted">
                                        <FaCalendar className="me-2" />
                                        {publication.date}
                                    </small>
                                </div>

                                <div className="mt-3">
                                    <a
                                        href={publication.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-outline-primary btn-sm w-100"
                                    >
                                        View on IEEE Xplore <FaExternalLinkAlt className="ms-1" aria-hidden="true" focusable="false" />
                                    </a>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </section>
    );
};


const getConferences = () => [
    {
        title: 'Practical Mobile Based Services for Identification of Chicken Diseases From Fecal Images',
        conference: 'TENCON 2024',
        venue: 'IEEE Region 10 Conference 2024',
        description: 'Poultry farming is crucial to the food chain, and chicken health directly impacts product quality and safety. Diagnosing poultry diseases using polymerase chain reaction is costly, particularly for small farms. To address this, we developed a mobile-based service for farmers, enabling the identification of common chicken diseases from fecal images via a Line account. Our system achieved 86.49% segmentation precision and 95.93% classification accuracy on a large dataset, offering a practical and accessible tool for local farmers.',
        date: 'March 5, 2025',
        year: '2024',
        link: 'https://ieeexplore.ieee.org/document/10902790'
    },
    {
        title: 'Detecting Vulnerable OAuth 2.0 Implementations in Android Applications',
        conference: 'QRS 2023',
        venue: '23rd IEEE International Conference on Software Quality, Reliability, and Security',
        description: 'OAuth 2.0, commonly used for authorization, can be susceptible to CSRF attacks in Android applications. To address this, we developed an Android app to assess other apps\' use of the OAuth 2.0 state parameter—a key defense against CSRF. Our analysis, conducted on both Chrome and the default browser, evaluates whether Android apps using OAuth 2.0 are adequately protected against CSRF attacks. Our research aims to protect users by highlighting apps with potentially vulnerable OAuth 2.0 implementations.',
        date: 'February 19, 2024',
        year: '2023',
        link: 'https://ieeexplore.ieee.org/document/10430018'
    },
    {
        title: 'Automated COVID-19 Screening Framework Using Deep CNN With Chest X-Ray Medical Images',
        conference: 'InCIT 2022',
        venue: '6th International Conference on Information Technology',
        description: 'An automated COVID-19 screening framework using chest X-ray images is proposed in this study. It leverages artificial intelligence techniques and transfer learning for accurate diagnosis. The framework extracts features using transfer learning and applies modified deep neural networks. Grad-CAM visualization supports the predicted diagnosis. Experimental results demonstrate superior performance compared to other deep learning techniques. This framework has the potential to aid in early COVID-19 diagnosis and alleviate the burden on radiologists.',
        date: 'March 21, 2023',
        year: '2022',
        link: 'https://ieeexplore.ieee.org/document/10067528'
    }
];

export default Publication;
