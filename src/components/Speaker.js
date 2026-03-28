import React, { useMemo, useState } from 'react';
import { Badge, Card, Col, Row } from 'react-bootstrap';
import {
  FaBullhorn,
  FaCalendarAlt,
  FaExternalLinkAlt,
  FaFileAlt,
  FaMapMarkerAlt,
} from 'react-icons/fa';
import '../App.css';
import { TALKS } from '../data';
import { getEventTypeColor, getTalkStatus, parseDateLabelValue } from '../utils';

const renderTalkLinkIcon = (icon) => {
  const className = 'ms-1';

  if (icon && icon.includes('file')) {
    return <FaFileAlt className={className} aria-hidden="true" focusable="false" />;
  }

  return <FaExternalLinkAlt className={className} aria-hidden="true" focusable="false" />;
};

const renderTalkEvent = (eventLabel) => {
  const lines = String(eventLabel || '')
    .split(' · ')
    .map((line) => line.trim())
    .filter(Boolean);

  return (
    <span className="talk-event-lines">
      {lines.map((line, index) => (
        <span
          key={`${line}-${index + 1}`}
          className={`talk-event-line ${index > 0 ? 'talk-event-line-break' : ''}`}
        >
          {line}
        </span>
      ))}
    </span>
  );
};

const Speaker = () => {
  const [showAllTalks, setShowAllTalks] = useState(false);
  const sortedTalks = useMemo(
    () => [...TALKS].sort((a, b) => parseDateLabelValue(b.date) - parseDateLabelValue(a.date)),
    []
  );
  const displayedTalks = showAllTalks ? sortedTalks : sortedTalks.slice(0, 3);

  return (
    <section id="speaker" className="my-5">
      <h2 className="mb-3 text-center title-enhanced">Talks & Contributions</h2>

      <Row>
        {displayedTalks.map((talk) => {
          const computedStatus = getTalkStatus(talk);
          return (
            <Col key={`${talk.event}-${talk.title}-${talk.date}`} xs={12} md={6} lg={4} className="mb-4">
              <Card className="talk-card h-100 border-0 shadow-sm">
                <Card.Body className="d-flex flex-column">
                  <div className="talk-header">
                    <Badge bg={getEventTypeColor(talk.type)} className="event-badge mb-3">
                      {talk.type}
                    </Badge>
                    <Badge bg="secondary" className="status-badge mb-3 ms-2">
                      {computedStatus}
                    </Badge>
                  </div>

                  <div className="talk-content flex-grow-1">
                    <h5 className="talk-title">{talk.title}</h5>
                    <h6 className="talk-event">
                      <FaBullhorn className="talk-event-icon" aria-hidden="true" focusable="false" />
                      {renderTalkEvent(talk.event)}
                    </h6>
                    <p className="talk-description">{talk.description}</p>

                    <div className="talk-meta">
                      <small className="text-muted d-block mb-1">
                        <FaMapMarkerAlt className="me-2" aria-hidden="true" focusable="false" />
                        {talk.location}
                      </small>
                      <small className="text-muted d-block">
                        <FaCalendarAlt className="me-2" aria-hidden="true" focusable="false" />
                        {talk.date}
                      </small>
                    </div>
                  </div>

                  {talk.links && talk.links.length > 0 && (
                    <div className="mt-auto">
                      <div className="d-flex gap-2 flex-wrap">
                        {talk.links.map((link) => (
                          <a
                            key={`${link.url}-${link.label}`}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`btn btn-outline-${link.color || 'primary'} btn-sm flex-fill proof-link-btn`}
                          >
                            {link.label} {renderTalkLinkIcon(link.icon)}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>

      {TALKS.length > 3 && (
        <div className="text-center mt-4">
          <button
            className="btn btn-outline-secondary btn-lg section-toggle-btn"
            onClick={() => setShowAllTalks(!showAllTalks)}
          >
            {showAllTalks ? 'Show Less Talks' : `Show All ${TALKS.length} Talks`}
          </button>
        </div>
      )}
    </section>
  );
};

export default Speaker;
