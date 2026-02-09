import { Card, Row, Col } from 'react-bootstrap';
import { FaExternalLinkAlt } from 'react-icons/fa';
import Slider from 'react-slick';
import '../App.css';

const certificates = [
    {
        title: "AI & LLM Exploitation Challenges (All 10 Labs Completed)",
        organization: "8kSec",
        date: "Jan/Feb 2026",
        link: "/8ksec-AI",
        imageUrl: "./images/AILLM-Exploitation-Challenges.png"
    },
    {
        title: "Cyber Security 101 (SEC1)",
        organization: "TryHackMe",
        date: "Feb 2026 - Feb 2029",
        link: "https://assets.tryhackme.com/certification-certificate/6988722dc6836467cbaece0f.pdf",
        imageUrl: "./images/SEC1.png"
    },
    {
        title: "Certified Web App Penetration Testing Apprentice (KWAPTA)",
        organization: "Knight Squad Academy",
        date: "Jan 2026",
        link: "https://credential.knightsquad.academy/KSA-UGSEKSEJ2501",
        imageUrl: "./images/waris-damkham-kwapta.png"
    },
    {
        title: "Certified C++ Practitioner Certification (CCPC)",
        organization: "Red Team Leaders",
        date: "Dec 2025",
        link: "https://courses.redteamleaders.com/exam-completion/c60d69557264702f",
        imageUrl: "./images/certified_c_certificate.png"
    },
    {
        title: "Certified Cybersecurity Educator Professional (CCEP)",
        organization: "Red Team Leaders",
        date: "Dec 2025",
        link: "https://courses.redteamleaders.com/exam-completion/4513c17c1105b18f",
        imageUrl: "./images/CCEP.png"
    },
    {
        title: "Certified Kiosk Breakout Professional (CKBPro)",
        organization: "The SecOps Group",
        date: "Nov 2025",
        link: "pdf/CKBPro",
        imageUrl: "./images/WarisDamkham-CertifiedKioskBreakoutProfessional(CKBPro).png"
    },
    {
        title: "OffSec Certified Professional+ (OSCP+)",
        organization: "OffSec",
        date: "Oct 2025 - Oct 2028",
        link: "https://credentials.offsec.com/3662edd7-f74b-4afc-89be-6343e301ac16#acc.z5HkIjF6",
        imageUrl: "https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/163229512"
    },
    {
        title: "OffSec Certified Professional (OSCP)",
        organization: "OffSec",
        date: "Oct 2025",
        link: "https://credentials.offsec.com/f4a60a23-7c81-4c93-83da-68059488a45a#acc.RfhgV7DF",
        imageUrl: "https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/163229530"
    },
    {
        title: "HTB Certified Junior Cybersecurity Associate",
        organization: "Hack The Box",
        date: "Sep 2025",
        link: "https://www.credly.com/badges/37645b13-29ce-4f11-898b-2ca933d3e603/public_url",
        imageUrl: "./images/HTB Certified Junior Cybersecurity Associate.png"
    },
    {
        title: "Jr Penetration Tester (PT1)",
        organization: "TryHackMe",
        date: "July 2025 - July 2028",
        link: "https://assets.tryhackme.com/certification-certificate/6868034812c00e6f24504db3.pdf",
        imageUrl: "./images/CERT.png"
    },
    {
        title: "Practical SOC Analyst Associate",
        organization: "TCM Security",
        date: "July 2025",
        link: "https://certified.tcm-sec.com/e944ad55-2d3c-4af4-a11e-c56c9dfede4a#acc.6zmgMDe2",
        imageUrl: "https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/155081719"
    },
    {
        title: "SECURITY ANALYST COURSE",
        organization: "SEC Playground",
        date: "July 2025",
        link: "https://www.credly.com/badges/1915f339-1599-47b9-95d4-7869bedc58ad/public_url",
        imageUrl: "./images/Security_Analyst_Course.png"
    },
    {
        title: "SOC Tier 1 Badge",
        organization: "SEC Playground",
        date: "July 2025",
        link: "https://www.credly.com/badges/4cddf94e-bbdb-4ce7-896e-8ae6e646f7de/public_url",
        imageUrl: "./images/SOC1.png"
    },
    {
        title: "Basic SOC Badge",
        organization: "SEC Playground",
        date: "July 2025",
        link: "https://www.credly.com/badges/87a7a7a1-2334-479c-8273-b47ca7de4376/public_url",
        imageUrl: "./images/Basic_SOC.png"
    },
    {
        title: "Cloud Digital Leader Certification",
        organization: "Google Cloud",
        date: "June 2025 - June 2028",
        link: "https://www.credly.com/badges/f5642804-65a0-44a0-bffb-cca96bf3c267/public_url",
        imageUrl: "./images/CDL_Waris.png"
    },
    {
        title: "Basic Web App Sec",
        organization: "SEC Playground",
        date: "June 2025",
        link: "https://www.credly.com/badges/e7800d53-ea5c-4a52-9c46-86ebbe24438a/public_url",
        imageUrl: "./images/I9X4UO8PQ5SS7.png"
    },
    {
        title: "API Security Certified Professional",
        organization: "APIsec University",
        date: "May 2025",
        link: "https://www.credly.com/badges/1d423a7e-0997-43b2-9d9e-8e9cae169452/public_url",
        imageUrl: "./images/ASCPExam.png"
    },
    {
        title: "HCCDA-Tech Essentials",
        organization: "Huawei Cloud",
        date: "Apr 2025 - Apr 2028",
        link: "/pdf/HCCDA-Tech",
        imageUrl: "./images/HWENDCTEDA511122.png"
    },
    {
        title: "APIsec Certified Practitioner",
        organization: "APIsec University",
        date: "Apr 2025",
        link: "https://www.credly.com/badges/b6bf6410-d63c-4665-bab0-45c383638dc5/public_url",
        imageUrl: "./images/ACPExam20250408-27-rvo5fm.png"
    },
    {
        title: "Web Application Penetration Tester eXtreme",
        organization: "INE Security",
        date: "Mar 2025 - Mar 2028",
        link: "https://certs.ine.com/d9490b0e-88d0-4483-a7cc-aefc22ac8de6#acc.BFI2SUWM",
        imageUrl: "https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/135650894"
    },
    {
        title: "Practical Network Penetration Tester",
        organization: "TCM Security",
        date: "Feb 2025",
        link: "https://certified.tcm-sec.com/57766f22-43d0-4c28-873d-b7e9c02bb039#acc.Hd5EIsLo",
        imageUrl: "https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/134181811"
    },
    {
        title: "HTB Certified Penetration Testing Specialist",
        organization: "Hack The Box",
        date: "Jan 2025",
        link: "/pdf/CPTS",
        imageUrl: "./images/CPTS.png"
    },
    {
        title: "Certified API Pentester (C-APIPen)",
        organization: "The SecOps Group",
        date: "Jan 2025",
        link: "pdf/C-APIPen",
        imageUrl: "./images/WarisDamkham-CertifiedAPIPentester(C-APIPen).png"
    },
    {
        title: "Certified Red Team Professional",
        organization: "Altered Security",
        date: "Dec 2024 - Dec 2027",
        link: "https://www.credential.net/3f3ce36c-11f4-460f-b1f0-206a537d9629#acc.eQDPI2nG",
        imageUrl: "https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/126901190"
    },
    {
        title: "Burp Suite Certified Practitioner",
        organization: "PortSwigger",
        date: "Dec 2024 - Dec 2030",
        link: "https://portswigger.net/web-security/e/c/2a628f7fb6d7dd35",
        imageUrl: "./images/SCR-20250426-kvjf.png"
    },
    {
        title: "Practical Mobile Pentest Associate",
        organization: "TCM Security",
        date: "Nov 2024",
        link: "https://certified.tcm-sec.com/01b1a674-b38f-4bee-8d4c-cd45a5d60c4d#acc.e1WhmRPx",
        imageUrl: "https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/124520643"
    },
    {
        title: "Certified Cloud Pentesting eXpert - AWS (CCPenX-AWS)",
        organization: "The SecOps Group",
        date: "Nov 2024",
        link: "/pdf/CCPenX-AWS",
        imageUrl: "./images/WarisDamkham-CertifiedCloudPentestingeXpert-AWS(CCPenX-AWS).png"
    },
    {
        title: "Certified Mobile Pentester (CMPen-IOS)",
        organization: "The SecOps Group",
        date: "Nov 2024",
        link: "/pdf/CMPen-IOS",
        imageUrl: "./images/CMPen-IOS.png"
    },
    {
        title: "HTB Mini Pro Lab FullHouse",
        organization: "Hack The Box",
        date: "Nov 2024",
        link: "/pdf/FullHouse",
        imageUrl: "./images/FullHouse.png"
    },
    {
        title: "Certified AI/ML Pentester (C-AI/MLPen)",
        organization: "The SecOps Group",
        date: "Nov 2024",
        link: "/pdf/MLPen",
        imageUrl: "./images/WarisDamkham-CertifiedAI_MLPentester(C-AI_MLPen).png"
    },
    {
        title: "Certified Red Team Analyst (CRTA)",
        organization: "CyberWarFare Labs",
        date: "Oct 2024",
        link: "https://www.credential.net/bfcd9773-ad19-4fdc-b17a-b7dfde8bc57f#acc.bQxEFSPA",
        imageUrl: "https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/119878553"
    },
    {
        title: "Red Team Infra Dev (CRT-ID)",
        organization: "CyberWarFare Labs",
        date: "Oct 2024",
        link: "https://www.credential.net/b8740539-da8e-4efb-ae8f-9ed63a23b797#acc.Lx94XEdW",
        imageUrl: "https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/118877996"
    },
    {
        title: "Multi-Cloud Red Team Analyst",
        organization: "CyberWarFare Labs",
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
        title: "HTB Certified Web Exploitation Specialist",
        organization: "Hack The Box",
        date: "Aug 2024",
        link: "/pdf/CBBH",
        imageUrl: "./images/CWES.png"
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
        arrows: false,
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
        <section id="certifications" className="my-5">
            <h1 className="mb-4 text-center title-enhanced">Certifications</h1>
            
            <Slider {...settings}>
                {slides.map((slideCerts, index) => (
                    <div key={index}>
                        <Card className="mb-5 border-0 shadow-sm cert-slide-card">
                            <Card.Body className="p-4">
                                <Row>
                                    {slideCerts.map((cert, certIndex) => (
                                        <Col key={certIndex} xs={12} sm={6} md={6} lg={3} className="mb-4">
                                            <Card className="cert-item-card h-100 border-0 shadow-sm">
                                                {/* Certificate Image */}
                                                <div className="cert-img-wrapper">
                                                    <Card.Img 
                                                        variant="top" 
                                                        src={cert.imageUrl}
                                                        className="cert-img"
                                                        loading="lazy"
                                                    />
                                                </div>
                                                
                                                {/* Certificate Info */}
                                                <Card.Body className="d-flex flex-column">
                                                    <Card.Title className="cert-item-title">
                                                        {cert.title}
                                                    </Card.Title>
                                                    
                                                    <div className="cert-item-meta mb-3">
                                                        <Card.Subtitle className="text-muted d-block mb-2">
                                                            {cert.organization}
                                                        </Card.Subtitle>
                                                        <Card.Subtitle className="text-muted d-block">
                                                            {cert.date}
                                                        </Card.Subtitle>
                                                    </div>

                                                    <a
                                                        href={cert.link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="btn btn-outline-primary btn-sm mt-auto"
                                                    >
                                                        View Credential <FaExternalLinkAlt className="ms-1" />
                                                    </a>
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
