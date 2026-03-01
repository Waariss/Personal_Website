import React from 'react';
import { Badge, Card, Col, Row } from 'react-bootstrap';
import { FaCalendar, FaExternalLinkAlt, FaUniversity } from 'react-icons/fa';
import '../App.css';
import { PUBLICATIONS } from '../data';

const Publication = () => (
  <section id="publications" className="my-5">
    <h2 className="mb-4 text-center title-enhanced">Academic Publications</h2>
    <p className="text-center text-muted mb-4">
      Research papers presented at international IEEE conferences
    </p>

    <Row>
      {PUBLICATIONS.map((publication) => (
        <Col key={`${publication.conference}-${publication.title}`} xs={12} md={6} lg={4} className="mb-4">
          <Card className="publication-card h-100 border-0 shadow-sm">
            <Card.Body className="d-flex flex-column">
              <div className="publication-header">
                <Badge bg="primary" className="conference-badge">
                  <FaUniversity className="me-2" />
                  {publication.conference}
                </Badge>
              </div>

              <h5 className="publication-paper-title mt-3">{publication.title}</h5>
              <p className="publication-venue">{publication.venue}</p>
              <p className="publication-abstract flex-grow-1">{publication.description}</p>

              <div className="publication-meta">
                <small className="text-muted">
                  <FaCalendar className="me-2" />
                  {publication.date}
                </small>
              </div>

              <div className="mt-3">
                <a
                  href={publication.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-primary btn-sm w-100"
                >
                  View on IEEE Xplore{' '}
                  <FaExternalLinkAlt className="ms-1" aria-hidden="true" focusable="false" />
                </a>
              </div>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </section>
);

export default Publication;
