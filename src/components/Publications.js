import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import '../App.css';

const Publication = () => {
    return (
        <section id="publications" className="my-4">
            <h1 className="mb-4 text-center title-enhanced">Publications</h1>
            <Card className="border-0 shadow-sm about-card">
                <Card.Body>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <h5>Detecting Vulnerable OAuth 2.0 Implementations in Android Applications</h5>
                            <p>To be presented at the Workshop on Cyber Forensics, Security, and E-discovery, as part of the 23rd IEEE International Conference on Software Quality, Reliability, and Security, 2023.</p>
                            <p>OAuth 2.0, commonly used for authorization, can be susceptible to CSRF attacks in Android applications. To address this, we developed an Android app to assess other apps' use of the OAuth 2.0 state parameter—a key defense against CSRF. Our analysis, conducted on both Chrome and the default browser, evaluates whether Android apps using OAuth 2.0 are adequately protected against CSRF attacks. Our research aims to protect users by highlighting apps with potentially vulnerable OAuth 2.0 implementations.</p>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <a href="https://ieeexplore.ieee.org/document/10067528" target="_blank" rel="noopener noreferrer" className="linkStyle">
                                <h5>
                                    Automated COVID-19 Screening Framework Using Deep CNN With Chest X-Ray Medical Images
                                </h5>
                            </a>
                            <p>Presented at The 6th International Conference on Information Technology (InCIT2022)</p>
                            <p>An automated COVID-19 screening framework using chest X-ray images is proposed in this study. It leverages artificial intelligence techniques and transfer learning for accurate diagnosis. The framework extracts features using transfer learning and applies modified deep neural networks. Grad-CAM visualization supports the predicted diagnosis. Experimental results demonstrate superior performance compared to other deep learning techniques. This framework has the potential to aid in early COVID-19 diagnosis and alleviate the burden on radiologists.</p>
                            <Card.Subtitle className="mb-2 text-muted">IEEE · Nov 11, 2022</Card.Subtitle>
                        </ListGroup.Item>
                    </ListGroup>
                </Card.Body>
            </Card>
        </section>
    );
};

export default Publication;