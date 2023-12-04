import React from 'react';
import { Card, Row, Col, Image, Button, OverlayTrigger, Tooltip} from 'react-bootstrap';
import '../App.css';

const About = () => {
    // useEffect(() => {
    //     const script = document.createElement('script');
    //     script.src = "//cdn.credly.com/assets/utilities/embed.js";
    //     script.async = true;
    //     document.body.appendChild(script);

    //     return () => {
    //         document.body.removeChild(script);
    //     };
    // }, []);

    // const badges = [
    //     "efa300dd-1b22-4f53-ba81-fd2fa458e7fb",
    //     "e1d3c2d6-9607-4134-9377-ba4a0698ac8e",
    //     "2bdbfa21-2c1e-48e9-926d-5b7a442de6df",
    //     "759dbd4b-35d7-4147-b8c9-8e09bebd4753",
    //     "122bf15c-e992-4017-883b-edb152f11dc0",
    //     "530e5cac-2274-4de1-b565-786cfcda9e6c",
    //     "5112f234-9d17-4de3-b154-b4468e916dde",
    //     "bf1bce85-beb9-4421-a727-727ae8f771c4",
    //     "bee5a187-4758-436f-a321-88a3f0ad0c25"
    // ];

    const badgeImages = [
        "/badges/english-for-it-2.png",
        "/badges/english-for-it-1.png",
        "/badges/google-it-support-certificate-2023.png",
        "/badges/meta-full-stack-engineer-certificate.png",
        "/badges/meta-front-end-developer-certificate.png",
        "/badges/meta-back-end-developer-certificate.png",
        "/badges/open-source-software-development-linux-and-git-specialization.png",
        "/badges/google-cybersecurity-certificate.png",
        "/badges/junior-cybersecurity-analyst-career-path.1.png",
        "/badges/aws-academy-graduate-aws-academy-cloud-foundations.png",
    ];

    const badgeLinks = [
        "https://www.credly.com/badges/7b17681b-e48b-4be2-8d57-dc11eefff877/public_url",
        "https://www.credly.com/badges/efa300dd-1b22-4f53-ba81-fd2fa458e7fb/public_url",
        "https://www.credly.com/badges/e1d3c2d6-9607-4134-9377-ba4a0698ac8e/public_url",
        "https://www.credly.com/badges/2bdbfa21-2c1e-48e9-926d-5b7a442de6df/public_url",
        "https://www.credly.com/badges/759dbd4b-35d7-4147-b8c9-8e09bebd4753/public_url",
        "https://www.credly.com/badges/122bf15c-e992-4017-883b-edb152f11dc0/public_url",
        "https://www.credly.com/badges/530e5cac-2274-4de1-b565-786cfcda9e6c/public_url",
        "https://www.credly.com/badges/5112f234-9d17-4de3-b154-b4468e916dde/public_url",
        "https://www.credly.com/badges/bf1bce85-beb9-4421-a727-727ae8f771c4/public_url",
        "https://www.credly.com/badges/bee5a187-4758-436f-a321-88a3f0ad0c25/public_url",
    ];

    const badgeAlts = [
        "English for IT 2",
        "English for IT 1",
        "Google IT Support Certificate",
        "Meta Full-Stack Engineer Certificate",
        "Meta Front-End Developer Certificate",
        "Meta Back-End Developer Certificate",
        "Open Source Software Development, Linux and Git Specialization",
        "Google Cybersecurity Certificate",
        "Junior Cybersecurity Analyst Career Path",
        "AWS Academy Graduate - AWS Academy Cloud Foundations",
    ];

    return (
        <section id="about" className="my-5">
            <Card className="border-0 shadow-sm about-card mb-4">
                <Card.Body>
                <Row>
                    <Col xs={12} md={4} className="mb-3">
                        <Image src="./images/waris.JPG" roundedCircle fluid className="profile-image" />
                    </Col>
                    <Col xs={12} md={8}>
                        <Card.Title><h2 className='title'>About Me</h2></Card.Title>
                        <Card.Text>
                        I am a final-year software engineering student at Mahidol University with a keen interest in cybersecurity, AI, and DevOps, as part of my Information and Communication Technology (ICT) major. My experience includes leading significant projects that explored OAuth 2.0 vulnerabilities and developing an AI-based framework for COVID-19, which have led to presentations at conferences and published research. These academic pursuits have deepened my passion for utilizing technology to tackle complex challenges. As I actively seek internship or full-time opportunities, I am enthusiastic about applying my diverse ICT skills in practical settings and contributing to an innovative team. Committed to continuous professional growth, I aim to further enhance my skills, acquire valuable industry insights, and bring a dedicated spirit of innovation to a collaborative work environment.
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
                                    <Image src="https://cdn.icon-icons.com/icons2/3915/PNG/512/tryhackme_logo_icon_249349.png" alt="TryHackMe" width="37.5" height="37.5"/>
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
            {/* <Card.Body><Card.Body>
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
                    <div className="badge-section d-flex flex-wrap justify-content-center align-items-center">
                        {badges.map(badgeId => (
                            <div key={badgeId} className="badge-item mx-2 my-2">
                                <div
                                    data-iframe-width="120"
                                    data-iframe-height="120"
                                    data-share-badge-id={badgeId}
                                    data-share-badge-host="https://www.credly.com"
                                ></div>
                            </div>
                        ))}
                    </div>
                </Card.Body> */}
        </section>
    );
};

export default About;
