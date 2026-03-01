import React, { useState } from 'react';
import { Card, Row, Col, Image, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import '../App.css';

const About = () => {
    const [profileImage, setProfileImage] = useState("./images/waris-2026.jpg");
    const [showAllBadges, setShowAllBadges] = useState(false);
    const badges = [
        { img: "https://api.accredible.com/v1/frontend/credential_website_embed_image/badge/163229512", href: "https://credentials.offsec.com/3662edd7-f74b-4afc-89be-6343e301ac16#acc.z5HkIjF6", alt: "OffSec Certified Professional+ (OSCP+)" },
        { img: "https://api.accredible.com/v1/frontend/credential_website_embed_image/badge/163229530", href: "https://credentials.offsec.com/f4a60a23-7c81-4c93-83da-68059488a45a#acc.RfhgV7DF", alt: "OffSec Certified Professional (OSCP)" },
        { img: "https://images.credly.com/size/680x680/images/e63aa507-b974-4e67-bae6-1e425f6e2a99/image.png", href: "https://www.credly.com/badges/ddd8940f-ad73-4221-9f5d-bdaf51ed1e2a/public_url", alt: "Hack The Box Certified Penetration Testing Specialist" },
        { img: "https://images.credly.com/size/340x340/images/46525b6b-c65b-45b4-ae45-420dba5af307/blob", href: "https://www.credly.com/badges/36af3daf-dac7-4b20-a1da-96da19bb1822/public_url", alt: "Hack The Box Certified Web Exploitation Specialist" },
        { img: "https://images.credly.com/size/680x680/images/95043c37-e916-4e4e-96ab-06fb66056648/blob", href: "https://www.credly.com/badges/37645b13-29ce-4f11-898b-2ca933d3e603/public_url", alt: "HTB Certified Junior Cybersecurity Associate" },
        { img: "/badges/crtpimg.png", href: "https://www.credential.net/3f3ce36c-11f4-460f-b1f0-206a537d9629#acc.eQDPI2nG", alt: "Certified Red Team Professional" },
        { img: "/badges/burp-suite-certified-color-large.png", href: "https://portswigger.net/web-security/e/c/2a628f7fb6d7dd35", alt: "Burp Suite Certified Practitioner" },
        { img: "https://api.accredible.com/v1/frontend/credential_website_embed_image/badge/135650894", href: "https://certs.ine.com/d9490b0e-88d0-4483-a7cc-aefc22ac8de6#acc.BFI2SUWM", alt: "Web Application Penetration Tester eXtreme" },
        { img: "https://api.accredible.com/v1/frontend/credential_website_embed_image/badge/134181811", href: "https://certified.tcm-sec.com/57766f22-43d0-4c28-873d-b7e9c02bb039#acc.Hd5EIsLo", alt: "Practical Network Penetration Tester" },
        { img: "https://api.accredible.com/v1/frontend/credential_website_embed_image/badge/124520643", href: "https://certified.tcm-sec.com/01b1a674-b38f-4bee-8d4c-cd45a5d60c4d#acc.e1WhmRPx", alt: "Practical Mobile Pentest Associate" },
        { img: "https://api.accredible.com/v1/frontend/credential_website_embed_image/badge/155081719", href: "https://certified.tcm-sec.com/e944ad55-2d3c-4af4-a11e-c56c9dfede4a", alt: "Practical SOC Analyst Associate" },
        { img: "https://images.credly.com/size/680x680/images/304d90d7-289f-4f09-81d6-b2fe9954bcc9/image.png", href: "https://www.credly.com/badges/1d423a7e-0997-43b2-9d9e-8e9cae169452/public_url", alt: "API Security Certified Professional" },
        { img: "/badges/apisec-certified-practitioner.png", href: "https://www.credly.com/badges/b6bf6410-d63c-4665-bab0-45c383638dc5/public_url", alt: "APIsec Certified Practitioner" },
        { img: "https://images.credly.com/size/340x340/images/54525e33-85d1-405c-a68c-1e4dd9c7f57f/blob", href: "https://assets.tryhackme.com/certification-certificate/6868034812c00e6f24504db3.pdf", alt: "Jr Penetration Tester (PT1)" },
        { img: "https://images.credly.com/size/340x340/images/47f94746-a150-4f91-abc1-733b68b95504/blob", href: "https://assets.tryhackme.com/certification-certificate/6988722dc6836467cbaece0f.pdf", alt: "Cyber Security 101 (SEC1)" },
        { img: "https://images.credly.com/size/340x340/images/44994cda-b5b0-44cb-9a6d-d29b57163073/image.png", href: "https://www.credly.com/badges/f5642804-65a0-44a0-bffb-cca96bf3c267/public_url", alt: "Cloud Digital Leader Certification" },
        { img: "/badges/GHF.png", href: "https://www.credly.com/badges/0a69a68f-97e3-4f7f-8069-9e101a895a11/public_url", alt: "GitHub Foundations" },
        { img: "/badges/cert-stamp-ckbpro.png", href: "/pdf/CKBPro", alt: "Certified Kiosk Breakout Professional (CKBPro)" },
        { img: "/badges/cert-stamp-c-apipen-pro.png", href: "/pdf/C-APIPen", alt: "Certified API Pentester (C-APIPen)" },
        { img: "/badges/cert-stamp-ccpenX-AWS.png", href: "/pdf/CCPenX-AWS", alt: "Certified Cloud Pentesting eXpert - AWS (CCPenX-AWS)" },
        { img: "/badges/MLPen.png", href: "/pdf/MLPen", alt: "Certified AI/ML Pentester (C-AI/MLPen)" },
        { img: "/badges/CMPen-IOS-no-bg.png", href: "/pdf/CMPen-IOS", alt: "Certified Mobile Pentester (CMPen-IOS)" },
        { img: "/badges/CMPen-Android-no-bg.png", href: "/pdf/CMPen-Android", alt: "Certified Mobile Pentester (CMPen-Android)" },
        { img: "/badges/cert-stamp-capenx-expert.png", href: "/pdf/CAPenX", alt: "Certified AppSec Pentesting eXpert (CAPenX)" },
        { img: "/badges/CNPen.png", href: "/pdf/CNPen", alt: "Certified Network Pentester (CNPen)" },
        { img: "/badges/CAPen.png", href: "/pdf/CAPen", alt: "Certified AppSec Pentester (CAPen)" },
        { img: "/badges/CAP.png", href: "/pdf/CAP", alt: "Certified AppSec Practitioner (CAP)" },
        { img: "/badges/CRTA.png", href: "https://www.credential.net/bfcd9773-ad19-4fdc-b17a-b7dfde8bc57f", alt: "Certified Red Team Analyst" },
        { img: "/badges/CRT-ID.png", href: "https://www.credential.net/b8740539-da8e-4efb-ae8f-9ed63a23b797", alt: "Certified Red Team Infra Developer" },
        { img: "/badges/MCRTA.png", href: "https://labs.cyberwarfare.live/badge/image/66fcc85def7753022c5b197c", alt: "Multi-Cloud Red Team Analyst" },
        { img: "https://www.knightsquad.academy/cert_badges/kaipta.png", href: "https://credential.knightsquad.academy/KSA-RRJ4SZC20103", alt: "Certified AI Penetration Testing Associate (kAIPTA)" },
        { img: "/badges/kwapta.png", href: "https://credential.knightsquad.academy/KSA-UGSEKSEJ2501", alt: "Certified Web App Penetration Testing Apprentice (kWAPTA)" },
        { img: "https://images.credly.com/images/baeafd89-d904-486c-8e0d-fa96ee54bc5e/blob", href: "https://www.credly.com/badges/e7800d53-ea5c-4a52-9c46-86ebbe24438a/public_url", alt: "Basic Web Application Security Badge" },
        { img: "https://images.credly.com/images/47182d88-d788-4833-8190-8264cffad5ba/blob", href: "https://www.credly.com/badges/87a7a7a1-2334-479c-8273-b47ca7de4376/public_url", alt: "Basic SOC Badge" },
        { img: "https://images.credly.com/images/1933e6dc-5c14-45d6-81c4-88bd35905dcc/blob", href: "https://www.credly.com/badges/4cddf94e-bbdb-4ce7-896e-8ae6e646f7de/public_url", alt: "SOC Tier 1 Badge" },
        { img: "/badges/CCEP_Badges.png", href: "https://courses.redteamleaders.com/exam-completion/4513c17c1105b18f", alt: "Certified Cybersecurity Educator Professional (CCEP)" },
        { img: "/badges/CCPC.png", href: "https://courses.redteamleaders.com/exam-completion/c60d69557264702f", alt: "Certified C++ Practitioner Certification (CCPC)" },   
        { img: "/badges/postman.png", href: "https://api.badgr.io/public/assertions/sL8IL9nPS2qshJh-4wC9Yg", alt: "Postman API Fundamentals Student Expert" },
        { img: "/badges/GOF.png", href: "https://www.credly.com/badges/430663a6-c10c-4b34-a560-99ea63438526/public_url", alt: "GitOps Fundamentals" },
        { img: "/badges/CTI101.png", href: "https://arcx.io/verify-certificate?id=d18c61a1898aab1484fa4cf22b63dffaf977bb35&k=020c2c031517435fb4b46e1e4052c4d7", alt: "Cyber Threat Intelligence 101" },
        { img: "/badges/google-it-support-certificate-2023.png", href: "https://www.credly.com/badges/7b17681b-e48b-4be2-8d57-dc11eefff877/public_url", alt: "Google IT Support Certificate" },
        { img: "/badges/meta-full-stack-engineer-certificate.png", href: "https://www.credly.com/badges/efa300dd-1b22-4f53-ba81-fd2fa458e7fb/public_url", alt: "Meta Full-Stack Engineer Certificate" },
        { img: "/badges/open-source-software-development-linux-and-git-specialization.png", href: "https://www.credly.com/badges/530e5cac-2274-4de1-b565-786cfcda9e6c/public_url", alt: "Open Source Software Development, Linux and Git Specialization" },
        { img: "/badges/google-cybersecurity-certificate.png", href: "https://www.credly.com/badges/5112f234-9d17-4de3-b154-b4468e916dde/public_url", alt: "Google Cybersecurity Certificate" },
        { img: "/badges/aws-academy-graduate-aws-academy-cloud-foundations.png", href: "https://www.credly.com/badges/bee5a187-4758-436f-a321-88a3f0ad0c25/public_url", alt: "AWS Academy Graduate - AWS Academy Cloud Foundations" },
    ];

    return (
        <section id="about" className="my-5">
            <Card className="border-0 shadow-sm about-card mb-4">
                <Card.Body>
                <Row>
                    <Col xs={12} md={4} className="mb-3">
                        <Image 
                            src={profileImage} 
                            alt="Portrait of Waris Damkham"
                            onMouseEnter={() => setProfileImage("./images/cat.jpg")} 
                            onMouseLeave={() => setProfileImage("./images/waris-2026.jpg")}
                            roundedCircle 
                            fluid 
                            className="profile-image" 
                        />
                    </Col>
                    <Col xs={12} md={8}>
                        <Card.Title><h2 className='title'>About Me</h2></Card.Title>
                        <Card.Text>
                            I am an <strong>Offensive Security Engineer</strong> and <strong>AI Security Engineer</strong> with hands-on experience across enterprise penetration testing and applied AI and security research.

                            I deliver end-to-end assessments across <strong>Web, API, Mobile, and Network</strong> environments, and contribute to <strong>Red Team operations</strong> focused on real-world attack scenarios, identity abuse, and security posture improvement. My work also includes <strong>security automation</strong>, critical vulnerability response support, and <strong>AI security readiness</strong> for AI-enabled applications.

                            I conduct applied identity and access security work on <strong>Microsoft 365 Conditional Access</strong> policy enforcement, with tooling selected for <strong>Black Hat Asia 2026 (Arsenal)</strong>.

                            Open to global opportunities in Red Teaming, Identity Security, and AI Security.
                        </Card.Text>
                        <div className="d-flex mt-3 icon-section">
                            <OverlayTrigger overlay={<Tooltip id="tooltip-linkedin">LinkedIn</Tooltip>}>
                                <Button variant="link" href="https://www.linkedin.com/in/waris-damkham/" target="_blank" rel="noopener noreferrer">
                                    <Image alt="LinkedIn" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/800px-LinkedIn_logo_initials.png" width="37.5" height="37.5" />
                                </Button>
                            </OverlayTrigger>

                            <OverlayTrigger overlay={<Tooltip id="tooltip-github">GitHub</Tooltip>}>
                                <Button variant="link" href="https://github.com/Waariss" target="_blank" rel="noopener noreferrer">
                                    <Image alt="GitHub" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" width="37.5" height="37.5" />
                                </Button>
                            </OverlayTrigger>

                            <OverlayTrigger overlay={<Tooltip id="tooltip-researchgate">ResearchGate</Tooltip>}>
                                <Button variant="link" href="https://www.researchgate.net/profile/Waris-Damkham" target="_blank" rel="noopener noreferrer">
                                    <Image alt="ResearchGate" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/ResearchGate_icon_SVG.svg/1200px-ResearchGate_icon_SVG.svg.png" width="37.5" height="37.5" />
                                </Button>
                            </OverlayTrigger>

                            <OverlayTrigger overlay={<Tooltip id="tooltip-google-scholar">Google Scholar</Tooltip>}>
                                <Button variant="link" href="https://scholar.google.com/citations?user=dug8UQQAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">
                                    <Image alt="Google Scholar" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Google_Scholar_logo.svg/1024px-Google_Scholar_logo.svg.png" width="37.5" height="37.5" />
                                </Button>
                            </OverlayTrigger>

                            <OverlayTrigger overlay={<Tooltip id="tooltip-email">Email</Tooltip>}>
                                <Button variant="link" href="mailto:waris.dam@student.mahidol.ac.th">
                                    <Image alt="Email" src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/112-gmail_email_mail-512.png" width="37.5" height="37.5" />
                                </Button>
                            </OverlayTrigger>

                            <OverlayTrigger overlay={<Tooltip id="tooltip-credly">Credly</Tooltip>}>
                                <Button variant="link" href="https://www.credly.com/users/waris-damkham.196ff471" target="_blank" rel="noopener noreferrer">
                                    <Image alt="Credly" src="https://www.svgrepo.com/show/331358/credly.svg" width="37.5" height="37.5" />
                                </Button>
                            </OverlayTrigger>
                            <OverlayTrigger overlay={<Tooltip id="tooltip-tryhackme">TryHackMe</Tooltip>}>
                                <Button variant="link" href="https://tryhackme.com/p/waris.dam" target="_blank" rel="noopener noreferrer">
                                    <Image src="https://tryhackme.com/img/favicon.png" alt="TryHackMe" width="37.5" height="37.5"/>
                                </Button>
                            </OverlayTrigger>
                            <OverlayTrigger overlay={<Tooltip id="tooltip-hackthebox">HackTheBox</Tooltip>}>
                                <Button variant="link" href="https://app.hackthebox.com/profile/1458142" target="_blank" rel="noopener noreferrer">
                                    <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjDzxlNL92ntRTBI1IUwhxyAj7Ybk1mkW5AA&s" alt="HackTheBox" width="37.5" height="37.5"/>
                                </Button>
                            </OverlayTrigger>
                            <OverlayTrigger overlay={<Tooltip id="tooltip-credential">Credential.Net</Tooltip>}>
                                <Button variant="link" href="https://www.credential.net/profile/waarism/wallet#gs.ibia2y" target="_blank" rel="noopener noreferrer">
                                    <Image src="https://static.otta.com/uploads/images/company-favicons/3150-rwF6APJuwGu69IaKYJr_KQEdI3OnfZ3vlKo0bdD9vKQ.png" alt="Credential.Net" width="37.5" height="37.5"/>
                                </Button>
                            </OverlayTrigger>
                            <OverlayTrigger overlay={<Tooltip id="tooltip-credential">Medium</Tooltip>}>
                                <Button variant="link" href="https://medium.com/@waaris_m" target="_blank" rel="noopener noreferrer">
                                    <Image src="https://cdn4.iconfinder.com/data/icons/social-media-2210/24/Medium-1024.png" alt="Medium" width="37.5" height="37.5"/>
                                </Button>
                            </OverlayTrigger>
                        </div>
                    </Col>
                </Row>
                </Card.Body>
            </Card>
            
            <Card className="border-0 shadow-sm mt-4">
                <Card.Body>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <h4 className="mb-0">Highlighted Certifications</h4>
                        <Button 
                            variant="outline-primary" 
                            size="sm"
                            onClick={() => setShowAllBadges(!showAllBadges)}
                            aria-expanded={showAllBadges}
                            className="cert-toggle-btn"
                        >
                            {showAllBadges ? 'Hide' : 'Show all certifications'}
                        </Button>
                    </div>
                    
                    <div className="badge-section d-flex flex-wrap justify-content-center align-items-center">
                        {badges.slice(0, showAllBadges ? badges.length : 17).map((badge) => (
                            <div key={badge.href} className="badge-item mx-2 my-2">
                                <OverlayTrigger
                                    overlay={<Tooltip id={`tooltip-${badge.alt.replace(/[^a-zA-Z0-9]+/g, '-').toLowerCase()}`}>{badge.alt}</Tooltip>}
                                    placement="top"
                                >
                                    <a href={badge.href} target="_blank" rel="noopener noreferrer" aria-label={badge.alt}>
                                        <Image 
                                            src={badge.img} 
                                            width="98" 
                                            height="98" 
                                            alt={badge.alt}
                                            loading="lazy"
                                        />
                                    </a>
                                </OverlayTrigger>
                            </div>
                        ))}
                    </div>
                </Card.Body>
            </Card>
        </section>
    );
};

export default About;
