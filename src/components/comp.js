import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import '../App.css';

const Competitions = () => {
    return (
        <section id="competitions" className="my-5">
            <h1 className="mb-4 text-center title-enhanced">Competitions</h1>
            {getCompetitions().map((competition, index) => (
                <Card key={index} className="mb-4 competition-card">
                    <img src={competition.certificateImage} alt="Competition Certificate" className="certificate-image" />
                    <Card.Body>
                        <Card.Title className="competition-title">{competition.title}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{competition.date}</Card.Subtitle>
                        <Card.Text>{competition.description}</Card.Text>
                        <Card.Text>
                            <strong>Skills:</strong> <span className="skills">{competition.skills}</span>
                        </Card.Text>
                        <Card.Text className="link-group">
                            {competition.links.map((link, linkIndex) => (
                                <Card.Link
                                    key={linkIndex}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="custom-link"
                                >
                                    {link.label}
                                </Card.Link>
                            ))}
                        </Card.Text>
                    </Card.Body>
                </Card>
            ))}
        </section>
    );
};

const getCompetitions = () => [
    {
        certificateImage: "./images/hunt.png",
        title: 'Huntress CTF',
        date: 'Oct 2023',
        description: 'I participated in the Huntress Capture the Flag (CTF) Contest sponsored by Huntress Labs Incorporated. In this cybersecurity competition, participants solve challenges in domains like web security and cryptography to find and submit flags, earning points. The top scorers are declared winners.',
        skills: 'Cybersecurity, Web Application Security, Digital Forensics, Reverse Engineering, Network Security, Mobile Security, Programming, Cryptography',
        links: [
            { url: 'https://huntress.ctf.games', type: 'news', label: 'Website' },
        ]
    }, 
    {
        certificateImage: "./images/CTF.png",
        title: 'Thailand Cyber Top Talent 2023',
        date: 'Sep 2023',
        description: 'Participated in the "Thailand Cyber Top Talent 2023" cybersecurity competition, organized by the National Cyber Security Office and Huawei Technologies (Thailand) Co., Ltd. This prestigious event aimed to educate and upskill participants in various areas of cybersecurity through hands-on challenges. The competition adopted a "Capture the Flag" format in a Jeopardy style, highlighting areas such as Web Application Security, Digital Forensics, and more.',
        skills: 'Cybersecurity, Web Application Security, Digital Forensics, Reverse Engineering, Network Security, Mobile Security, Programming, Cryptography',
        links: [
            { url: 'https://ctf.in.th/thctt2023/', type: 'news', label: 'Website' },
        ]
    },    
    {
        certificateImage: "./images/codegoda.png",
        title: 'Codegoda 2023',
        date: 'May 2023',
        description: 'Participated in Codegoda 2023, a renowned coding competition where I tackled challenging algorithmic problems and showcased my coding prowess. It was a great experience to compete with talented coders worldwide and further hone my problem-solving skills.',
        skills: 'Algorithms, Data Structures, Problem Solving, Competitive Programming',
        links: [
            { url: 'https://unstop.com/certificate-preview/d0deee19-9a61-4ec0-92d2-00a44d089912?utm_campaign=site-emails', type: 'news', label: 'Show Credential' },
            { url: 'https://codegoda.io', type: 'news', label: 'Website' },
        ]
    }
    
];

export default Competitions;