import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { FaFileAlt, FaFlask, FaImage, FaNewspaper } from 'react-icons/fa';
import '../App.css';
import { EXPERIENCES } from '../data';

const getIconForLinkType = (type) => {
  switch (type) {
    case 'news':
      return <FaNewspaper className="me-1" />;
    case 'paper':
      return <FaFileAlt className="me-1" />;
    case 'poster':
      return <FaImage className="me-1" />;
    case 'lab':
      return <FaFlask className="me-1" />;
    default:
      return null;
  }
};

const Experience = () => (
  <section id="experience" className="my-5">
    <h2 className="mb-4 text-center title-enhanced">Experience</h2>

    {EXPERIENCES.map((experience) => (
      <Card
        key={`${experience.company}-${experience.title}-${experience.duration}`}
        className="mb-4 border-0 shadow-sm experience-card hover-shadow"
      >
        <Card.Body>
          <Row>
            <Col xs={12} md={2} className="d-flex align-items-start justify-content-center mb-3 mb-md-0">
              <img
                src={experience.companyLogo}
                alt={`${experience.company} Logo`}
                className="company-logo"
                loading="lazy"
              />
            </Col>
            <Col xs={12} md={10}>
              <div className="details-container">
                <img
                  src={experience.internshipImages}
                  alt={`${experience.title} at ${experience.company}`}
                  className="internship-image"
                  loading="lazy"
                />
                <Card.Title className="mb-3 experience-title">
                  <strong>{experience.title}</strong>
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {experience.company} · {experience.type}
                </Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">{experience.duration}</Card.Subtitle>
                <Card.Subtitle className="mb-3 text-muted">{experience.location}</Card.Subtitle>
                <Card.Text className="mb-1">
                  <strong>Key Responsibilities:</strong>
                </Card.Text>
                <ul className="mb-2 ps-3">
                  {experience.description.map((item) => (
                    <li key={item} className="mb-2">
                      {item}
                    </li>
                  ))}
                </ul>
                <Card.Text className="mb-3">
                  <strong>Skills:</strong> <span className="skills">{experience.skills}</span>
                </Card.Text>
                {experience.links.length > 0 && (
                  <Card.Text className="mb-3 link-group">
                    {experience.links.map((link) => (
                      <Card.Link
                        key={`${link.href}-${link.label}`}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline-dark custom-link"
                      >
                        {getIconForLinkType(link.type)} {link.label}
                      </Card.Link>
                    ))}
                  </Card.Text>
                )}
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    ))}
  </section>
);

export default Experience;
