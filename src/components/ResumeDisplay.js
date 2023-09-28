import React from 'react';
import { Card, Row, Col, Button, OverlayTrigger, Tooltip, Image } from 'react-bootstrap';
import '../resume.css';

const ResumeDisplay = () => {
    return (
        <section id="resume" className="my-4">
            <h1 className="mb-4 text-center title-enhanced">My Resume</h1>
            <Card className="mb-3 border-0 shadow-sm experience-card">
                <Card.Header className="bg-white border-0"></Card.Header>
                <Card.Body>
                    <Row>
                        <Col xs={7}>
                            <iframe 
                                src="./images/Waris's_Resume.pdf" 
                                width="100%" 
                                height="600px" 
                                style={{ border: "none" }}
                            ></iframe>
                        </Col>
                        <Col xs={5} className="d-flex align-items-center justify-content-end">
                            <div className="detailss-container justify-content-center">
                                <h4 className="text-center mb-4 title-enhanced">Contact & Follow</h4>
                                <p className="text-muted text-center">
                                    I'm always open to discussions, collaborations, or just a chat. Feel free to reach out through any of the platforms below or drop me an email.
                                </p>
                                <Row className="mt-4 justify-content-around">
                                    <Col xs={2} className="text-center">
                                        <OverlayTrigger overlay={<Tooltip id="tooltip-linkedin">LinkedIn</Tooltip>}>
                                            <Button variant="link" href="https://www.linkedin.com/in/waris-damkham/" target="_blank">
                                                <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/800px-LinkedIn_logo_initials.png" width="50" height="50" />
                                            </Button>
                                        </OverlayTrigger>
                                    </Col>
                                    <Col xs={2} className="text-center">
                                        <OverlayTrigger overlay={<Tooltip id="tooltip-github">GitHub</Tooltip>}>
                                            <Button variant="link" href="https://github.com/Waariss" target="_blank">
                                                <Image src="https://cdn-icons-png.flaticon.com/512/25/25231.png" width="50" height="50" />
                                            </Button>
                                        </OverlayTrigger>
                                    </Col>
                                    <Col xs={2} className="text-center">
                                        <OverlayTrigger overlay={<Tooltip id="tooltip-researchgate">ResearchGate</Tooltip>}>
                                            <Button variant="link" href="https://www.researchgate.net/profile/Waris-Damkham" target="_blank">
                                                <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/ResearchGate_icon_SVG.svg/1200px-ResearchGate_icon_SVG.svg.png" width="50" height="50" />
                                            </Button>
                                        </OverlayTrigger>
                                    </Col>
                                    <Col xs={2} className="text-center">
                                        <OverlayTrigger overlay={<Tooltip id="tooltip-google-scholar">Google Scholar</Tooltip>}>
                                            <Button variant="link" href="https://scholar.google.com/citations?user=dug8UQQAAAAJ&hl=en" target="_blank">
                                                <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Google_Scholar_logo.svg/1024px-Google_Scholar_logo.svg.png" width="50" height="50" />
                                            </Button>
                                        </OverlayTrigger>
                                    </Col>
                                    <Col xs={2} className="text-center">
                                        <OverlayTrigger overlay={<Tooltip id="tooltip-email">Email</Tooltip>}>
                                            <Button variant="link" href="mailto:waris.dam@student.mahidol.ac.th">
                                                <Image src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/112-gmail_email_mail-512.png" width="50" height="50" />
                                            </Button>
                                        </OverlayTrigger>
                                    </Col>
                                    <Col xs={2} className="text-center">
                                        <OverlayTrigger overlay={<Tooltip id="tooltip-credly">Credly</Tooltip>}>
                                            <Button variant="link" href="https://www.credly.com/users/waris-damkham.196ff471" target="_blank">
                                                <Image src="https://www.svgrepo.com/show/331358/credly.svg" width="50" height="50" />
                                            </Button>
                                        </OverlayTrigger>
                                    </Col>
                                </Row>
                                <div className="mt-4 text-center">
                                    <p>
                                        <strong className='title-contact'>Email:</strong> <a href="mailto:waris.dam@student.mahidol.ac.th">waris.dam@student.mahidol.ac.th</a>
                                    </p>
                                    <p>
                                        <strong className='title-contact'>Phone:</strong> +66 63 954 4447
                                    </p>
                                    <p>
                                        <strong className='title-contact'>Location:</strong> Bangkok, Thailand
                                    </p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </section>
    );
};

export default ResumeDisplay;

