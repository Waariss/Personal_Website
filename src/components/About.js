import React from 'react';
import {Card, Row, Col, Image, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import '../App.css';

const About = () => {
    return (
        <section id="about" className="my-4">
            <Card className="border-0 shadow-sm about-card">
                <Card.Body>
                <Row>
                    <Col xs={12} md={4} className="mb-3">
                        <Image src="./images/waris.JPG" roundedCircle fluid className="profile-image" />
                    </Col>
                    <Col xs={12} md={8}>
                        <Card.Title><h2>About Me</h2></Card.Title>
                        <Card.Text>
                            Currently in my final year at Mahidol University, I'm majoring in Information and Communication Technology. My academic endeavors have instilled in me a deep passion for leveraging technology to address complex challenges. With a solid foundation in ICT, I'm enthusiastic about applying my knowledge in real-world scenarios. I'm actively seeking internship opportunities that will allow me to contribute to a forward-thinking team, while also enhancing my skills and gaining invaluable industry insights. I'm dedicated to continuous professional growth and am eager to bring my commitment and ICT expertise to a collaborative environment.
                        </Card.Text>
                        <div className="d-flex justify-content-start align-items-center mt-3">
                            <OverlayTrigger overlay={<Tooltip id="tooltip-linkedin">LinkedIn</Tooltip>}>
                                <Button variant="link" href="https://www.linkedin.com/in/waris-damkham/" target="_blank">
                                    <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/800px-LinkedIn_logo_initials.png" width="37.5" height="37.5" />
                                </Button>
                            </OverlayTrigger>

                            <OverlayTrigger overlay={<Tooltip id="tooltip-github">GitHub</Tooltip>}>
                                <Button variant="link" href="https://github.com/Waariss" target="_blank">
                                    <Image src="https://cdn-icons-png.flaticon.com/512/25/25231.png" width="37.5" height="37.5" />
                                </Button>
                            </OverlayTrigger>

                            <OverlayTrigger overlay={<Tooltip id="tooltip-researchgate">ResearchGate</Tooltip>}>
                                <Button variant="link" href="https://www.researchgate.net/profile/Waris-Damkham" target="_blank">
                                    <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/ResearchGate_icon_SVG.svg/1200px-ResearchGate_icon_SVG.svg.png" width="37.5" height="37.5" />
                                </Button>
                            </OverlayTrigger>

                            <OverlayTrigger overlay={<Tooltip id="tooltip-google-scholar">Google Scholar</Tooltip>}>
                                <Button variant="link" href="https://scholar.google.com/citations?user=dug8UQQAAAAJ&hl=en" target="_blank">
                                    <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Google_Scholar_logo.svg/1024px-Google_Scholar_logo.svg.png" width="37.5" height="37.5" />
                                </Button>
                            </OverlayTrigger>

                            <OverlayTrigger overlay={<Tooltip id="tooltip-email">Email</Tooltip>}>
                                <Button variant="link" href="mailto:waris.dam@student.mahidol.ac.th">
                                    <Image src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/112-gmail_email_mail-512.png" width="37.5" height="37.5" />
                                </Button>
                            </OverlayTrigger>

                            <OverlayTrigger overlay={<Tooltip id="tooltip-credly">Credly</Tooltip>}>
                                <Button variant="link" href="https://www.credly.com/users/waris-damkham.196ff471" target="_blank">
                                    <Image src="https://www.svgrepo.com/show/331358/credly.svg" width="37.5" height="37.5" />
                                </Button>
                            </OverlayTrigger>

                            <OverlayTrigger overlay={<Tooltip id="tooltip-credly">TryHackMe</Tooltip>}>
                                <Button variant="link" href="https://tryhackme.com/p/waris.dam" target="_blank">
                                    <Image src="https://tryhackme-badges.s3.amazonaws.com/waris.dam.png" alt="TryHackMe"/>
                                </Button>
                            </OverlayTrigger>
                        </div>
                    </Col>
                </Row>
                </Card.Body>
            </Card>
        </section>
    );
};

export default About;
