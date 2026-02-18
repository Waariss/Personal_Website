import React from 'react';
import { Container, Button, Badge, Stack } from 'react-bootstrap';
import '../App.css';

const Home = () => {
    const coreRow1 = ['OSCP+', 'OSCP', 'CPTS', 'CWES', 'CJCA', 'CRTP', 'BSCP', 'eWPTX'];
    const coreRow2 = ['PNPT', 'PMPA', 'PSAA', 'ASCP', 'ACP', 'PT1', 'SEC1', 'CDL', 'GHF'];
    
    const proofHighlights = [
        { text: 'Black Hat Asia 2026 Arsenal Speaker', link: '#speaker' },
        { text: '18×CVEs', link: '#cves' },
        { text: '3×IEEE Publications', link: '#publications' }
    ];

    return (
        <section id="home" className="text-center my-4 home-section">
            <Container className="jumbotron-style">
                <h1 className="display-4">Waris Damkham</h1>
                <p className="lead">Offensive Security Engineer &amp; AI Security Engineer</p>
                <p className="mb-4" style={{fontSize: '1.1rem'}}>Red Teaming • AI Security • Web/AppSec</p>
                
                <Stack direction="horizontal" gap={2} className="justify-content-center flex-wrap my-3">
                    {coreRow1.map((credential) => (
                        <Badge bg="light" text="dark" key={credential} className="px-3 py-2" style={{ fontSize: '1rem' }}>
                            {credential}
                        </Badge>
                    ))}
                </Stack>
                <Stack direction="horizontal" gap={2} className="justify-content-center flex-wrap my-3">
                    {coreRow2.map((credential) => (
                        <Badge bg="light" text="dark" key={credential} className="px-3 py-2" style={{ fontSize: '1rem' }}>
                            {credential}
                        </Badge>
                    ))}
                </Stack>
                
                <Stack direction="horizontal" gap={2} className="justify-content-center flex-wrap my-3">
                    {proofHighlights.map((proof) => (
                        <a 
                            key={proof.text} 
                            href={proof.link} 
                            className="text-decoration-none"
                            style={{ cursor: 'pointer' }}
                        >
                            <Badge 
                                bg="light" 
                                text="dark" 
                                className="px-3 py-2 proof-badge-clickable" 
                                style={{ fontSize: '0.95rem' }}
                            >
                                {proof.text}
                            </Badge>
                        </a>
                    ))}
                </Stack>
                
                <div className="d-flex justify-content-center gap-3 flex-wrap mt-4">
                    <Button variant="light" href="#resume" className="text-dark fw-semibold">Resume</Button>
                    <Button variant="outline-light" href="mailto:waris.dam@outlook.com" className="fw-semibold">Email</Button>
                </div>
            </Container>
        </section>
    );
};

export default Home;
