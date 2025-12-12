import React from 'react';
import { Container, Button, Badge, Stack } from 'react-bootstrap';
import '../App.css';

const Home = () => {
    return (
        <section id="home" className="text-center my-4 home-section">
            <Container className="jumbotron-style">
                <h1 className="display-4">Waris Damkham</h1>
                <p className="lead">Offensive Security Engineer &amp; AI Security Researcher</p>
                <Stack direction="horizontal" gap={2} className="justify-content-center flex-wrap my-3">
                    {['OSCP+', 'OSCP', 'PNPT', 'PMPA', 'PSAA', 'eWPTX', 'CRTP', 'CPTS', 'CWES', 'CJCA', 'BSCP', 'PT1', 'ASCP', 'ACP', 'GHF', 'CDL', 'HCCDA-Tech', 'CKBPro', 'C-APIPen', 'C-AI/MLPen', 'CCPenX-AWS', 'CAPenX', 'CMPen-Android & iOS', 'CNPen', 'CAPen', 'CAP', 'CRTA', 'CRT-ID', 'MCRTA', 'CVE-2025-12782', 'CVE-2025-14166', 'CVE-2025-14068'].map((credential) => (
                        <Badge bg="light" text="dark" key={credential} className="px-3 py-2 hero-badge" style={{ fontSize: '0.9rem' }}>
                            {credential}
                        </Badge>
                    ))}
                </Stack>
                <p>Explore my skills, research, and hands-on security projects below.</p>
                <div className="d-flex justify-content-center gap-3 flex-wrap mt-4">
                    <Button variant="light" href="#resume" className="text-dark fw-semibold">Resume</Button>
                </div>
            </Container>
        </section>
    );
};

export default Home;