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
                                src="./PDF/Waris_Resume_2025.pdf" 
                                width="100%" 
                                height="600px" 
                                style={{ border: "none" }}
                                title="Resume of Waris"
                            ></iframe>
                        </Col>
                        <Col xs={5} className="d-flex align-items-center justify-content-center">
                        <div className="terminal-container">
                        <div className="terminal-prompt">
                                <img src="https://www.svgrepo.com/show/355338/ubuntu.svg" alt="Ubuntu Logo" className="ubuntu-logo" />
                                <span className="prompt-user">warris-m</span>
                                <span className="prompt-location">~</span>
                                <span className="prompt-sign">$</span>
                                <span className='prompt-sign'>cat Contact & Follow</span>
                        </div>
                            <div className="terminal-body">
                                <p>I'm always open to discussions, collaborations, or just a chat. Feel free to reach out through any of the platforms below or drop me an email.</p>
                                <div className="terminal-commands">
                                    <div className="command">
                                        <span className="command-prefix">$</span>
                                        <span className="command-text">email: <a href="mailto:waris.dam@outlook.com">waris.dam@outlook.com</a></span>
                                    </div>
                                    <div className="command">
                                        <span className="command-prefix">$</span>
                                        <span className="command-text">phone: +66 63 954 4447</span>
                                    </div>
                                    <div className="command">
                                        <span className="command-prefix">$</span>
                                        <span className="command-text">location: Bangkok, Thailand 🇹🇭</span>
                                    </div>
                                </div>
                                <div className="terminal-icons">
                                    <OverlayTrigger overlay={<Tooltip id="tooltip-linkedin">LinkedIn</Tooltip>}>
                                        <Button variant="link" href="https://www.linkedin.com/in/waris-damkham/" target="_blank">
                                            <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/800px-LinkedIn_logo_initials.png" width="35" height="35" />
                                        </Button>
                                    </OverlayTrigger>   
                                    <OverlayTrigger overlay={<Tooltip id="tooltip-github">GitHub</Tooltip>}>
                                        <Button variant="link" href="https://github.com/Waariss" target="_blank">
                                            <Image src="https://cdn-icons-png.flaticon.com/512/25/25231.png" width="35" height="35" />
                                        </Button>
                                    </OverlayTrigger>
                                    <OverlayTrigger overlay={<Tooltip id="tooltip-researchgate">ResearchGate</Tooltip>}>
                                        <Button variant="link" href="https://www.researchgate.net/profile/Waris-Damkham" target="_blank">
                                            <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/ResearchGate_icon_SVG.svg/1200px-ResearchGate_icon_SVG.svg.png" width="35" height="35" />
                                        </Button>
                                    </OverlayTrigger>
                                    <OverlayTrigger overlay={<Tooltip id="tooltip-email">Email</Tooltip>}>
                                        <Button variant="link" href="mailto:waris.dam@outlook.com">
                                            <Image src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/112-gmail_email_mail-512.png" width="35" height="35" />
                                        </Button>
                                    </OverlayTrigger>
                                    <OverlayTrigger overlay={<Tooltip id="tooltip-credly">Credly</Tooltip>}>
                                        <Button variant="link" href="https://www.credly.com/users/waris-damkham.196ff471" target="_blank">
                                            <Image src="https://www.svgrepo.com/show/331358/credly.svg" width="35" height="35" />
                                        </Button>
                                    </OverlayTrigger>
                                    <OverlayTrigger overlay={<Tooltip id="tooltip-tryhackme">TryHackMe</Tooltip>}>
                                        <Button variant="link" href="https://tryhackme.com/p/waris.dam" target="_blank">
                                            <Image src="https://tryhackme.com/img/favicon.png" alt="TryHackMe" width="37.5" height="37.5"/>
                                        </Button>
                                    </OverlayTrigger>
                                    <OverlayTrigger overlay={<Tooltip id="tooltip-hackthebox">HackTheBox</Tooltip>}>
                                        <Button variant="link" href="https://app.hackthebox.com/profile/1458142" target="_blank">
                                            <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjDzxlNL92ntRTBI1IUwhxyAj7Ybk1mkW5AA&s" alt="HackTheBox" width="37.5" height="37.5"/>
                                        </Button>
                                    </OverlayTrigger>
                                    <OverlayTrigger overlay={<Tooltip id="tooltip-credential">Credential.Net</Tooltip>}>
                                        <Button variant="link" href="https://www.credential.net/profile/waarism/wallet#gs.ibia2y" target="_blank">
                                            <Image src="https://static.otta.com/uploads/images/company-favicons/3150-rwF6APJuwGu69IaKYJr_KQEdI3OnfZ3vlKo0bdD9vKQ.png" alt="Credential.Net" width="37.5" height="37.5"/>
                                        </Button>
                                    </OverlayTrigger>
                                    <OverlayTrigger overlay={<Tooltip id="tooltip-credential">Medium</Tooltip>}>
                                        <Button variant="link" href="https://medium.com/@waaris_m" target="_blank">
                                            <Image src="https://cdn4.iconfinder.com/data/icons/social-media-2210/24/Medium-1024.png" alt="Medium" width="37.5" height="37.5"/>
                                        </Button>
                                    </OverlayTrigger>
                                </div>
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