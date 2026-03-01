import React, { useState } from 'react';
import { Button, Card, Col, Image, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';
import '../App.css';
import {
  ABOUT_BADGES,
  ABOUT_BADGE_PREVIEW_COUNT,
  ABOUT_PROFILE_IMAGES,
  ABOUT_SOCIAL_PROFILE_IDS,
  SOCIAL_PROFILES_BY_ID,
} from '../data';

const ABOUT_SOCIAL_PROFILES = ABOUT_SOCIAL_PROFILE_IDS
  .map((id) => SOCIAL_PROFILES_BY_ID[id])
  .filter(Boolean);

const isExternalLink = (href) => /^https?:/i.test(href);

const About = () => {
  const [profileImage, setProfileImage] = useState(ABOUT_PROFILE_IMAGES.default);
  const [showAllBadges, setShowAllBadges] = useState(false);
  const visibleBadges = showAllBadges
    ? ABOUT_BADGES
    : ABOUT_BADGES.slice(0, ABOUT_BADGE_PREVIEW_COUNT);

  return (
    <section id="about" className="my-5">
      <Card className="border-0 shadow-sm about-card mb-4">
        <Card.Body>
          <Row>
            <Col xs={12} md={4} className="mb-3">
              <Image
                src={profileImage}
                alt="Portrait of Waris Damkham"
                onMouseEnter={() => setProfileImage(ABOUT_PROFILE_IMAGES.hover)}
                onMouseLeave={() => setProfileImage(ABOUT_PROFILE_IMAGES.default)}
                roundedCircle
                fluid
                className="profile-image"
              />
            </Col>
            <Col xs={12} md={8}>
              <Card.Title>
                <h2 className="title">About Me</h2>
              </Card.Title>
              <Card.Text>
                I am an <strong>Offensive Security Engineer</strong> and <strong>AI Security Engineer</strong> with hands-on experience across enterprise penetration testing and applied AI and security research.

                I deliver end-to-end assessments across <strong>Web, API, Mobile, and Network</strong> environments, and contribute to <strong>Red Team operations</strong> focused on real-world attack scenarios, identity abuse, and security posture improvement. My work also includes <strong>security automation</strong>, critical vulnerability response support, and <strong>AI security readiness</strong> for AI-enabled applications.

                I conduct applied identity and access security work on <strong>Microsoft 365 Conditional Access</strong> policy enforcement, with tooling selected for <strong>Black Hat Asia 2026 (Arsenal)</strong>.

                Open to global opportunities in Red Teaming, Identity Security, and AI Security.
              </Card.Text>
              <div className="d-flex mt-3 icon-section">
                {ABOUT_SOCIAL_PROFILES.map((profile) => {
                  const linkProps = isExternalLink(profile.href)
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {};

                  return (
                    <OverlayTrigger
                      key={profile.id}
                      overlay={<Tooltip id={`tooltip-${profile.id}`}>{profile.tooltip}</Tooltip>}
                    >
                      <Button variant="link" href={profile.href} {...linkProps}>
                        <Image
                          alt={profile.imageAlt}
                          src={profile.imageSrc}
                          width="37.5"
                          height="37.5"
                        />
                      </Button>
                    </OverlayTrigger>
                  );
                })}
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      <Card className="border-0 shadow-sm mt-4">
        <Card.Body>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h4 className="mb-0">Highlighted Certifications</h4>
            <Button
              variant="outline-primary"
              size="sm"
              onClick={() => setShowAllBadges((currentValue) => !currentValue)}
              aria-expanded={showAllBadges}
              className="cert-toggle-btn"
            >
              {showAllBadges ? 'Hide' : 'Show all certifications'}
            </Button>
          </div>

          <div className="badge-section d-flex flex-wrap justify-content-center align-items-center">
            {visibleBadges.map((badge) => (
              <div key={badge.href} className="badge-item mx-2 my-2">
                <OverlayTrigger
                  overlay={<Tooltip id={`tooltip-${badge.alt.replace(/[^a-zA-Z0-9]+/g, '-').toLowerCase()}`}>{badge.alt}</Tooltip>}
                  placement="top"
                >
                  <a href={badge.href} target="_blank" rel="noopener noreferrer" aria-label={badge.alt}>
                    <Image src={badge.img} width="98" height="98" alt={badge.alt} loading="lazy" />
                  </a>
                </OverlayTrigger>
              </div>
            ))}
          </div>
        </Card.Body>
      </Card>
    </section>
  );
};

export default About;
