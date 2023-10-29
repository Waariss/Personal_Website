import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import '../App.css';

const Publication = ({links }) => {
    return (
        <section id="publications" className="my-5">
            <h1 className="mb-4 text-center title-enhanced">Publications</h1>
            <Card className="border-0 shadow-sm about-card">
                <Card.Body>
                    <ListGroup variant="flush">
                        {getPublications().map((publication, index) => (
                            <ListGroup.Item key={index} className="publication-item">
                                <a href={publication.link} target="_blank" rel="noopener noreferrer" className="linkStyle publication-title">
                                    <h5>{publication.title}</h5>
                                </a>
                                <p className="text-muted">{publication.subtitle}</p>
                                <p>{publication.description}</p>
                                {publication.date && <Card.Subtitle className="mb-2 text-muted">{publication.date}</Card.Subtitle>}
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                </Card.Body>
                {links && (
                    <Card.Text className="mb-3 link-group mt-3">
                        {links.map((link, index) => (
                            <Card.Link
                                key={index}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-outline-secondary"
                            >
                            </Card.Link>
                        ))}
                    </Card.Text>
                )}
            </Card>
        </section>
    );
};

const getPublications = () => [
    {
        title: 'Detecting Vulnerable OAuth 2.0 Implementations in Android Applications',
        subtitle: 'Presented at the Workshop on Cyber Forensics, Security, and E-discovery, as part of the 23rd IEEE International Conference on Software Quality, Reliability, and Security, 2023.',
        description: 'OAuth 2.0, commonly used for authorization, can be susceptible to CSRF attacks in Android applications. To address this, we developed an Android app to assess other apps\' use of the OAuth 2.0 state parameter—a key defense against CSRF. Our analysis, conducted on both Chrome and the default browser, evaluates whether Android apps using OAuth 2.0 are adequately protected against CSRF attacks. Our research aims to protect users by highlighting apps with potentially vulnerable OAuth 2.0 implementations.', // Truncated for brevity
        link: 'https://github.com/Waariss/Detecting-Vulnerable-OAuth-2.0-Implementations-in-Android-Applications/tree/main'
    },
    {
        title: 'Automated COVID-19 Screening Framework Using Deep CNN With Chest X-Ray Medical Images',
        subtitle: 'Presented at The 6th International Conference on Information Technology (InCIT2022)',
        description: 'An automated COVID-19 screening framework using chest X-ray images is proposed in this study. It leverages artificial intelligence techniques and transfer learning for accurate diagnosis. The framework extracts features using transfer learning and applies modified deep neural networks. Grad-CAM visualization supports the predicted diagnosis. Experimental results demonstrate superior performance compared to other deep learning techniques. This framework has the potential to aid in early COVID-19 diagnosis and alleviate the burden on radiologists.', // Truncated for brevity
        date: 'IEEE · Nov 11, 2022',
        link: 'https://ieeexplore.ieee.org/document/10067528'
    }
];

export default Publication;
