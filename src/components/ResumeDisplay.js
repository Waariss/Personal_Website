import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import '../resume.css';

const ResumeDisplay = () => {
    return (
        <section id="resume" className="my-4">
            <h1 className="mb-4 text-center title-enhanced">My Resume</h1>
            <Card className="mb-3 border-0 shadow-sm terminal-card">
                <Card.Body className="p-0">
                    <Row className="g-0">
                        <Col xs={7}>
                            <div className="terminal-window">
                                <div className="terminal-header">
                                    <div className="terminal-buttons">
                                        <span className="terminal-button red"></span>
                                        <span className="terminal-button yellow"></span>
                                        <span className="terminal-button green"></span>
                                    </div>
                                    <div className="terminal-title">resume.pdf — waaris_m@portfolio</div>
                                </div>
                                <div className="terminal-content">
                                    <iframe 
                                        src="./PDF/Waris_Resume_2025.pdf" 
                                        width="100%" 
                                        height="685px" 
                                        style={{ border: "none" }}
                                        title="Resume of Waris"
                                    ></iframe>
                                </div>
                            </div>
                        </Col>
                        <Col xs={5} className="terminal-sidebar">
                            <div className="terminal-contact-window">
                                <div className="terminal-header">
                                    <div className="terminal-buttons">
                                        <span className="terminal-button red"></span>
                                        <span className="terminal-button yellow"></span>
                                        <span className="terminal-button green"></span>
                                    </div>
                                    <div className="terminal-title">contact.sh — bash</div>
                                </div>
                                <div className="terminal-contact-content">
                                    <div className="terminal-prompt-line">
                                        <span className="terminal-user">waaris_m@portfolio</span>
                                        <span className="terminal-colon">:</span>
                                        <span className="terminal-path">~</span>
                                        <span className="terminal-dollar">$</span>
                                        <span className="terminal-command"> cat contact.txt</span>
                                    </div>
                                    
                                    <div className="terminal-output">
                                        <div className="terminal-info-block">
                                            <span className="terminal-comment"># CONTACT INFORMATION</span>
                                            <div className="terminal-info-line">
                                                <span className="terminal-key">EMAIL:</span>
                                                <a href="mailto:waris.dam@outlook.com" className="terminal-value">waris.dam@outlook.com</a>
                                            </div>
                                            <div className="terminal-info-line">
                                                <span className="terminal-key">PHONE:</span>
                                                <span className="terminal-value">+66 63 954 4447</span>
                                            </div>
                                            <div className="terminal-info-line">
                                                <span className="terminal-key">LOCATION:</span>
                                                <span className="terminal-value">Bangkok, Thailand 🇹🇭</span>
                                            </div>
                                        </div>

                                        <div className="terminal-info-block">
                                            <span className="terminal-comment"># SOCIAL NETWORKS</span>
                                            <div className="terminal-info-line">
                                                <span className="terminal-key">LinkedIn:</span>
                                                <a href="https://www.linkedin.com/in/waris-damkham/" target="_blank" rel="noreferrer" className="terminal-value">
                                                    linkedin.com/in/waris-damkham
                                                </a>
                                            </div>
                                            <div className="terminal-info-line">
                                                <span className="terminal-key">GitHub:</span>
                                                <a href="https://github.com/Waariss" target="_blank" rel="noreferrer" className="terminal-value">
                                                    github.com/Waariss
                                                </a>
                                            </div>
                                            <div className="terminal-info-line">
                                                <span className="terminal-key">Medium:</span>
                                                <a href="https://medium.com/@waaris_m" target="_blank" rel="noreferrer" className="terminal-value">
                                                    medium.com/@waaris_m
                                                </a>
                                            </div>
                                            <div className="terminal-info-line">
                                                <span className="terminal-key">ResearchGate:</span>
                                                <a href="https://www.researchgate.net/profile/Waris-Damkham" target="_blank" rel="noreferrer" className="terminal-value">
                                                    researchgate.net/profile/Waris-Damkham
                                                </a>
                                            </div>
                                            <div className="terminal-info-line">
                                                <span className="terminal-key">Credly:</span>
                                                <a href="https://www.credly.com/users/waris-damkham.196ff471" target="_blank" rel="noreferrer" className="terminal-value">
                                                    credly.com/users/waris-damkham
                                                </a>
                                            </div>
                                            <div className="terminal-info-line">
                                                <span className="terminal-key">Credential:</span>
                                                <a href="https://www.credential.net/profile/waarism/wallet#gs.ibia2y" target="_blank" rel="noreferrer" className="terminal-value">
                                                    credential.net/profile/waarism
                                                </a>
                                            </div>
                                            <div className="terminal-info-line">
                                                <span className="terminal-key">TryHackMe:</span>
                                                <a href="https://tryhackme.com/p/waris.dam" target="_blank" rel="noreferrer" className="terminal-value">
                                                    tryhackme.com/p/waris.dam
                                                </a>
                                            </div>
                                            <div className="terminal-info-line">
                                                <span className="terminal-key">HackTheBox:</span>
                                                <a href="https://app.hackthebox.com/profile/1458142" target="_blank" rel="noreferrer" className="terminal-value">
                                                    hackthebox.com/profile/1458142
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="terminal-prompt-line" style={{ marginTop: '15px' }}>
                                        <span className="terminal-user">waaris_m@portfolio</span>
                                        <span className="terminal-colon">:</span>
                                        <span className="terminal-path">~</span>
                                        <span className="terminal-dollar">$</span>
                                        <span className="terminal-cursor">_</span>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </section>
    );
};

export default ResumeDisplay;