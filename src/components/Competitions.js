import React, { useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import '../App.css';
import { COMPETITIONS } from '../data';

const Competitions = () => {
  const [showAllCompetitions, setShowAllCompetitions] = useState(false);
  const displayedCompetitions = showAllCompetitions ? COMPETITIONS : COMPETITIONS.slice(0, 3);

  return (
    <section id="competitions" className="my-5">
      <h2 className="mb-4 text-center title-enhanced">Competitions</h2>
      <Row>
        {displayedCompetitions.map((competition) => (
          <Col key={`${competition.title}-${competition.date}`} xs={12} md={6} lg={4} className="mb-4">
            <a
              href={competition.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="competition-minimal-link"
            >
              <Card className="competition-minimal-card h-100">
                <Card.Body className="d-flex flex-column">
                  <div className="comp-minimal-header">
                    <h5 className="comp-minimal-title">{competition.title}</h5>
                    <span className="comp-minimal-date">{competition.date}</span>
                  </div>

                  <div className="comp-minimal-stats">
                    {competition.teamRank && (
                      <div className="minimal-stat">
                        <span className="minimal-stat-label">Team:</span>
                        <span className="minimal-stat-value">
                          {competition.teamRank} · {competition.teamScore}
                        </span>
                      </div>
                    )}
                    {competition.individualRank && (
                      <div className="minimal-stat">
                        <span className="minimal-stat-label">Individual:</span>
                        <span className="minimal-stat-value">
                          {competition.individualRank} · {competition.individualScore}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="comp-click-indicator">
                    <span>Click to view details →</span>
                  </div>
                </Card.Body>
              </Card>
            </a>
          </Col>
        ))}
      </Row>

      {COMPETITIONS.length > 3 && (
        <div className="text-center mt-4">
          <button
            className="btn btn-outline-secondary btn-lg"
            onClick={() => setShowAllCompetitions(!showAllCompetitions)}
          >
            {showAllCompetitions
              ? 'Show Less Competitions'
              : `Show All ${COMPETITIONS.length} Competitions`}
          </button>
        </div>
      )}
    </section>
  );
};

export default Competitions;
