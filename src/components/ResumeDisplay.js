import React, { useMemo, useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import {
  FaCopy,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
} from 'react-icons/fa';
import '../resume.css';
import ResumePreview from './ResumePreview';
import { CONTACT_DETAILS, RESUME_SOCIAL_PROFILE_IDS, SOCIAL_PROFILES_BY_ID } from '../data';

const RESUME_URL = './PDF/Waris_Resume_2026.pdf';

const RESUME_SOCIAL_PROFILES = RESUME_SOCIAL_PROFILE_IDS
  .map((id) => SOCIAL_PROFILES_BY_ID[id])
  .filter(Boolean);

const toTelHref = (value = '') => `tel:${value.replace(/[^\d+]/g, '')}`;

const copyToClipboard = async (value) => {
  if (!value) {
    throw new Error('No value to copy');
  }

  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(value);
    return;
  }

  const textArea = document.createElement('textarea');
  textArea.value = value;
  textArea.setAttribute('readonly', '');
  textArea.style.position = 'absolute';
  textArea.style.left = '-9999px';
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand('copy');
  document.body.removeChild(textArea);
};

const ResumeDisplay = () => {
  const [feedbackMessage, setFeedbackMessage] = useState('');

  const emailDetail = CONTACT_DETAILS.find((detail) => detail.id === 'email');
  const phoneDetail = CONTACT_DETAILS.find((detail) => detail.id === 'phone');
  const locationDetail = CONTACT_DETAILS.find((detail) => detail.id === 'location');

  const linkedInProfile = RESUME_SOCIAL_PROFILES.find((profile) => profile.id === 'linkedin');
  const githubProfile = RESUME_SOCIAL_PROFILES.find((profile) => profile.id === 'github');
  const mediumProfile = RESUME_SOCIAL_PROFILES.find((profile) => profile.id === 'medium');
  const researchGateProfile = RESUME_SOCIAL_PROFILES.find((profile) => profile.id === 'researchgate');

  const contactActions = useMemo(
    () => [
      emailDetail && {
        key: 'email',
        icon: <FaEnvelope aria-hidden="true" focusable="false" />,
        label: 'Email',
        value: emailDetail.display,
        href: emailDetail.href,
      },
      phoneDetail && {
        key: 'phone',
        icon: <FaPhone aria-hidden="true" focusable="false" />,
        label: 'Phone',
        value: phoneDetail.display,
        href: toTelHref(phoneDetail.display),
      },
    ].filter(Boolean),
    [emailDetail, phoneDetail]
  );

  const handleCopy = async (value, label) => {
    try {
      await copyToClipboard(value);
      setFeedbackMessage(`${label} copied`);
      window.setTimeout(() => setFeedbackMessage(''), 1600);
    } catch {
      setFeedbackMessage(`Unable to copy ${label.toLowerCase()}`);
      window.setTimeout(() => setFeedbackMessage(''), 1600);
    }
  };

  return (
    <section id="resume" className="my-4 resume-shell">
      <header className="resume-section-header text-center">
        <h2 className="mb-4 text-center title-enhanced">My Resume</h2>
      </header>

      <Row className="g-4 align-items-stretch resume-layout-row">
        <Col xs={12} xl={7} className="order-1">
          <ResumePreview resumeUrl={RESUME_URL} />
        </Col>

        <Col xs={12} xl={5} className="order-2">
          <article className="resume-contact-terminal">
            <header className="resume-terminal-head">
              <div className="resume-terminal-dots" aria-hidden="true">
                <span className="dot red"></span>
                <span className="dot amber"></span>
                <span className="dot green"></span>
              </div>
              <span className="resume-terminal-title">contact.sh - bash</span>
            </header>

            <div className="resume-terminal-body">
              <p className="terminal-line terminal-prompt">waris_m@portfolio:~$ cat contact.txt</p>

              <p className="terminal-section-title"># CONTACT INFORMATION</p>
              {contactActions.map((contact) => (
                <div className="terminal-kv-row" key={contact.key}>
                  <span className="terminal-key">{contact.label}:</span>
                  <a href={contact.href} className="terminal-value">
                    {contact.value}
                  </a>
                  <Button
                    type="button"
                    className="resume-copy-btn terminal-copy-btn"
                    onClick={() => handleCopy(contact.value, contact.label)}
                    aria-label={`Copy ${contact.label}`}
                  >
                    <FaCopy aria-hidden="true" focusable="false" />
                  </Button>
                </div>
              ))}

              {locationDetail && (
                <div className="terminal-kv-row">
                  <span className="terminal-key">LOCATION:</span>
                  <span className="terminal-value">
                    <FaMapMarkerAlt className="me-1" />
                    {locationDetail.display}
                  </span>
                </div>
              )}

              <p className="terminal-section-title"># SOCIAL NETWORKS</p>
              {linkedInProfile && (
                <div className="terminal-kv-row">
                  <span className="terminal-key">
                    <FaLinkedin className="me-1" />
                    LinkedIn:
                  </span>
                  <a href={linkedInProfile.href} target="_blank" rel="noopener noreferrer" className="terminal-value">
                    linkedin.com/in/waris-damkham
                  </a>
                </div>
              )}
              {githubProfile && (
                <div className="terminal-kv-row">
                  <span className="terminal-key">
                    <FaGithub className="me-1" />
                    GitHub:
                  </span>
                  <a href={githubProfile.href} target="_blank" rel="noopener noreferrer" className="terminal-value">
                    github.com/Waariss
                  </a>
                </div>
              )}
              {mediumProfile && (
                <div className="terminal-kv-row">
                  <span className="terminal-key">Medium:</span>
                  <a href={mediumProfile.href} target="_blank" rel="noopener noreferrer" className="terminal-value">
                    medium.com/@waaris_m
                  </a>
                </div>
              )}
              {researchGateProfile && (
                <div className="terminal-kv-row">
                  <span className="terminal-key">ResearchGate:</span>
                  <a href={researchGateProfile.href} target="_blank" rel="noopener noreferrer" className="terminal-value">
                    researchgate.net/profile/Waris-Damkham
                  </a>
                </div>
              )}

              <p className="terminal-line terminal-feedback" aria-live="polite">
                {feedbackMessage || 'waris_m@portfolio:~$'}
              </p>
            </div>
          </article>
        </Col>
      </Row>
    </section>
  );
};

export default ResumeDisplay;
