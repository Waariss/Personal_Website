import React from 'react';
import { Container, Card, Row, Col, ListGroup, Image, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import './App.css';

const Portfolio = () => {
    return (
        <Container fluid className="bg-light p-4">
            <section id="home" className="text-center my-4 home-section">
            <Container className="jumbotron-style">
                <h1 className="display-4">WARIS DAMKHAM'S PORTFOLIO</h1>
                <p className="lead">A fourth-year student in Information and Communication Technology at Mahidol University.</p>
                <hr className="my-4" />
                <p>Take a moment to explore my skills, experiences, and projects below.</p>
                <p className="lead">
                <Button variant="outline-light" href="#about">Learn More</Button>
                </p>
            </Container>
            </section>
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
                        As a fourth-year student pursuing my degree in Information and Communication Technology at Mahidol University, I bring enthusiasm and commitment to utilizing technology to resolve intricate problems. My academic journey has equipped me with a firm grounding in ICT, and I am excited to utilize these skills in a practical context. I am keenly seeking internship opportunities to both contribute to a dynamic team and broaden my knowledge while gaining meaningful industry experience. I am committed to continuous learning and eagerly look forward to bringing my dedication and ICT expertise to your team.
                    </Card.Text>
                    <div className="d-flex justify-content-start align-items-center mt-3">
                        <OverlayTrigger overlay={<Tooltip id="tooltip-linkedin">LinkedIn</Tooltip>}>
                        <Button variant="link" href="https://www.linkedin.com/in/waris-damkham/" target="_blank">
                            <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/800px-LinkedIn_logo_initials.png" width="37.5" height="37.5" />
                        </Button>
                        </OverlayTrigger>
                        <OverlayTrigger overlay={<Tooltip id="tooltip-github">GitHub</Tooltip>}>
                        <Button variant="link" href="https://github.com/Waariss" target="_blank">
                            <Image src="https://cdn-icons-png.flaticon.com/512/25/25231.png" width="37.5" height="37.5"  />
                        </Button>
                        </OverlayTrigger>
                        <OverlayTrigger overlay={<Tooltip id="tooltip-researchgate">ResearchGate</Tooltip>}>
                        <Button variant="link" href="https://www.researchgate.net/profile/Waris-Damkham" target="_blank">
                            <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/ResearchGate_icon_SVG.svg/1200px-ResearchGate_icon_SVG.svg.png" width="37.5" height="37.5"  />
                        </Button>
                        </OverlayTrigger>
                        <OverlayTrigger overlay={<Tooltip id="tooltip-researchgate">Google Scholar</Tooltip>}>
                        <Button variant="link" href="https://scholar.google.com/citations?user=dug8UQQAAAAJ&hl=en" target="_blank">
                            <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Google_Scholar_logo.svg/1024px-Google_Scholar_logo.svg.png" width="37.5" height="37.5"  />
                        </Button>
                        </OverlayTrigger>
                        <OverlayTrigger overlay={<Tooltip id="tooltip-email">Email</Tooltip>}>
                        <Button variant="link" href="mailto:waris.dam@student.mahidol.ac.th">
                            <Image src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/112-gmail_email_mail-512.png" width="37.5" height="37.5"  />
                        </Button>
                        </OverlayTrigger>
                        <OverlayTrigger overlay={<Tooltip id="tooltip-resume">Instagram</Tooltip>}>
                        <Button variant="link" href="https://www.instagram.com/waaris_m/" target="_blank">
                            <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png" width="37.5" height="37.5"  />
                        </Button>
                        </OverlayTrigger>
                        <OverlayTrigger overlay={<Tooltip id="tooltip-resume">Credly</Tooltip>}>
                        <Button variant="link" href="https://www.credly.com/users/waris-damkham.196ff471" target="_blank">
                            <Image src="https://www.svgrepo.com/show/331358/credly.svg" width="37.5" height="37.5"  />
                        </Button>
                        </OverlayTrigger>
                    </div>
                    </Col>
                </Row>
                </Card.Body>
            </Card>
            </section>
            <section id="experience" className="my-4">
                <h1 className="mb-4 text-center">Experience</h1>
                <Card className="mb-3 border-0 shadow-sm experience-card">
                    <Card.Header className="bg-white border-0">
                    </Card.Header>
                    <Card.Body>
                        <Row className="align-items-center">
                            <Col xs={2} className="d-flex justify-content-center">
                                <img src="./images/tu.jpeg" alt="Company Logo" width="130" height="130" className="rounded-circle" />
                            </Col>
                            <Col xs={10}>
                                <Card.Title className="mb-2">Detecting Vulnerable OAuth 2.0 Implementations in Android Applications</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Ritsumeikan University · Internship</Card.Subtitle>
                                <Card.Subtitle className="mb-2 text-muted">May 2023 - Present · 3 mos</Card.Subtitle>
                                <Card.Subtitle className="mb-2 text-muted">Shiga, Japan · On-site</Card.Subtitle>
                                {/* <Card.Link
                                    href="https://example.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="custom-link"
                                >
                                    Certification
                                </Card.Link>
                                <Card.Link
                                    href="https://example.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="custom-link"
                                >
                                    Conference Paper
                                </Card.Link> */}
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
                <Card className="mb-3 border-0 shadow-sm experience-card">
                    <Card.Body>
                        <Row className="align-items-center">
                            <Col xs={2} className="d-flex justify-content-center">
                                <img src="./images/tu1.png" alt="Company Logo" width="130" height="130" />
                            </Col>
                            <Col xs={10}>
                                <Card.Title className="mb-2">Automated COVID-19 Screening Framework Using Deep CNN With Chest X-Ray Medical Images</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">National Central University · Internship</Card.Subtitle>
                                <Card.Subtitle className="mb-2 text-muted">Jun 2022 - Jul 2022 · 2 mos</Card.Subtitle>
                                <Card.Subtitle className="mb-2 text-muted">Taoyuan City, Taiwan · Remote</Card.Subtitle>
                                <Card.Link
                                    href="https://drive.google.com/file/d/1GBeDLI70EY6kvufrNtHE81PWJt6amXk8/view"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="custom-link"
                                >
                                    Certification
                                </Card.Link>
                                <Card.Link
                                    href="https://ieeexplore.ieee.org/document/10067528"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="custom-link"
                                >
                                    Conference Paper
                                </Card.Link>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </section>
            <section id="education" className="my-4">
            <h1 className="mb-4 text-center">Education</h1>
            <Card className="mb-3 border-0 shadow-sm about-card">
                <Card.Body>
                    <Row className="align-items-center">
                        <Col xs={2} className="d-flex justify-content-center">
                            <img src="./images/Mahidol_U.png" alt="Company Logo" width="130" height="130" className="rounded-circle" />
                        </Col>
                        <Col xs={10}>
                            <Card.Title className="mb-2">Mahidol University</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Bachelor of Science - BS</Card.Subtitle>
                            <Card.Subtitle className="mb-2 text-muted">Information and communication Tehnology</Card.Subtitle>
                            <Card.Subtitle className="mb-2 text-muted">Aug 2020 - May 2024</Card.Subtitle>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
            <Card className="mb-3 border-0 shadow-sm about-card">
                <Card.Body>
                    <Row className="align-items-center">
                        <Col xs={2} className="d-flex justify-content-center">
                            <img src="./images/bcc.png" alt="Company Logo" width="150" height="150"/>
                        </Col>
                        <Col xs={10}>
                            <Card.Title className="mb-2">Bangkok Christian College</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Smart Computer</Card.Subtitle>
                            <Card.Subtitle className="mb-2 text-muted">May 2008 - Feb 2020</Card.Subtitle>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
            </section>
            <section id="publications" className="my-4">
                <h1 className="mb-4 text-center">Publications</h1>
                <Card className="border-0 shadow-sm about-card">
                    <Card.Body>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                            <a href="https://ieeexplore.ieee.org/document/10067528" target="_blank" rel="noopener noreferrer" className="linkStyle">
                                <h5>
                                    Automated COVID-19 Screening Framework Using Deep CNN With Chest X-Ray Medical Images
                                </h5>
                            </a>
                            <p>An automated COVID-19 screening framework using chest X-ray images is proposed in this study. It leverages artificial intelligence techniques and transfer learning for accurate diagnosis. The framework extracts features using transfer learning and applies modified deep neural networks. Grad-CAM visualization supports the predicted diagnosis. Experimental results demonstrate superior performance compared to other deep learning techniques. This framework has the potential to aid in early COVID-19 diagnosis and alleviate the burden on radiologists.</p>
                            <Card.Subtitle className="mb-2 text-muted">IEEE · Nov 11, 2022</Card.Subtitle>
                           </ListGroup.Item>
                            {/* <ListGroup.Item>
                                <h5>Title of Publication 2</h5>
                                <p>Description of Publication 2</p>
                            </ListGroup.Item> */}
                            {/* Add more ListGroup.Items for each publication */}
                        </ListGroup>
                    </Card.Body>
                </Card>
            </section>
            <section id="certifications" className="my-4">
            <h1 className="mb-4 text-center">Certifications</h1>
            <Card className="mb-3 border-0 shadow-sm about-card">
                <Card.Header className="bg-white border-0">
                </Card.Header>
                <Card.Body>
                    <Row>
                        <Col sm={6} md={4} lg={3} className="mb-4">
                            <Card className="border-0 shadow-sm experience-card">
                                <Card.Img variant="top" src="./images/ce1.png" />
                                <Card.Body>
                                    <Card.Title>Applied Cryptography Specialization</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Coursera - June 2023</Card.Subtitle>
                                    <Card.Link
                                        href="https://www.coursera.org/account/accomplishments/specialization/certificate/59D4PJPG3KLQ"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="custom-link"
                                    >
                                    Show Credential
                                </Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={6} md={4} lg={3} className="mb-4">
                            <Card className="border-0 shadow-sm experience-card">
                                <Card.Img variant="top" src="./images/ce2.png" />
                                <Card.Body>
                                    <Card.Title>Software Engineering Specialization</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Coursera - June 2023</Card.Subtitle>
                                    <Card.Link
                                        href="https://www.coursera.org/account/accomplishments/specialization/certificate/PDGPEHC4SNX4"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="custom-link"
                                    >
                                    Show Credential
                                </Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={6} md={4} lg={3} className="mb-4">
                            <Card className="border-0 shadow-sm experience-card">
                                <Card.Img variant="top" src="./images/ce3.png" />
                                <Card.Body>
                                    <Card.Title>Google Cybersecurity Specialization</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Coursera - June 2023</Card.Subtitle>
                                    <Card.Link
                                        href="https://www.coursera.org/account/accomplishments/specialization/certificate/MFYGQ8CZRTE3"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="custom-link"
                                    >
                                    Show Credential
                                </Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={6} md={4} lg={3} className="mb-4">
                            <Card className="border-0 shadow-sm experience-card">
                                <Card.Img variant="top" src="./images/ce4.png" />
                                <Card.Body>
                                    <Card.Title>Python for Cybersecurity Specialization</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Coursera - June 2023</Card.Subtitle>
                                    <Card.Link
                                        href="https://www.coursera.org/account/accomplishments/specialization/certificate/7HMJARZ6B9F7"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="custom-link"
                                    >
                                    Show Credential
                                </Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={6} md={4} lg={3} className="mb-4">
                            <Card className="border-0 shadow-sm experience-card">
                                <Card.Img variant="top" src="./images/ce5.png" />
                                <Card.Body>
                                    <Card.Title>Introduction to Dark Web Operations</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Security Blue Team - June 2023</Card.Subtitle>
                                    <Card.Link
                                        href="https://elearning.securityblue.team/home/certificate/613442646"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="custom-link"
                                    >
                                    Show Credential
                                </Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={6} md={4} lg={3} className="mb-4">
                            <Card className="border-0 shadow-sm experience-card">
                                <Card.Img variant="top" src="./images/ce6.png" />
                                <Card.Body>
                                    <Card.Title>Command Line Basics in Linux</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Coursera - June 2023</Card.Subtitle>
                                    <Card.Link
                                        href="https://www.coursera.org/account/accomplishments/certificate/Q2CFD25FXZXU"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="custom-link"
                                    >
                                    Show Credential
                                </Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={6} md={4} lg={3} className="mb-4">
                            <Card className="border-0 shadow-sm experience-card">
                                <Card.Img variant="top" src="https://media.licdn.com/dms/image/D5622AQERUsKWarIeSg/feedshare-shrink_1280/0/1686559587345?e=1691625600&v=beta&t=vcmbaH3woWdJzohwmFk3OSBuIes-sFYAgOaSzo2s4fQ" />
                                <Card.Body>
                                    <Card.Title>Learning Tor and the Dark Web</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">LinkedIn - June 2023</Card.Subtitle>
                                    <Card.Link
                                        href="https://www.linkedin.com/learning/certificates/3bbe2756f9b737e24d3b90d185b61b827aea10dc34e1c55fd2f8ecf4a7ab4a0d"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="custom-link"
                                    >
                                    Show Credential
                                </Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={6} md={4} lg={3} className="mb-4">
                            <Card className="border-0 shadow-sm experience-card">
                                <Card.Img variant="top" src="./images/ce8.png" />
                                <Card.Body>
                                    <Card.Title>Cybersecurity for Businesses - The Fundamental Edition</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">EC-Council Learning - May 2023</Card.Subtitle>
                                    <Card.Link
                                        href="https://codered.eccouncil.org/certificate/6976bf06-9d05-45f8-880d-8289df80f0f1?logged=true"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="custom-link"
                                    >
                                    Show Credential
                                </Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={6} md={4} lg={3} className="mb-4">
                            <Card className="border-0 shadow-sm experience-card">
                                <Card.Img variant="top" src="https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-YBUQYLZ1YW.png" />
                                <Card.Body>
                                    <Card.Title>Introduction to Cyber Security</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">TryHackMe - May 2023</Card.Subtitle>
                                    <Card.Link
                                        href="https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-YBUQYLZ1YW.png"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="custom-link"
                                    >
                                    Show Credential
                                </Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={6} md={4} lg={3} className="mb-4">
                            <Card className="border-0 shadow-sm experience-card">
                                <Card.Img variant="top" src="./images/ce10.png" />
                                <Card.Body>
                                    <Card.Title>Certificate of Participation in Codegoda 2023</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Unstop - May 2023</Card.Subtitle>
                                    <Card.Link
                                        href="https://unstop.com/certificate-preview/d0deee19-9a61-4ec0-92d2-00a44d089912?utm_campaign=site-emails"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="custom-link"
                                    >
                                    Show Credential
                                </Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={6} md={4} lg={3} className="mb-4">
                            <Card className="border-0 shadow-sm experience-card">
                                <Card.Img variant="top" src="./images/ce11.png" />
                                <Card.Body>
                                    <Card.Title>Cybersecurity Pathway</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Cisco - April 2023</Card.Subtitle>
                                    <Card.Link
                                        href="https://www.credly.com/badges/bf1bce85-beb9-4421-a727-727ae8f771c4/linked_in_profile"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="custom-link"
                                    >
                                    Show Credential
                                </Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={6} md={4} lg={3} className="mb-4">
                            <Card className="border-0 shadow-sm experience-card">
                                <Card.Img variant="top" src="./images/ce12.png" />
                                <Card.Body>
                                    <Card.Title>รู้ทันอาชญากรรมไซเบอร์ Ethical Hacking Penetration Testing</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">FutureSkill - March 2023</Card.Subtitle>
                                    <Card.Link
                                        href="https://drive.google.com/file/d/1GrCT7cH7esTrcMIeYuBbVZ5HVxe4fr6i/view?usp=share_link"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="custom-link"
                                    >
                                    Show Credential
                                </Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={6} md={4} lg={3} className="mb-4">
                            <Card className="border-0 shadow-sm experience-card">
                                <Card.Img variant="top" src="https://media.licdn.com/dms/image/C561FAQFht4FSdhMWKQ/feedshare-document-cover-images_1280/0/1677209798344?e=1689588000&v=beta&t=85EW7pcsV_JVyNYJG-l9C4_5XpPOY54rJ1M4182v6IA" />
                                <Card.Body>
                                    <Card.Title>Cybersecurity Foundations: Security Architecture</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">LinkedIn - Feb 2023</Card.Subtitle>
                                    <Card.Link
                                        href="https://www.linkedin.com/learning/certificates/3d1a74cfb9acbc68a463064d5a3ab71e832290913f77d00086b8c5a5be486049?u=91782594"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="custom-link"
                                    >
                                    Show Credential
                                </Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={6} md={4} lg={3} className="mb-4">
                            <Card className="border-0 shadow-sm experience-card">
                                <Card.Img variant="top" src="https://eccommonstorage.blob.core.windows.net/codered/certificates/ea4dfaf8-ebf7-48b1-a511-69c80be529bf.png" />
                                <Card.Body>
                                    <Card.Title>Introduction to Dark Web, Anonymity, and Cryptocurrency</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">EC-Council Learning - Feb 2023</Card.Subtitle>
                                    <Card.Link
                                        href="https://codered.eccouncil.org/certificate/ea4dfaf8-ebf7-48b1-a511-69c80be529bf?logged=true"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="custom-link"
                                    >
                                    Show Credential
                                </Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={6} md={4} lg={3} className="mb-4">
                            <Card className="border-0 shadow-sm experience-card">
                                <Card.Img variant="top" src="./images/ce15.png" />
                                <Card.Body>
                                    <Card.Title>AWS Academy Graduate - AWS Academy Cloud Foundations</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Amazon Web Services - Nov 2022</Card.Subtitle>
                                    <Card.Link
                                        href="https://www.credly.com/badges/bee5a187-4758-436f-a321-88a3f0ad0c25/linked_in_profile"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="custom-link"
                                    >
                                    Show Credential
                                </Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={6} md={4} lg={3} className="mb-4">
                            <Card className="border-0 shadow-sm experience-card">
                                <Card.Img variant="top" src="./images/ce16.png" />
                                <Card.Body>
                                    <Card.Title>Certificate of Completion National Central University</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">National Central University - July 2022</Card.Subtitle>
                                    <Card.Link
                                        href="https://drive.google.com/file/d/1GBeDLI70EY6kvufrNtHE81PWJt6amXk8/view?usp=drivesdk"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="custom-link"
                                    >
                                    Show Credential
                                </Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
            </section>
            <section id="projects" className="my-4">
                <Card className="border-0 shadow-sm about-card">
                    <Card.Body>
                        <Card.Title><h2>Projects</h2></Card.Title>
                        <Card.Text>
                            Projects content goes here
                        </Card.Text>
                    </Card.Body>
                </Card>
            </section>
        </Container>
    );
}

export default Portfolio;
