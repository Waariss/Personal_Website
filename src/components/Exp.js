import React from 'react';
import { Card, Row, Col} from 'react-bootstrap';
import { FaNewspaper, FaFileAlt, FaImage, FaFlask } from 'react-icons/fa';
import '../App.css';

const Experience = () => {
    return (
        <section id="experience" className="my-5">
            <h1 className="mb-4 text-center title-enhanced">Experience</h1>
            {getExperiences().map((experience, index) => (
                <Card key={index} className="mb-4 border-0 shadow-sm experience-card hover-shadow">
                    <Card.Body>
                        <Row>
                            <Col xs={2} className="d-flex align-items-start justify-content-center">
                                <img src={experience.companyLogo} alt="Company Logo" className="company-logo" />
                            </Col>
                            <Col xs={10}>
                                <div className="details-container">
                                    <img src={experience.internshipImages} alt="Internship Experience" className="internship-image float-right ml-3" />
                                    <Card.Title className="mb-3 experience-title"><strong>{experience.title}</strong></Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">{experience.company} · {experience.type}</Card.Subtitle>
                                    <Card.Subtitle className="mb-2 text-muted">{experience.duration}</Card.Subtitle>
                                    <Card.Subtitle className="mb-3 text-muted">{experience.location}</Card.Subtitle>
                                    <Card.Text className="mb-1"><strong>Key Responsibilities:</strong></Card.Text>
                                        <ul className="mb-2 ps-3">
                                        {experience.description.map((item, idx) => (
                                            <li key={idx} className="mb-2">{item}</li>
                                        ))}
                                        </ul>
                                    <Card.Text className="mb-3">
                                        <strong>Skills:</strong> <span className="skills">{experience.skills}</span>
                                    </Card.Text>
                                    <Card.Text className="mb-3 link-group">
                                        {experience.links.map((link, linkIndex) => (
                                            <Card.Link
                                                key={linkIndex}
                                                href={link.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="btn btn-outline-dark custom-link"
                                            >
                                                {getIconForLinkType(link.type)} {link.label}
                                            </Card.Link>
                                        ))}
                                    </Card.Text>
                                </div>
                            </Col>
                        </Row>
                        
                    </Card.Body>
                </Card>
            ))}
        </section>
    );
};

const getIconForLinkType = (type) => {
    switch(type) {
        case 'news': return <FaNewspaper className="me-1" />;
        case 'paper': return <FaFileAlt className="me-1" />;
        case 'poster': return <FaImage className="me-1" />;
        case 'lab': return <FaFlask className="me-1" />;
        default: return null;
    }
};

const getExperiences = () => [
    {
        companyLogo: 'https://cdnali.zipeventapp.com/images/organization/F6B3C9E9-98D4-42CC-AA12-74838182141F/AD84BE4C-F650-4F8E-9871-B7F53F33A875.jpg',
        internshipImages: './images/KBTG_O.JPG',
        title: 'Offensive Security Engineer',
        company: 'Kasikorn Business Technology Group',
        type: 'Full-time',
        duration: 'Nov 2024 - Present',
        location: 'Bangkok, Thailand 🇹🇭 · Hybrid',
        description: [
            'Performed penetration testing across Web, Mobile, API, and Network environments for over 80 projects annually, covering KBTG and its subsidiaries.',
            'Acted as project owner for 4 major security assessment projects in 2025, leading end-to-end execution and reporting.',
            'Served as a core member in Red Team operations (Red Team Campaign), leading and executing advanced threat simulation and detection exercises.',
            'Created comprehensive summary reports of security findings in both Thai and English, ensuring clear communication with stakeholders',
            'Led the development of an automated reporting system and collaborated with the team to design reporting formats and styles.',
            'Significantly reduced response time for critical vulnerability alerts by building automation solutions using Power Apps, Power Automate, and Python.',
            'Conducted AI security research focused on both Offensive (Red Team) and Defensive (Blue Team).',
            'Collaborated closely with the Threat Intelligence team to support real-time alerting.',
            'Presented findings and shared AI threat insights during TBCert sessions and internal security briefings.',
            'Delivered knowledge-sharing sessions on AI security to regional KBTG teams.'
        ],
        skills: 'Penetration test · Kali linux · Burp Suite · AI Security · Reporting · Power Automate · Power Apps', // Full skills list here
        links: [
            // { href: 'https://www.instagram.com/p/C138L04JLYI/?fbclid=IwAR2PdXTwGHHzhd-r1jfOr-_iQMWHWy0JwAZF58j7TI4aGhNMdkGi6U8BrSM&img_index=4', type: 'news', label: 'News' },
            // { href: '/pdf/DVWA', type: 'lab', label: 'DVWA Lab' },
            // { href: '/pdf/EZ', type: 'lab', label: 'Ez_Shop Lab' },
            // { href: 'https://wariss-writeup.gitbook.io/writeup/', type: 'paper', label: 'Writeup Collection' }
        ]
    },
    {
        companyLogo: './images/aplha.png',
        internshipImages: './images/apBG.png',
        title: 'Cybersecurity Consultant (Penetration tester)',
        company: 'ALPHASEC',
        type: 'Full-time',
        duration: 'Jun 2024 - Oct 2024 · 5 mos',
        location: 'Bangkok, Thailand 🇹🇭 · Hybrid',
        description: [
            'Conducted in-depth penetration testing of IT infrastructure, identifying vulnerabilities in operating systems, applications, configurations, and user behavior.',
            'Specialized in web, mobile, and software vulnerability assessments following OWASP Top 10 and industry best practices.',
            'Delivered detailed security reports with actionable remediation steps to strengthen clients’ overall security posture.',
            'Worked cross-functionally with development and infrastructure teams to ensure timely remediation of security risks.',
            'Successfully completed 16 security assessment projects during the engagement.'
        ],
        skills: 'Penetration test · Kali linux · Burp Suite · OWSAP · Vulnerability Assessment', // Full skills list here
        links: [
            // { href: 'https://www.instagram.com/p/C138L04JLYI/?fbclid=IwAR2PdXTwGHHzhd-r1jfOr-_iQMWHWy0JwAZF58j7TI4aGhNMdkGi6U8BrSM&img_index=4', type: 'news', label: 'News' },
            // { href: '/pdf/DVWA', type: 'lab', label: 'DVWA Lab' },
            // { href: '/pdf/EZ', type: 'lab', label: 'Ez_Shop Lab' },
            // { href: 'https://wariss-writeup.gitbook.io/writeup/', type: 'paper', label: 'Writeup Collection' }
        ]
    },
    {
        companyLogo: './images/eta-2023-logo-kpmg.webp',
        internshipImages: './images/Group.jpg',
        title: 'Cybersecurity Consultant (Penetration tester)',
        company: 'KPMG · Advisory · Tech-Cyber',
        type: 'Internship',
        duration: 'Jan 2024 - Apr 2024 · 4 mos',
        location: 'Bangkok, Thailand 🇹🇭 · Hybrid',
        description: [
            'Assisted in conducting penetration tests on software, mobile, and web applications using tools such as Kali Linux and Burp Suite.',
            'Followed OWASP best practices to identify and document security vulnerabilities and simulate real-world cyberattacks.',
            'Performed vulnerability assessments on KPMG’s internal network using Nessus and other scanning tools.',
            'Contributed to the development of a secure internal website, incorporating security-by-design principles.',
            'Completed 2 penetration testing projects and 1 vulnerability assessment project, improving communication of complex findings to stakeholders.',
            'Gained practical expertise in offensive security while actively pursuing continuous learning in a dynamic threat landscape.'
        ],
        skills: 'Penetration test · Kali linux · Burp Suite · OWSAP · Cybersecurity · Vulnerability Assessment', // Full skills list here
        links: [
            { href: 'https://www.instagram.com/p/C138L04JLYI/?fbclid=IwAR2PdXTwGHHzhd-r1jfOr-_iQMWHWy0JwAZF58j7TI4aGhNMdkGi6U8BrSM&img_index=4', type: 'news', label: 'News' },
            { href: '/pdf/DVWA', type: 'lab', label: 'DVWA Lab' },
            { href: '/pdf/EZ', type: 'lab', label: 'Ez_Shop Lab' },
            { href: '/pdf/KPMG', type: 'poster', label: 'Show Credential' },
        ]
    },
    {
        companyLogo: './images/tu.jpeg',
        internshipImages: './images/IMG_5203.jpg',
        title: 'Detecting Vulnerable OAuth 2.0 Implementations in Android Applications',
        company: 'Ritsumeikan University',
        type: 'Internship',
        duration: 'May 2023 - July 2023 · 3 mos',
        location: 'Shiga, Japan 🇯🇵 · On-site',
        description: [
            'Conducted research on OAuth 2.0 implementations in Android applications and browser extensions, focusing on vulnerabilities related to Cross-Site Request Forgery (CSRF).',
            'Evaluated critical security parameters such as the state value and authorization code to determine resilience against CSRF attacks.',
            'Developed a custom Android application and analyzed real-world apps and extensions to assess OAuth integration practices.',
            'Identified insecure implementations that exposed users to potential token hijacking and session fixation risks',
            'Contributed to the development of a benchmark for future security audits of Android apps and browser extensions using OAuth 2.0, promoting safer authentication design.',
            'Presented research findings at the Workshop on Cyber Forensics, Security, and E-discovery, part of the 23rd IEEE International Conference on Software Quality, Reliability, and Security (QRS 2023).'
        ],
        skills: 'Android Development · OAuth2.0 · Application Security · Security · Cybersecurity · Java', // Full skills list here
        links: [
            { href: 'https://www.ict.mahidol.ac.th/thai/abroad-internship-academic-year-2022/', type: 'news', label: 'News' },
            { href: '/pdf/Ritsumeikan_University_Poster', type: 'poster', label: 'Poster' },
            { href: 'https://ieeexplore.ieee.org/document/10430018', type: 'paper', label: 'Conference Paper' }
        ]
    },
    {
        companyLogo: './images/tu1.png',
        internshipImages: './images/ce16.png',
        title: 'Automated COVID-19 Screening Framework Using Deep CNN With Chest X-Ray Medical Images',
        company: 'National Central University',
        type: 'Internship',
        duration: 'Jun 2022 - Jul 2022 · 2 mos',
        location: 'Taoyuan City, Taiwan 🇹🇼 · Remote',
        description: [
            'Contributed to a research project focused on automated COVID-19 diagnosis using deep learning and chest X-ray images.',
            'Developed and evaluated a convolutional neural network (CNN) model enhanced by transfer learning for accurate COVID-19 screening.',
            'Utilized Grad-CAM visualizations to interpret model predictions and enhance explainability for medical practitioners.',
            'Conducted experiments on publicly available datasets to assess model performance in terms of accuracy, precision, recall, and F-measure.',
            'Demonstrated expertise in artificial intelligence, deep learning, and medical image analysis applied to real-world health challenges.',
            'Published research findings at the 2022 6th International Conference on Information Technology (InCIT).'
        ],
        skills: 'Public Speaking · Jupyter · Convolutional Neural Networks (CNN) · Deep Learning · Artificial Intelligence (AI) · Communication · Python', // Full skills list here
        links: [
            { href: 'https://www.ict.mahidol.ac.th/closing-ceremony-for-online-taiwan-summer-internship-2022/', type: 'news', label: 'News' },
            { href: 'https://ieeexplore.ieee.org/document/10067528', type: 'paper', label: 'Conference Paper' },
            { href: '/pdf/NCU_CERT', type: 'poster', label: 'Show Credential' },
            { href: '/pdf/INCIT_CERT', type: 'poster', label: 'Conference Certifications' },
        ]
    }
];

export default Experience;
