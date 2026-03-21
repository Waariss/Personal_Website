import React, { useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { FaExternalLinkAlt } from 'react-icons/fa';
import '../App.css';
import { EDUCATION_ENTRIES } from '../data';

const ImageLogo = ({ src, alt, width, height }) => (
  <img
    src={src}
    alt={alt}
    width={width}
    height={height}
    className="rounded-circle img-fluid edu-logo"
  />
);

const isExternalLink = (href = '') => /^https?:/i.test(href);
const isHackTheBoxEntry = (title = '') => /hackthebox/i.test(title);

const getLinkCardDetail = (linkText = '') => {
  const normalized = linkText.toLowerCase();

  if (normalized.includes('portfolio')) {
    return 'University application portfolio and supporting academic showcase.';
  }

  if (normalized.includes('pwned rooms')) {
    return 'Hands-on HTB machine progress and practical exploitation walkthroughs.';
  }

  return 'Quick access link';
};

const ActivityCard = ({ link, name, detail, time }) => {
  const linkProps = isExternalLink(link) ? { target: '_blank', rel: 'noopener noreferrer' } : {};

  return (
    <article className="edu2-activity-card">
      <header className="edu2-activity-head">
        {link ? (
          <a href={link} className="edu2-activity-name" {...linkProps}>
            {name}
            <FaExternalLinkAlt className="ms-2" aria-hidden="true" />
          </a>
        ) : (
          <h3 className="edu2-activity-name mb-0">{name}</h3>
        )}
        {time ? <span className="edu2-activity-time">{time}</span> : null}
      </header>
      <p className="edu2-activity-detail">{detail}</p>
    </article>
  );
};

const HtbLinkCard = ({ link, name, detail }) => (
  <a
    href={link}
    className="htb-edu-link-card"
    target="_blank"
    rel="noopener noreferrer"
  >
    <span className="htb-edu-link-title">
      {name}
      <FaExternalLinkAlt className="ms-2" aria-hidden="true" />
    </span>
    <span className="htb-edu-link-detail">{detail}</span>
  </a>
);

const EducationEntry = ({ title, subtitle, activities, logo, links }) => {
  const [showAllActivities, setShowAllActivities] = useState(false);
  const actionLinks = links || [];
  const mergedItems = [
    ...actionLinks.map((link) => ({
      link: link.href,
      name: link.text,
      detail: getLinkCardDetail(link.text),
    })),
    ...activities,
  ];

  const isHTB = isHackTheBoxEntry(title);
  const visibleActivities = showAllActivities
      ? mergedItems
      : mergedItems.slice(0, 1);
  const hasMoreActivities = !isHTB && mergedItems.length > 1;

  return (
    <Card className="mb-4 border-0 shadow-sm edu2-entry-card">
      <Card.Body className="edu2-entry-body">
        <Row className="g-4 align-items-start">
          <Col xs={12} md={3} lg={2} className="d-flex justify-content-center justify-content-md-start">
            <div className="edu2-logo-shell">
              <ImageLogo {...logo} />
            </div>
          </Col>

          <Col xs={12} md={9} lg={10}>
            <header className="edu2-header">
              <h3 className="edu2-title">{title}</h3>
              <div className="edu2-subtitle-wrap">
                {subtitle.map((text) => (
                  <span key={text} className="edu2-subtitle-pill">
                    {text}
                  </span>
                ))}
              </div>
            </header>

            {isHTB ? (
              <div className="htb-edu-panel">
                <p className="htb-edu-intro">
                  Offensive hands-on track across profile progress, labs, and practical room completions.
                </p>
                <div className="htb-edu-grid">
                  {mergedItems.slice(0, 4).map((item) => (
                    <HtbLinkCard
                      key={`${item.name}-${item.link}`}
                      link={item.link}
                      name={item.name}
                      detail={item.detail}
                    />
                  ))}
                </div>
              </div>
            ) : (
              <div className="edu2-activities-grid">
                {visibleActivities.map((activity) => (
                  <ActivityCard key={`${activity.name}-${activity.link || activity.detail}`} {...activity} />
                ))}
              </div>
            )}

            {hasMoreActivities && (
              <div className="edu2-toggle-wrap">
                <button
                  type="button"
                  className="edu2-toggle-btn"
                  onClick={() => setShowAllActivities((current) => !current)}
                >
                  {showAllActivities
                    ? 'Show less activities'
                    : `Show ${activities.length - visibleActivities.length} more activities`}
                </button>
              </div>
            )}

          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

const Education = () => (
  <section id="education" className="my-4">
    <h2 className="mb-4 text-center title-enhanced">Education</h2>
    {EDUCATION_ENTRIES.map((entry) => (
      <EducationEntry key={entry.title} {...entry} />
    ))}
  </section>
);

export default Education;
