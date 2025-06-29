import React, { useState } from 'react';
import { Card, Row, Col, Image, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import '../App.css';

const About = () => {
    const [profileImage, setProfileImage] = useState("./images/cat.jpg");
    const badgeImages = [

        "https://api.accredible.com/v1/frontend/credential_website_embed_image/badge/134181811",
        "https://api.accredible.com/v1/frontend/credential_website_embed_image/badge/124520643",
        "https://api.accredible.com/v1/frontend/credential_website_embed_image/badge/135650894",
        "/badges/crtpimg.png",
        "https://images.credly.com/size/680x680/images/e63aa507-b974-4e67-bae6-1e425f6e2a99/image.png",
        "/badges/CBBH_2.png",
        "/badges/burp-suite-certified-color-large.png",
        "https://images.credly.com/size/680x680/images/304d90d7-289f-4f09-81d6-b2fe9954bcc9/image.png",
        "/badges/apisec-certified-practitioner.png",
        "/badges/GHF.png",
        "https://images.credly.com/size/340x340/images/44994cda-b5b0-44cb-9a6d-d29b57163073/image.png",
        "/badges/cert-stamp-c-apipen-pro.png",
        "/badges/cert-stamp-ccpenX-AWS.png",
        "/badges/MLPen.png",
        "/badges/CMPen-IOS-no-bg.png",
        "/badges/CMPen-Android-no-bg.png",
        "/badges/cert-stamp-capenx-expert.png",
        "/badges/CNPen.png",
        "/badges/CAPen.png",
        "/badges/CAP.png",
        "/badges/CRTA.png",
        "/badges/CRT-ID.png",
        "/badges/MCRTA.png",
        "https://images.credly.com/images/baeafd89-d904-486c-8e0d-fa96ee54bc5e/blob",
        "/badges/postman.png",
        "/badges/GOF.png",
        "/badges/CTI101.png",
        // "/badges/english-for-it-2.png",
        //"/badges/english-for-it-1.png",
        "/badges/google-it-support-certificate-2023.png",
        "/badges/meta-full-stack-engineer-certificate.png",
        // "/badges/meta-front-end-developer-certificate.png",
        // "/badges/meta-back-end-developer-certificate.png",
        "/badges/open-source-software-development-linux-and-git-specialization.png",
        "/badges/google-cybersecurity-certificate.png",
        "/badges/aws-academy-graduate-aws-academy-cloud-foundations.png",
    ];

    const badgeLinks = [
        "https://certified.tcm-sec.com/57766f22-43d0-4c28-873d-b7e9c02bb039#acc.Hd5EIsLo",
        "https://certified.tcm-sec.com/01b1a674-b38f-4bee-8d4c-cd45a5d60c4d#acc.e1WhmRPx",
        "https://certs.ine.com/d9490b0e-88d0-4483-a7cc-aefc22ac8de6#acc.BFI2SUWM",
        "https://www.credential.net/3f3ce36c-11f4-460f-b1f0-206a537d9629#acc.eQDPI2nG",
        "https://www.credly.com/badges/ddd8940f-ad73-4221-9f5d-bdaf51ed1e2a/public_url",
        "https://www.credly.com/badges/36af3daf-dac7-4b20-a1da-96da19bb1822/public_url",
        "https://portswigger.net/web-security/e/c/2a628f7fb6d7dd35",
        "https://www.credly.com/badges/1d423a7e-0997-43b2-9d9e-8e9cae169452/public_url",
        "https://www.credly.com/badges/b6bf6410-d63c-4665-bab0-45c383638dc5/public_url",
        "https://www.credly.com/badges/0a69a68f-97e3-4f7f-8069-9e101a895a11/public_url",
        "https://www.credly.com/badges/f5642804-65a0-44a0-bffb-cca96bf3c267/public_url",
        "https://waris-damkham.netlify.app/pdf/C-APIPen",
        "https://waris-damkham.netlify.app/pdf/CCPenX-AWS",
        "https://waris-damkham.netlify.app/pdf/MLPen",
        "https://waris-damkham.netlify.app/pdf/CMPen-IOS",
        "https://waris-damkham.netlify.app/pdf/CMPen-Android",
        "https://waris-damkham.netlify.app/pdf/CAPenX",
        "https://waris-damkham.netlify.app/pdf/CNPen",
        "https://waris-damkham.netlify.app/pdf/CAPen",
        "https://waris-damkham.netlify.app/pdf/CAP",
        "https://www.credential.net/bfcd9773-ad19-4fdc-b17a-b7dfde8bc57f",
        "https://www.credential.net/b8740539-da8e-4efb-ae8f-9ed63a23b797",
        "https://labs.cyberwarfare.live/badge/image/66fcc85def7753022c5b197c",
        "https://www.credly.com/badges/e7800d53-ea5c-4a52-9c46-86ebbe24438a/public_url",
        "https://api.badgr.io/public/assertions/sL8IL9nPS2qshJh-4wC9Yg",
        "https://www.credly.com/badges/430663a6-c10c-4b34-a560-99ea63438526/public_url",
        "https://arcx.io/verify-certificate?id=d18c61a1898aab1484fa4cf22b63dffaf977bb35&k=020c2c031517435fb4b46e1e4052c4d7",
        "https://www.credly.com/badges/7b17681b-e48b-4be2-8d57-dc11eefff877/public_url",
        "https://www.credly.com/badges/efa300dd-1b22-4f53-ba81-fd2fa458e7fb/public_url",
        // "https://www.credly.com/badges/e1d3c2d6-9607-4134-9377-ba4a0698ac8e/public_url",
        // "https://www.credly.com/badges/2bdbfa21-2c1e-48e9-926d-5b7a442de6df/public_url",
        // "https://www.credly.com/badges/759dbd4b-35d7-4147-b8c9-8e09bebd4753/public_url",
        // "https://www.credly.com/badges/122bf15c-e992-4017-883b-edb152f11dc0/public_url",
        "https://www.credly.com/badges/530e5cac-2274-4de1-b565-786cfcda9e6c/public_url",
        "https://www.credly.com/badges/5112f234-9d17-4de3-b154-b4468e916dde/public_url",
        "https://www.credly.com/badges/bee5a187-4758-436f-a321-88a3f0ad0c25/public_url",
    ];

    const badgeAlts = [
        "Practical Network Penetration Tester",
        "Practical Mobile Pentest Associate",
        "Web Application Penetration Tester eXtreme",
        "Certified Red Team Professional",
        "Hack The Box Certified Penetration Testing Specialist",
        "Hack The Box Certified Bug Bounty Hunter",
        "Burp Suite Certified Practitioner",
        "API Security Certified Professional",
        "APIsec Certified Practitioner",
        "GitHub Foundations",
        "Cloud Digital Leader Certification",
        "Certified API Pentester (C-APIPen)",
        "Certified Cloud Pentesting eXpert - AWS (CCPenX-AWS)",
        "Certified AI/ML Pentester (C-AI/MLPen)",
        "Certified Mobile Pentester (CMPen-IOS)",
        "Certified Mobile Pentester (CMPen-Android)",
        "Certified AppSec Pentesting eXpert (CAPenX)",
        "Certified Network Pentester (CNPen)",
        "Certified AppSec Pentester (CAPen)",
        "Certified AppSec Practitioner (CAP)",
        "Certified Red Team Analyst",
        "Certified Red Team Infra Developer",
        "Multi-Cloud Red Team Analyst",
        "Basic Web Application Security Badge",
        "Postman API Fundamentals Student Expert",
        "GitOps Fundamentals",
        "Cyber Threat Intelligence 101",
        // "English for IT 2",
        // "English for IT 1",
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
                            I am an <strong className="strong-highlight">Offensive Security Engineer</strong>, <strong className="strong-highlight">Penetration Tester</strong>, and <strong className="strong-highlight">AI Security Researcher</strong> with a strong passion for <strong className="strong-highlight">Linux</strong> 🐧, <strong className="strong-highlight">Cybersecurity</strong> 🔒, <strong className="strong-highlight">AI</strong> 🤖, and <strong className="strong-highlight">DevOps</strong> ⚙️. My expertise spans <strong className="strong-highlight">Offensive Security</strong>, <strong className="strong-highlight">AI-driven threat research</strong>, <strong className="strong-highlight">Web security</strong>, and <strong className="strong-highlight">Mobile security</strong>, with hands-on experience in penetration testing and security assessments.  

                            I have led significant research projects, including the development of an Automated COVID-19 Screening Framework Using Deep CNN With Chest X-Ray Medical Images, research on Detecting Vulnerable OAuth 2.0 Implementations in Android Applications, and the creation of Practical Mobile-Based Services for Identification of Chicken Diseases From Fecal Images. These projects have been presented at conferences and featured in publications.

                            I am actively seeking full-time opportunities where I can continue to grow, gain valuable industry insights, and contribute innovatively to a collaborative security research environment.
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