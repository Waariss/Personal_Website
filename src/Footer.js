import React from 'react';
import { Container } from 'react-bootstrap';
import { AiFillGoogleCircle, AiFillProject } from 'react-icons/ai';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import './App.css';
import { CONTACT_DETAILS, FOOTER_SOCIAL_PROFILE_IDS, SOCIAL_PROFILES_BY_ID } from './data';

const FOOTER_ICON_MAP = {
  envelope: FaEnvelope,
  github: FaGithub,
  linkedin: FaLinkedin,
  researchgate: AiFillProject,
  'google-scholar': AiFillGoogleCircle,
};

const FOOTER_SOCIAL_PROFILES = FOOTER_SOCIAL_PROFILE_IDS
  .map((id) => SOCIAL_PROFILES_BY_ID[id])
  .filter(Boolean);

const primaryEmail = CONTACT_DETAILS.find((detail) => detail.id === 'email')?.display ?? '';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="footer-container">
      <Container className="footer-content">
        <div className="footer-section footer-text">
          <p>Email: {primaryEmail}</p>
        </div>
        <div className="footer-section footer-text">
          <p>© {year} by Waris Damkham</p>
        </div>
        <div className="footer-section footer-icons">
          {FOOTER_SOCIAL_PROFILES.map((profile) => {
            const Icon = FOOTER_ICON_MAP[profile.footerIcon];

            return (
              <a
                key={profile.id}
                href={profile.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label={profile.label}
              >
                {Icon ? <Icon className="text-secondary mx-2" /> : null}
              </a>
            );
          })}
        </div>
      </Container>
    </div>
  );
};

export default Footer;
