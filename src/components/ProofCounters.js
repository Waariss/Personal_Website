import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import '../App.css';

const ProofCounters = () => {
    const counters = [
        { count: '13×', label: 'CVEs', link: '#cves', icon: '🔒' },
        { count: '3×', label: 'IEEE Publications', link: '#publications', icon: '📄' },
        { count: '17+', label: 'Core Certifications', link: '#certifications', icon: '🏆' },
        { count: '10+', label: 'CTF Competitions', link: '#competitions', icon: '🎯' }
    ];

    return (
        <section className="proof-counters-section my-5">
            <div className="container">
                <Row>
                    {counters.map((counter, index) => (
                        <Col key={index} xs={6} md={3} className="mb-3">
                            <a href={counter.link} className="text-decoration-none">
                                <Card className="proof-counter-card text-center border-0 shadow-sm h-100">
                                    <Card.Body>
                                        <div className="proof-icon mb-2">{counter.icon}</div>
                                        <h3 className="proof-count mb-1">{counter.count}</h3>
                                        <p className="proof-label mb-0">{counter.label}</p>
                                    </Card.Body>
                                </Card>
                            </a>
                        </Col>
                    ))}
                </Row>
            </div>
        </section>
    );
};

export default ProofCounters;
