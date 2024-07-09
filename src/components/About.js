import React, { useState } from 'react';
import { Card, Row, Col, Image, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import '../App.css';

const About = () => {
    const [profileImage, setProfileImage] = useState("./images/cat.jpg");
    const badgeImages = [
        "/badges/CHHB_PATh.png",
        "/badges/cert-stamp-capenx-expert.png",
        "/badges/CNPen.png",
        "/badges/CAPen.png",
        "/badges/CAP.png",
        "/badges/english-for-it-2.png",
        "/badges/english-for-it-1.png",
        "/badges/google-it-support-certificate-2023.png",
        "/badges/meta-full-stack-engineer-certificate.png",
        // "/badges/meta-front-end-developer-certificate.png",
        // "/badges/meta-back-end-developer-certificate.png",
        "/badges/open-source-software-development-linux-and-git-specialization.png",
        "/badges/google-cybersecurity-certificate.png",
        "/badges/aws-academy-graduate-aws-academy-cloud-foundations.png",
    ];

    const badgeLinks = [
        "https://academy.hackthebox.com/achievement/badge/da8ea085-3e13-11ef-b18d-bea50ffe6cb4",
        "https://waris-damkham.netlify.app/pdf/CAPenX",
        "https://waris-damkham.netlify.app/pdf/CNPen",
        "https://waris-damkham.netlify.app/pdf/CAPen",
        "https://waris-damkham.netlify.app/pdf/CAP",
        "https://www.credly.com/badges/7b17681b-e48b-4be2-8d57-dc11eefff877/public_url",
        "https://www.credly.com/badges/efa300dd-1b22-4f53-ba81-fd2fa458e7fb/public_url",
        "https://www.credly.com/badges/e1d3c2d6-9607-4134-9377-ba4a0698ac8e/public_url",
        "https://www.credly.com/badges/2bdbfa21-2c1e-48e9-926d-5b7a442de6df/public_url",
        // "https://www.credly.com/badges/759dbd4b-35d7-4147-b8c9-8e09bebd4753/public_url",
        // "https://www.credly.com/badges/122bf15c-e992-4017-883b-edb152f11dc0/public_url",
        "https://www.credly.com/badges/530e5cac-2274-4de1-b565-786cfcda9e6c/public_url",
        "https://www.credly.com/badges/5112f234-9d17-4de3-b154-b4468e916dde/public_url",
        "https://www.credly.com/badges/bee5a187-4758-436f-a321-88a3f0ad0c25/public_url",
    ];

    const badgeAlts = [
        "HTB Bug Bounty Hunter Path",
        "Certified AppSec Pentesting eXpert (CAPenX)",
        "Certified Network Pentester (CNPen)",
        "Certified AppSec Pentester (CAPen)",
        "Certified AppSec Practitioner (CAP)",
        "English for IT 2",
        "English for IT 1",
        "Google IT Support Certificate",
        "Meta Full-Stack Engineer Certificate",
        // "Meta Front-End Developer Certificate",
        // "Meta Back-End Developer Certificate",
        "Open Source Software Development, Linux and Git Specialization",
        "Google Cybersecurity Certificate",
        "AWS Academy Graduate - AWS Academy Cloud Foundations",
    ];

    return (
        <section id="about" className="my-5">
            <Card className="border-0 shadow-sm about-card mb-4">
                <Card.Body>
                <Row>
                    <Col xs={12} md={4} className="mb-3">
                        <Image 
                            src={profileImage} 
                            onMouseEnter={() => setProfileImage("./images/cat.jpg")} 
                            onMouseLeave={() => setProfileImage("./images/waris.JPG")}
                            roundedCircle 
                            fluid 
                            className="profile-image" 
                        />
                    </Col>
                    <Col xs={12} md={8}>
                        <Card.Title><h2 className='title'>About Me</h2></Card.Title>
                        <Card.Text>
                            I am a graduated <strong className="strong-highlight">Software Engineering</strong> 🖥️ student from the Faculty of Information and Communication Technology(ICT) at Mahidol University. My academic pursuits are driven by a strong passion for <strong className="strong-highlight">Linux</strong> 🐧, <strong className="strong-highlight">Cybersecurity</strong> 🔒, <strong className="strong-highlight">Artificial Intelligence</strong> 🤖, and <strong className="strong-highlight">DevOps</strong> ⚙️. I have spearheaded significant projects, including an investigation into OAuth 2.0 vulnerabilities and the development of an AI-based framework to combat COVID-19, both of which have been presented at conferences and featured in publications. Additionally, I completed a Penetration Tester internship at KPMG Thailand 🇹🇭, which has significantly enhanced my practical cybersecurity skills. Eager to apply my diverse ICT skills in a dynamic professional setting, I am actively seeking full-time opportunities where I can continue to grow, gain valuable industry insights, and contribute innovatively to a collaborative work environment.
                        </Card.Text>
                        <div className="d-flex mt-3 icon-section">
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
                            <OverlayTrigger overlay={<Tooltip id="tooltip-tryhackme">TryHackMe</Tooltip>}>
                                <Button variant="link" href="https://tryhackme.com/p/waris.dam" target="_blank">
                                    <Image src="https://tryhackme.com/img/favicon.png" alt="TryHackMe" width="37.5" height="37.5"/>
                                </Button>
                            </OverlayTrigger>
                            <OverlayTrigger overlay={<Tooltip id="tooltip-hackthebox">HackTheBox</Tooltip>}>
                                <Button variant="link" href="https://app.hackthebox.com/profile/1458142" target="_blank">
                                    <Image src="https://static-00.iconduck.com/assets.00/hack-the-box-icon-512x512-pokr8xc5.png" alt="HackTheBox" width="37.5" height="37.5"/>
                                </Button>
                            </OverlayTrigger>
                        </div>
                    </Col>
                </Row>
                </Card.Body>
            </Card>
            <Card.Body>
                <div className="badge-section d-flex flex-wrap justify-content-center align-items-center">
                    {badgeImages.map((badgePath, index) => (
                        <div key={index} className="badge-item mx-2 my-2">
                            <OverlayTrigger
                                overlay={<Tooltip id={`tooltip-${index}`}>{badgeAlts[index]}</Tooltip>}
                                placement="top"
                            >
                                <a href={badgeLinks[index]} target="_blank" rel="noopener noreferrer">
                                    <Image src={badgePath} width="98" height="98" alt={badgeAlts[index]} />
                                </a>
                            </OverlayTrigger>
                        </div>
                    ))}
                </div>
            </Card.Body>
        </section>
    );
};

export default About;