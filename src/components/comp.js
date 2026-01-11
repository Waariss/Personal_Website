import React, { useState } from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import '../App.css';

const Competitions = () => {
    const [showAllCompetitions, setShowAllCompetitions] = useState(false);
    const competitions = getCompetitions();
    const displayedCompetitions = showAllCompetitions ? competitions : competitions.slice(0, 3);

    return (
        <section id="competitions" className="my-5">
            <h1 className="mb-4 text-center title-enhanced">Competitions</h1>
            <Row>
                {displayedCompetitions.map((competition, index) => (
                    <Col key={index} xs={12} md={6} lg={4} className="mb-4">
                        <a 
                            href={competition.linkedinUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="competition-minimal-link"
                        >
                            <Card className="competition-minimal-card h-100">
                                <Card.Body className="d-flex flex-column">
                                    <div className="comp-minimal-header">
                                        <h5 className="comp-minimal-title">{competition.title}</h5>
                                        <span className="comp-minimal-date">{competition.date}</span>
                                    </div>
                                    
                                    <div className="comp-minimal-stats">
                                        {competition.teamRank && (
                                            <div className="minimal-stat">
                                                <span className="minimal-stat-label">Team:</span>
                                                <span className="minimal-stat-value">{competition.teamRank} · {competition.teamScore}</span>
                                            </div>
                                        )}
                                        {competition.individualRank && (
                                            <div className="minimal-stat">
                                                <span className="minimal-stat-label">Individual:</span>
                                                <span className="minimal-stat-value">{competition.individualRank} · {competition.individualScore}</span>
                                            </div>
                                        )}
                                    </div>
                                </Card.Body>
                            </Card>
                        </a>
                    </Col>
                ))}
            </Row>
            {competitions.length > 3 && (
                <div className="text-center mt-4">
                    <button 
                        className="btn btn-outline-secondary btn-lg"
                        onClick={() => setShowAllCompetitions(!showAllCompetitions)}
                    >
                        {showAllCompetitions ? 'Show Less Competitions' : `Show All ${competitions.length} Competitions`}
                    </button>
                </div>
            )}
        </section>
    );
};

const getCompetitions = () => [
    // {
    //     certificateImage: "./images/Umass.png",
    //     title: 'UMassCTF 2024',
    //     date: 'April 2024',
    //     teamRank: '85th',
    //     teamScore: '2,450 points',
    //     individualRank: '120th',
    //     individualScore: '1,850 points',
    //     linkedinUrl: 'https://www.linkedin.com/in/your-profile/post-id'
    // },
    // {
    //     certificateImage: "./images/Amateurs.png",
    //     title: 'AmateursCTF 2024',
    //     date: 'April 2024',
    //     teamRank: '156th',
    //     teamScore: '1,875 points',
    //     linkedinUrl: 'https://www.linkedin.com/in/your-profile/post-id'
    // },
    // {
    //     certificateImage: "./images/SCD.png",
    //     title: 'SecureMy.Dev CTF',
    //     date: 'April 2024',
    //     individualRank: '45th',
    //     individualScore: '3,200 points',
    //     linkedinUrl: 'https://www.linkedin.com/in/your-profile/post-id'
    // },
    {
        certificateImage: "./images/pico.png",
        title: 'Internal KBTG CTF 2025',
        date: 'Dec 2025',
        teamRank: '1 / 5 teams',
        teamScore: '311 points',
        linkedinUrl: 'https://www.linkedin.com/posts/waris-damkham_internal-kbtg-ctf-2025-19-december-activity-7411022866307248128-4Vov'
    },
    {
        certificateImage: "./images/pico.png",
        title: 'Hack The Scammer CTF 2025 – Online Qualifiers',
        date: 'Dec 2025',
        teamRank: '5 / 709 teams',
        teamScore: '1,608 points',
        individualRank: '4 / 1,7778 participants',
        individualScore: '1,307 points',
        linkedinUrl: 'https://www.linkedin.com/posts/waris-damkham_hack-the-scammer-ctf-2025-online-qualifiers-activity-7406219811346833409-stpa'
    },
    {
        certificateImage: "./images/pico.png",
        title: 'Thailand Cyber Top Talent 2025 - OPEN [Final]',
        date: 'Sep 2025',
        teamRank: '8 / 10 teams',
        teamScore: '1,100 points',
        individualRank: '11 / 30 participants',
        individualScore: '600 points',
        linkedinUrl: 'https://www.linkedin.com/posts/waris-damkham_cybersecurity-ctf-thailandcybertoptalent2025-activity-7383493031322312704-uR5t'
    },
    {
        certificateImage: "./images/pico.png",
        title: 'Thailand Cyber Top Talent 2025 - OPEN [Qualifier]',
        date: 'Sep 2025',
        teamRank: '4 / 338 teams',
        teamScore: '4,601 points',
        individualRank: '32 / 725 participants',
        individualScore: '2,301 points',
        linkedinUrl: 'https://www.linkedin.com/posts/waris-damkham_cybersecurity-ctf-thailandcybertoptalent2025-activity-7368100288869617664-wakW'
    },
    {
        certificateImage: "./images/pico.png",
        title: 'TB-CERT Cyber Combat 2025',
        date: 'Aug 2025',
        teamRank: '10 / 43 teams',
        teamScore: '4,290 points',
        linkedinUrl: 'https://www.linkedin.com/posts/waris-damkham_kbtg-cybersecurity-ctf-activity-7368107840911122432-VLlv'
    },
    {
        certificateImage: "./images/pico.png",
        title: 'SEC Playground Cybersplash 2025',
        date: 'Apr 2025',
        teamRank: '8 / 92 teams',
        teamScore: '133 points',
        linkedinUrl: 'https://www.linkedin.com/posts/waris-damkham_wrapped-up-an-exciting-journey-at-sec-playground-activity-7319220648403251200-QFFC'
    },
    {
        certificateImage: "./images/pico.png",
        title: 'picoCTF 2025',
        date: 'Mar 2025',
        individualRank: '169 / 10,460 teams',
        individualScore: '6,010 points',
        linkedinUrl: 'https://www.linkedin.com/posts/waris-damkham_wrapped-up-an-incredible-journey-at-picoctf-activity-7307693721024634880-f1sJ'
    },
    {
        certificateImage: "./images/pico.png",
        title: 'SEC Playground Hackloween CTF 2024',
        date: 'Oct 2024',
        individualRank: '15 / 157 teams',
        individualScore: '233 points',
        linkedinUrl: 'https://www.linkedin.com/posts/waris-damkham_secplaygroundhackloween-secplaygroundhackloween2024-activity-7258113001302446081-ZiaZ'
    },
    {
        certificateImage: "./images/pico.png",
        title: 'HackTheBox: Hack The Boo 2024',
        date: 'Oct 2024',
        individualRank: '85 / 6,348 teams',
        individualScore: '10,875 points',
        linkedinUrl: 'https://www.linkedin.com/posts/waris-damkham_hackthebox-hacktheboo-ctf-activity-7255929001716658176-oC3d'
    },
    {
        certificateImage: "./images/pico.png",
        title: 'Thailand Cyber Top Talent 2024 - OPEN [Qualifier]',
        date: 'Sep 2024',
        teamRank: '41 th',
        teamScore: '2,000 points',
        individualRank: '50th',
        individualScore: '1,200 points',
        linkedinUrl: 'https://www.linkedin.com/posts/waris-damkham_excited-to-share-my-experience-at-the-activity-7246393763504250881-l1Lx'
    },
    {
        certificateImage: "./images/pico.png",
        title: 'SEC Playground Half Year CTF 2024',
        date: 'Jun 2024',
        teamRank: '19 / 130 teams',
        teamScore: '208 points',
        linkedinUrl: 'https://www.linkedin.com/posts/waris-damkham_i-recently-participated-in-sec-playground-activity-7223177722066321409-lN2G'
    },
    {
        certificateImage: "./images/pico.png",
        title: 'BCACTF 5.0',
        date: 'Jun 2024',
        teamRank: '91 / 1202 teams',
        teamScore: '1,935 points',
        linkedinUrl: 'https://www.linkedin.com/posts/waris-damkham_i-recently-participated-in-bcactf-50-and-activity-7206134596525068290-y5Og'
    },
    {
        certificateImage: "./images/pico.png",
        title: 'picoCTF 2024',
        date: 'Mar 2024',
        teamRank: '128th',
        teamScore: '7,325 points',
        linkedinUrl: 'https://www.linkedin.com/posts/waris-damkham_recently-participated-in-the-picoctf-2024-activity-7178599101264015360-3_4k'
    },   
    {
        certificateImage: "./images/HTBA.png",
        title: 'CYBER APOCALYPSE CTF 2024 Hacker Royale',
        date: 'Mar 2024',
        teamRank: '227th',
        teamScore: '10,525 points',
        // individualRank: '350th',
        // individualScore: '8,750 points',
        linkedinUrl: 'https://www.linkedin.com/posts/waris-damkham_recently-participated-in-the-htb-cyber-apocalypse-activity-7174106113808756739-FtXK'
    },   
    {
        certificateImage: "./images/hunt.png",
        title: 'Huntress CTF',
        date: 'Oct 2023',
        linkedinUrl: '/pdf/Huntress_CERT'
    }, 
    {
        certificateImage: "./images/CTF.png",
        title: 'Thailand Cyber Top Talent 2023',
        date: 'Sep 2023',
        linkedinUrl: '/pdf/TCTT_2023'
    },    
    {
        certificateImage: "./images/codegoda.png",
        title: 'Codegoda 2023',
        date: 'May 2023',
        linkedinUrl: '/pdf/CODEGODA'
    }
    
];

export default Competitions;

