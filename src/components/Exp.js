import React from 'react';
import {Card, Row, Col } from 'react-bootstrap';
import '../App.css';

const Experience = () => {
    return (
        <section id="experience" className="my-4">
                <h1 className="mb-4 text-center title-enhanced">Experience</h1>
                <Card className="mb-3 border-0 shadow-sm experience-card">
                    <Card.Header className="bg-white border-0">
                    </Card.Header>
                    <Card.Body>
                        <Row>
                            <Col xs={2} className="d-flex align-items-start justify-content-center">
                                <img src="./images/tu.jpeg" alt="Company Logo" className="rounded-circle" style={{width: "130px", height: "130px"}} />
                            </Col>
                            <Col xs={10}>
                                <div className="details-container">
                                    <img src="./images/IMG_5203.jpg" alt="Internship Experience" className="internship-image float-right ml-3" />
                                    <Card.Title className="mb-3">
                                        Detecting Vulnerable OAuth 2.0 Implementations in Android Applications
                                    </Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">
                                        Ritsumeikan University · Internship
                                    </Card.Subtitle>
                                    <Card.Subtitle className="mb-2 text-muted">
                                        May 2023 - July 2023 · 3 mos
                                    </Card.Subtitle>
                                    <Card.Subtitle className="mb-2 text-muted">
                                        Shiga, Japan · On-site
                                    </Card.Subtitle>
                                    <Card.Text className="mb-3">
                                        I researched the security vulnerabilities in Android apps using OAuth 2.0 with Google accounts, focusing on cross-site request forgery (CSRF) risks. By developing an app and analyzing others, I evaluated critical components like the state parameter and authorization code essential for CSRF prevention. The study reveals the protection level against CSRF in OAuth 2.0 Android implementations. Our aim is to promote user safety by highlighting vulnerable apps and underscoring the need for robust security measures. This research sets a benchmark for future app security audits.
                                    </Card.Text>
                                    <Card.Text className="mb-3">
                                        <strong>Skills:</strong> <a>Android Development · OAuth2.0 · Application Security · Security · Cybersecurity · Java</a>
                                    </Card.Text>
                                    <Card.Text className="mb-3 link-group">
                                        <Card.Link
                                            href="https://www.ict.mahidol.ac.th/thai/abroad-internship-academic-year-2022/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="custom-link"
                                        >
                                            <i className="fas fa-newspaper"></i> News
                                        </Card.Link>
                                        <Card.Link
                                            href="https://waariss.github.io/Poster_Cyber_Lab/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="custom-link"
                                        >
                                            Poster
                                        </Card.Link>
                                    </Card.Text>
                                </div>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
                <Card className="mb-3 border-0 shadow-sm experience-card">
                    <Card.Header className="bg-white border-0">
                    </Card.Header>
                    <Card.Body>
                        <Row>
                            <Col xs={2} className="d-flex align-items-start justify-content-center">
                                <img src="./images/tu1.png" alt="Company Logo" style={{width: "140px", height: "140px"}} />
                            </Col>
                            <Col xs={10}>
                                <div className="details-container">
                                    <img src="./images/ce16.png" alt="Internship Experience" className="internship-image float-right ml-3" />
                                    <Card.Title className="mb-3">
                                        Automated COVID-19 Screening Framework Using Deep CNN With Chest X-Ray Medical Images
                                    </Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">
                                        National Central University · Internship
                                    </Card.Subtitle>
                                    <Card.Subtitle className="mb-2 text-muted">
                                        Jun 2022 - Jul 2022 · 2 mos
                                    </Card.Subtitle>
                                    <Card.Subtitle className="mb-2 text-muted">
                                        Taoyuan City, Taiwan · Remote
                                    </Card.Subtitle>
                                    <Card.Text className="mb-3">
                                        I contributed to a project on automated COVID-19 diagnosis using chest X-rays, presented at the 2022 6th International Conference on Information Technology (InCIT). We proposed an AI-based screening method utilizing transfer learning and deep neural networks. Using Grad-CAM visualization, our convolutional neural network model showcased superior performance in accuracy, precision, recall, and F-measure on public datasets. This work advanced early COVID-19 detection and highlighted my skills in AI, deep learning, and medical imaging.
                                    </Card.Text>
                                    <Card.Text className="mb-3">
                                        <strong>Skills:</strong> <a>Public Speaking · Jupyter · Convolutional Neural Networks (CNN) · Deep Learning · Artificial Intelligence (AI) · Communication · Python</a>
                                    </Card.Text>
                                    <Card.Text className="mb-3 link-group">
                                        <Card.Link
                                            href="https://www.ict.mahidol.ac.th/closing-ceremony-for-online-taiwan-summer-internship-2022/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="custom-link"
                                        >
                                            <i className="fas fa-newspaper"></i> News
                                        </Card.Link>
                                        <Card.Link
                                            href="https://ieeexplore.ieee.org/document/10067528"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="custom-link"
                                        >
                                            <i className="fas fa-file-alt"></i> Conference Paper
                                        </Card.Link>
                                    </Card.Text>
                                </div>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
        </section>
    );
};

export default Experience;
