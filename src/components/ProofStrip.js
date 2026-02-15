import React from 'react';
import { Row, Col, Card, Badge } from 'react-bootstrap';
import { FaShieldAlt, FaUniversity, FaMicrophone, FaGithub, FaFilePdf } from 'react-icons/fa';
import '../App.css';

const tiles = [
  {
    label: 'Black Hat Asia 2026 Arsenal',
    sub: 'Accepted',
    href: '#speaker',
    icon: <FaMicrophone className="me-2" />,
    tone: 'danger',
  },
  {
    label: 'CVEs',
    sub: 'Public advisories',
    href: '#cves',
    icon: <FaShieldAlt className="me-2" />,
    tone: 'secondary',
  },
  {
    label: 'IEEE Publications',
    sub: 'Peer-reviewed',
    href: '#publications',
    icon: <FaUniversity className="me-2" />,
    tone: 'primary',
  },
  {
    label: 'GitHub',
    sub: 'Repos & tooling',
    href: 'https://github.com/Waariss',
    external: true,
    icon: <FaGithub className="me-2" />,
    tone: 'dark',
  },
  {
    label: 'Resume',
    sub: 'PDF',
    href: '#resume',
    icon: <FaFilePdf className="me-2" />,
    tone: 'info',
  },
];

const ProofStrip = () => {
  return (
    <section className="my-4" aria-label="Proof highlights">
      <Row className="g-3">
        {tiles.map((t) => (
          <Col key={t.label} xs={12} md={6} lg={4} xl={true}>
            <Card className="h-100 border-0 shadow-sm proof-tile-card">
              <a
                href={t.href}
                target={t.external ? '_blank' : undefined}
                rel={t.external ? 'noopener noreferrer' : undefined}
                className="text-decoration-none text-reset"
                aria-label={t.external ? `${t.label} (opens in a new tab)` : t.label}
              >
                <Card.Body className="d-flex align-items-center justify-content-between">
                  <div className="d-flex flex-column">
                    <div className="d-flex align-items-center">
                      {t.icon}
                      <span className="fw-semibold">{t.label}</span>
                    </div>
                    <small className="text-muted mt-1">{t.sub}</small>
                  </div>
                  <Badge bg={t.tone}>Proof</Badge>
                </Card.Body>
              </a>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default ProofStrip;

