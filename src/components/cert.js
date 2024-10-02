import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import '../App.css';
import Slider from 'react-slick';

const certificates = [
    {
        title: "Multi-Cloud Red Team Analyst",
        organization: "CyberWarFare",
        date: "Oct 2024",
        link: "/pdf/MCRTA",
        imageUrl: "./images/MCRTA.png"
    },
    {
        title: "Cyber Threat Intelligence 101",
        organization: "arcX",
        date: "Sep 2024",
        link: "/pdf/GTI101",
        imageUrl: "./images/Cyber_Threat_Intelligence_101.jpeg"
    },
    {
        title: "GitOps Fundamentals",
        organization: "Codefresh",
        date: "Sep 2024",
        link: "/pdf/GOF",
        imageUrl: "./images/gof.png"
    },
    {
        title: "GitHub Foundations",
        organization: "GitHub",
        date: "Sep 2024",
        link: "/pdf/GHF",
        imageUrl: "./images/ghf.png"
    },
    {
        title: "HTB Certified Bug Bounty Hunter",
        organization: "Hack The Box",
        date: "Aug 2024",
        link: "/pdf/CBBH",
        imageUrl: "./images/CBBH.png"
    },
    {
        title: "Certified Mobile Pentester (CMPen-Android)",
        organization: "The SecOps Group",
        date: "Aug 2024",
        link: "/pdf/CMPen-Android",
        imageUrl: "./images/CMPen-Android.pdf.png"
    },
    {
        title: "Certified AppSec Pentesting eXpert (CAPenX)",
        organization: "The SecOps Group",
        date: "Jul 2024",
        link: "/pdf/CAPenX",
        imageUrl: "./images/CApenX.png"
    },
    {
        title: "Certified Network Pentester (CNPen)",
        organization: "The SecOps Group",
        date: "Apr 2024",
        link: "/pdf/CNPen",
        imageUrl: "./images/CNpen.png"
    },
    {
        title: "Certified AppSec Pentester (CAPen)",
        organization: "The SecOps Group",
        date: "Apr 2024",
        link: "/pdf/CAPen",
        imageUrl: "./images/CApen.png"
    },
    {
        title: "Certified AppSec Practitioner (CAP)",
        organization: "The SecOps Group",
        date: "Feb 2024",
        link: "/pdf/CAP",
        imageUrl: "./images/cap.png"
    },
    {
        title: "English for IT 2",
        organization: "Cisco",
        date: "Dec 2023",
        link: "https://www.credly.com/badges/7b17681b-e48b-4be2-8d57-dc11eefff877/public_url",
        imageUrl: "./images/Eng2.png"
    },
    {
        title: "English for IT 1",
        organization: "Cisco",
        date: "Dec 2023",
        link: "https://www.credly.com/badges/efa300dd-1b22-4f53-ba81-fd2fa458e7fb/public_url",
        imageUrl: "./images/Eng1.png"
    },
    {
        title: "Google IT Support Specialization",
        organization: "Coursera",
        date: "Dec 2023",
        link: "https://www.coursera.org/account/accomplishments/specialization/certificate/NJD5UEURVU7Q",
        imageUrl: "./images/IT_Support.png"
    },
    {
        title: "Meta Front-End Developer Specialization",
        organization: "Coursera",
        date: "Oct 2023",
        link: "https://www.coursera.org/account/accomplishments/specialization/certificate/GZTNV9E6SNFG",
        imageUrl: "./images/Meta_front.png"
    },
    {
        title: "Meta Back-End Developer Specialization",
        organization: "Coursera",
        date: "Sep 2023",
        link: "https://www.coursera.org/account/accomplishments/specialization/certificate/GRJ6ERUW2NVY",
        imageUrl: "./images/meta.png"
    },
    {
        title: "Open Source Software Development, Linux and Git Specialization",
        organization: "Coursera",
        date: "Sep 2023",
        link: "https://www.coursera.org/account/accomplishments/specialization/certificate/RE68ALDTM3K9",
        imageUrl: "./images/linux.png"
    },
    {
        title: "Complete Beginner Learning Path",
        organization: "TryHackMe",
        date: "Sep 2023",
        link: "https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-SXMI5FTADO.png",
        imageUrl: "https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-SXMI5FTADO.png"
    },
    {
        title: "Cybersecurity Primer",
        organization: "MUICT",
        date: "Sep 2023",
        link: "/pdf/ICT_SEC",
        imageUrl: "./images/ICT.png"
    },
    {
        title: "Blue Team Junior Analyst Path",
        organization: "Security Blue Team",
        date: "Aug 2023",
        link: "/pdf/Blue-Team",
        imageUrl: "./images/Blue.png"
    },
    {
        title: "Jr Penetration Tester Learning Path",
        organization: "TryHackMe",
        date: "Sep 2023",
        link: "https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-PXDIYNDRPN.png",
        imageUrl: "https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-PXDIYNDRPN.png"
    },
    {
        title: "Web Fundamentals Learning Path",
        organization: "TryHackMe",
        date: "Sep 2023",
        link: "https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-IPHRFOQLN7.png",
        imageUrl: "https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-IPHRFOQLN7.png"
    },
    {
        title: "Software Engineering Specialization",
        organization: "Coursera",
        date: "June 2023",
        link: "https://www.coursera.org/account/accomplishments/specialization/certificate/PDGPEHC4SNX4",
        imageUrl: "./images/ce2.png"
    },
    {
        title: "Google Cybersecurity Specialization",
        organization: "Coursera",
        date: "June 2023",
        link: "https://www.coursera.org/account/accomplishments/specialization/certificate/MFYGQ8CZRTE3",
        imageUrl: "./images/ce3.png"
    },
    {
        title: "Python for Cybersecurity Specialization",
        organization: "Coursera",
        date: "June 2023",
        link: "https://www.coursera.org/account/accomplishments/specialization/certificate/7HMJARZ6B9F7",
        imageUrl: "./images/ce4.png"
    },
    {
        title: "Applied Cryptography Specialization",
        organization: "Coursera",
        date: "June 2023",
        link: "https://www.coursera.org/account/accomplishments/specialization/certificate/59D4PJPG3KLQ",
        imageUrl: "./images/ce1.png"
    },
    {
        title: "Learning Tor and the Dark Web",
        organization: "LinkedIn",
        date: "June 2023",
        link: "https://www.linkedin.com/learning/certificates/3bbe2756f9b737e24d3b90d185b61b827aea10dc34e1c55fd2f8ecf4a7ab4a0d",
        imageUrl: "./images/TOR.png"
    },
    // {
    //     title: "Cybersecurity for Businesses - The Fundamental Edition",
    //     organization: "EC-Council Learning",
    //     date: "May 2023",
    //     link: "https://codered.eccouncil.org/certificate/6976bf06-9d05-45f8-880d-8289df80f0f1?logged=true",
    //     imageUrl: "./images/ce8.png"
    // },
    {
        title: " NDG Linux Unhatched",
        organization: "Cisco",
        date: "April 2023",
        link: "/pdf/NDG",
        imageUrl: "./images/ndg.png"
    },
    {
        title: "Junior Cybersecurity Analyst Career Path",
        organization: "Cisco",
        date: "April 2023",
        link: "https://www.credly.com/badges/bf1bce85-beb9-4421-a727-727ae8f771c4/linked_in_profile",
        imageUrl: "./images/ce11.png"
    },
    {
        title: "รู้ทันอาชญากรรมไซเบอร์ Ethical Hacking Penetration Testing",
        organization: "FutureSkill",
        date: "March 2023",
        link: "/pdf/FutureSkill_Pen",
        imageUrl: "./images/ce12.png"
    },
    // {
    //     title: "Ultimate JavaScript Strings",
    //     organization: "CodeRed",
    //     date: "Feb 2023",
    //     link: "https://codered.eccouncil.org/certificate/7d906f56-a2f3-41e4-9843-e72e5848a284?logged=true",
    //     imageUrl: "https://eccommonstorage.blob.core.windows.net/codered/certificates/7d906f56-a2f3-41e4-9843-e72e5848a284.png"
    // },
    {
        title: "Introduction to Dark Web, Anonymity, and Cryptocurrency",
        organization: "EC-Council Learning",
        date: "Feb 2023",
        link: "https://codered.eccouncil.org/certificate/ea4dfaf8-ebf7-48b1-a511-69c80be529bf?logged=true",
        imageUrl: "https://eccommonstorage.blob.core.windows.net/codered/certificates/ea4dfaf8-ebf7-48b1-a511-69c80be529bf.png"
    },
    {
        title: "AWS Academy Graduate - AWS Academy Cloud Foundations",
        organization: "Amazon Web Services",
        date: "Nov 2022",
        link: "https://www.credly.com/badges/bee5a187-4758-436f-a321-88a3f0ad0c25/linked_in_profile",
        imageUrl: "./images/ce15.png"
    },
    {
        title: "GDSC Core Team Member Certificate of Appreciation",
        organization: "Google Developer Student Clubs",
        date: "July 2021",
        link: "/pdf/GDSC",
        imageUrl: "./images/GDSC.png"
    }
];

const Certificate = () => {
    const settings = {
        dots: true,
        infinite: true,
        arrows : false,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const createSlides = (certificates) => {
        const slides = [];
        for (let i = 0; i < certificates.length; i += 4) {
            slides.push(certificates.slice(i, i + 4));
        }
        return slides;
    };

    const slides = createSlides(certificates);

    return (
        <section id="certifications" className="my-4">
            <h1 className="mb-4 text-center title-enhanced">Certifications</h1>
            <Slider {...settings}>
                {slides.map((slideCerts, index) => (
                    <div key={index}>
                        <Card className="mb-3 border-0 shadow-sm about-card">
                            <Card.Header className="bg-white border-0"></Card.Header>
                            <Card.Body>
                                <Row className="flex-wrap">
                                    {slideCerts.map((cert, index) => (
                                        <Col key={index} sm={6} md={4} lg={3} className="mb-4">
                                            <Card className="border-0 shadow-sm experience-card h-100">
                                                <Card.Img variant="top" src={cert.imageUrl} style={{ height: '200px', objectFit: 'contain' }} />
                                                <Card.Body className="d-flex flex-column">
                                                    <Card.Title>{cert.title}</Card.Title>
                                                    <Card.Subtitle className="mb-2 text-muted">{cert.organization} - {cert.date}</Card.Subtitle>
                                                    <Card.Link
                                                        href={cert.link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="btn btn-outline-dark mt-auto"
                                                    >
                                                        Show Credential
                                                    </Card.Link>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    ))}
                                </Row>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </Slider>
        </section>
    );
};

export default Certificate;
