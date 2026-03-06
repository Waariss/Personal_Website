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

const primaryEmailDetail = CONTACT_DETAILS.find((detail) => detail.id === 'email');
const primaryEmail = primaryEmailDetail?.display ?? '';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer-container footer-premium">
      <Container className="footer-content">
        <div className="footer-section footer-col">
          <span className="footer-label">Contact</span>
          {primaryEmailDetail?.href ? (
            <a href={primaryEmailDetail.href} className="footer-email-link">
              {primaryEmail}
            </a>
          ) : (
            <p className="mb-0">{primaryEmail}</p>
          )}
        </div>

        <div className="footer-section footer-col footer-brand-col">
          <span className="footer-brand-name">Waris Damkham</span>
          <p className="footer-brand-copy mb-0">© {year} Offensive Security Engineer</p>
        </div>

        <div className="footer-section footer-col footer-icons">
          <span className="footer-label">Profiles</span>
          {FOOTER_SOCIAL_PROFILES.map((profile) => {
            const Icon = FOOTER_ICON_MAP[profile.footerIcon];

            return (
              <a
                key={profile.id}
                href={profile.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon footer-social-link"
                aria-label={profile.label}
              >
                {Icon ? <Icon className="footer-social-icon" /> : null}
              </a>
            );
          })}
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
