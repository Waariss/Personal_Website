import React, { useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import '../resume.css';
import { CONTACT_DETAILS, RESUME_SOCIAL_PROFILE_IDS, SOCIAL_PROFILES_BY_ID } from '../data';

const RESUME_URL = './PDF/Waris_Resume_2026.pdf';
const RESUME_SOCIAL_PROFILES = RESUME_SOCIAL_PROFILE_IDS
  .map((id) => SOCIAL_PROFILES_BY_ID[id])
  .filter(Boolean);

const ResumeDisplay = () => {
  const [isResumeLoaded, setIsResumeLoaded] = useState(false);

  return (
    <section id="resume" className="my-4">
      <h2 className="mb-4 text-center title-enhanced">My Resume</h2>
      <Card className="mb-3 border-0 shadow-sm terminal-card">
        <Card.Body className="p-0">
          <Row className="g-0">
            <Col xs={12} lg={7}>
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
                  {!isResumeLoaded ? (
                    <div className="terminal-placeholder">
                      <p className="terminal-placeholder-text">
                        PDF preview loads on demand to keep the homepage fast.
                      </p>
                      <div className="d-flex gap-2 flex-wrap terminal-placeholder-actions">
                        <Button variant="light" onClick={() => setIsResumeLoaded(true)}>
                          Load Resume PDF
                        </Button>
                        <a
                          className="btn btn-outline-light"
                          href={RESUME_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Open in New Tab
                        </a>
                        <a className="btn btn-outline-light" href={RESUME_URL} download>
                          Download
                        </a>
                      </div>
                    </div>
                  ) : (
                    <iframe
                      src={RESUME_URL}
                      loading="lazy"
                      width="100%"
                      height="685"
                      className="resume-iframe"
                      title="Resume of Waris"
                    ></iframe>
                  )}
                </div>
              </div>
            </Col>
            <Col xs={12} lg={5} className="terminal-sidebar">
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
                      {CONTACT_DETAILS.map((detail) => (
                        <div key={detail.id} className="terminal-info-line">
                          <span className="terminal-key">{detail.label}:</span>
                          {detail.href ? (
                            <a href={detail.href} className="terminal-value">
                              {detail.display}
                            </a>
                          ) : (
                            <span className="terminal-value">{detail.display}</span>
                          )}
                        </div>
                      ))}
                    </div>

                    <div className="terminal-info-block">
                      <span className="terminal-comment"># SOCIAL NETWORKS</span>
                      {RESUME_SOCIAL_PROFILES.map((profile) => (
                        <div key={profile.id} className="terminal-info-line">
                          <span className="terminal-key">{profile.resumeLabel || profile.label}:</span>
                          <a
                            href={profile.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="terminal-value"
                          >
                            {profile.display}
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="terminal-prompt-line terminal-prompt-line-spaced">
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
