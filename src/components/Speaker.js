import React, { useState } from 'react';
import { Card, Row, Col, Badge } from 'react-bootstrap';
import { FaBullhorn, FaMapMarkerAlt, FaCalendarAlt, FaExternalLinkAlt, FaFileAlt } from 'react-icons/fa';
import '../App.css';

const Speaker = () => {
    const [showAllTalks, setShowAllTalks] = useState(false);
    const talks = getTalks();
    const displayedTalks = showAllTalks ? talks : talks.slice(0, 3);
    
    return (
        <section id="speaker" className="my-5">
            <h2 className="mb-4 text-center title-enhanced">Speaker & Presentations</h2>
            
            <Row>
                {displayedTalks.map((talk, index) => (
                    <Col key={index} xs={12} md={6} lg={4} className="mb-4">
                        <Card className="talk-card h-100 border-0 shadow-sm">
                            <Card.Body className="d-flex flex-column">
                                {/* Event Badge */}
                                <div className="talk-header">
                                    <Badge 
                                        bg={getEventTypeColor(talk.type)} 
                                        className="event-badge mb-3"
                                    >
                                        {talk.type}
                                    </Badge>
                                    <Badge 
                                        bg="secondary" 
                                        className="status-badge mb-3 ms-2"
                                    >
                                        {talk.status}
                                    </Badge>
                                </div>

                                {/* Talk Info */}
                                <div className="talk-content flex-grow-1">
                                    <h5 className="talk-title">{talk.title}</h5>
                                    <h6 className="talk-event">
                                        <FaBullhorn className="me-2" aria-hidden="true" focusable="false" />
                                        {talk.event}
                                    </h6>
                                    <p className="talk-description">{talk.description}</p>
                                    
                                    <div className="talk-meta">
                                        <small className="text-muted d-block mb-1">
                                            <FaMapMarkerAlt className="me-2" aria-hidden="true" focusable="false" />
                                            {talk.location}
                                        </small>
                                        <small className="text-muted d-block">
                                            <FaCalendarAlt className="me-2" aria-hidden="true" focusable="false" />
                                            {talk.date}
                                        </small>
                                    </div>
                                </div>

                                {/* Links */}
                                {talk.links && talk.links.length > 0 && (
                                    <div className="mt-auto">
                                        <div className="d-flex gap-2 flex-wrap">
                                            {talk.links.map((link, idx) => (
                                                <a
                                                    key={idx}
                                                    href={link.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className={`btn btn-outline-${link.color || 'primary'} btn-sm flex-fill`}
                                                >
                                                    {link.label} {renderTalkLinkIcon(link.icon)}
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

            {talks.length > 3 && (
                <div className="text-center mt-4">
                    <button 
                        className="btn btn-outline-secondary btn-lg"
                        onClick={() => setShowAllTalks(!showAllTalks)}
                    >
                        {showAllTalks ? 'Show Less' : `Show All ${talks.length} Talks`}
                    </button>
                </div>
            )}
        </section>
    );
};

const renderTalkLinkIcon = (icon) => {
    const cls = 'ms-1';
    if (icon && icon.includes('file')) return <FaFileAlt className={cls} aria-hidden="true" focusable="false" />;
    return <FaExternalLinkAlt className={cls} aria-hidden="true" focusable="false" />;
};

const getEventTypeColor = (type) => {
    switch (type.toLowerCase()) {
        case 'arsenal': return 'danger';
        case 'conference': return 'primary';
        case 'workshop': return 'info';
        case 'webinar': return 'success';
        case 'meetup': return 'warning';
        default: return 'secondary';
    }
};

const getTalks = () => [
    {
        title: 'Oblivion Token: M365 Conditional Access Policy Bypass OST (Offensive Tooling)',
        event: 'Black Hat Asia Arsenal 2026',
        type: 'Arsenal',
        status: 'Accepted',
        description: 'Oblivion Token is a focused offensive-research utility that makes Microsoft 365 Conditional Access Policy (CAP) bypass testing practical, repeatable, and scriptable. Designed for red-teamers and security researchers, it systematizes token-centric workflows and exercises policy edge cases to expose where device, network, or app-context assumptions fail including realistic test paths against Microsoft first-party (built-in) applications.',
        location: 'Marina Bay Sands, Singapore',
        date: 'April 2026',
        links: [
            {
                label: 'Black Hat',
                url: 'https://blackhat.com/asia-26/arsenal/schedule/#oblivion-token--m365-conditional-access-policy-bypass-ost-offensive-tooling-49920',
                icon: 'fas fa-external-link-alt',
                color: 'danger'
            }
        ]
    },
    {
        title: 'AI Security Unmasked: The Hidden Danger Behind Your AI Tools',
        event: 'KBTG Knowledge Sharing 2025',
        type: 'Webinar',
        status: 'Presented',
        description: 'TBA',
        location: 'MS Teams',
        date: 'Sep 2025'
    },
    {
        title: 'AI Security Research: The Rise of AI Threat (ยุคใหม่ของภัยคุกคามอัตโนมัติ)',
        event: 'TBCert Monthly Meeting 2025',
        type: 'Meetup',
        status: 'Presented',
        description: 'TBA',
        location: 'Bangkok, Thailand',
        date: 'May 2025'
    },
    {
        title: 'Detecting Vulnerable OAuth 2.0 Implementations in Android Applications',
        event: 'QRS 2023',
        type: 'Conference',
        status: 'Presented',
        description: 'OAuth 2.0, commonly used for authorization, can be susceptible to CSRF attacks in Android applications. To address this, we developed an Android app to assess other apps\' use of the OAuth 2.0 state parameter—a key defense against CSRF. Our analysis, conducted on both Chrome and the default browser, evaluates whether Android apps using OAuth 2.0 are adequately protected against CSRF attacks. Our research aims to protect users by highlighting apps with potentially vulnerable OAuth 2.0 implementations.',
        location: 'Chiang Mai, Thailand',
        date: 'October 2023',
        links: [
            {
                label: 'IEEE Paper',
                url: 'https://ieeexplore.ieee.org/document/10430018',
                icon: 'fas fa-file-alt',
                color: 'primary'
            }
        ]
    },
    {
        title: 'Automated COVID-19 Screening Framework Using Deep CNN With Chest X-Ray Medical Images',
        event: 'InCIT 2022',
        type: 'Conference',
        status: 'Presented',
        description: 'An automated COVID-19 screening framework using chest X-ray images is proposed in this study. It leverages artificial intelligence techniques and transfer learning for accurate diagnosis. The framework extracts features using transfer learning and applies modified deep neural networks. Grad-CAM visualization supports the predicted diagnosis. Experimental results demonstrate superior performance compared to other deep learning techniques. This framework has the potential to aid in early COVID-19 diagnosis and alleviate the burden on radiologists.',
        location: 'MS Teams',
        date: 'July 2022',
        links: [
            {
                label: 'IEEE Paper',
                url: 'https://ieeexplore.ieee.org/document/10067528',
                icon: 'fas fa-file-alt',
                color: 'primary'
            }
        ]
    }
];

export default Speaker;
