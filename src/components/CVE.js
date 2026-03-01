import React, { useState } from 'react';
import { Badge, Card, Col, Row } from 'react-bootstrap';
import { FaCalendarAlt, FaExternalLinkAlt } from 'react-icons/fa';
import '../App.css';
import { CVES } from '../data';
import { getSeverityColor } from '../utils';

const CVE = () => {
  const [showAllCVEs, setShowAllCVEs] = useState(false);
  const displayedCVEs = showAllCVEs ? CVES : CVES.slice(0, 3);

  return (
    <section id="cves" className="my-5">
      <h2 className="mb-4 text-center title-enhanced">Security Vulnerabilities (CVEs)</h2>

      <Row>
        {displayedCVEs.map((cve) => (
          <Col key={cve.id} xs={12} md={6} lg={4} className="mb-4">
            <Card className="cve-card h-100 border-0 shadow-sm">
              <Card.Body className="d-flex flex-column">
                <div className="cve-header">
                  <div className="cvss-circle-container">
                    <div
                      className="cvss-circle-wrap"
                      aria-label={`CVSS ${cve.cvss} (${cve.severity})`}
                    >
                      <svg className="cvss-circle" viewBox="0 0 100 100" aria-hidden="true" focusable="false">
                        <circle className="cvss-circle-bg" cx="50" cy="50" r="45" />
                        <circle
                          className={`cvss-circle-progress ${cve.severity.toLowerCase()}`}
                          cx="50"
                          cy="50"
                          r="45"
                          style={{ strokeDasharray: `${(cve.cvss / 10) * 283} 283` }}
                        />
                      </svg>
                      <div className="cvss-score-overlay" aria-hidden="true">
                        {cve.cvss}
                      </div>
                    </div>
                    <Badge bg={getSeverityColor(cve.severity)} className="mt-2">
                      {cve.severity}
                    </Badge>
                  </div>
                </div>

                <div className="cve-content flex-grow-1">
                  <h5 className="cve-id">{cve.id}</h5>
                  <h6 className="cve-title">{cve.plugin}</h6>
                  <p className="cve-description">{cve.description}</p>

                  <div className="cve-meta">
                    <small className="text-muted">
                      <FaCalendarAlt className="me-2" aria-hidden="true" focusable="false" />
                      {cve.date}
                    </small>
                  </div>
                </div>

                <div className="mt-auto">
                  <a
                    href={cve.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-danger btn-sm w-100"
                  >
                    View on Wordfence{' '}
                    <FaExternalLinkAlt className="ms-1" aria-hidden="true" focusable="false" />
                  </a>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {CVES.length > 3 && (
        <div className="text-center mt-4">
          <button
            className="btn btn-outline-secondary btn-lg"
            onClick={() => setShowAllCVEs(!showAllCVEs)}
          >
            {showAllCVEs ? 'Show Less CVEs' : `Show All ${CVES.length} CVEs`}
          </button>
        </div>
      )}
    </section>
  );
};

export default CVE;
