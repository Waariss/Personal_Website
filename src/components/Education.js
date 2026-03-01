import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { FaFileAlt } from 'react-icons/fa';
import Slider from 'react-slick';
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

const calculateAutoplaySpeed = (text) => {
  const words = text.split(' ').length;
  const readingSpeed = 200;

  return (words / readingSpeed) * 60 * 1000;
};

const getMaxAutoplaySpeed = (activities) =>
  activities.reduce(
    (maxSpeed, activity) => Math.max(maxSpeed, calculateAutoplaySpeed(activity.detail)),
    0
  );

const ActivityCard = ({ link, name, detail, time }) => (
  <div className="activity-card">
    {link ? (
      <a href={link} className="activity-name">
        {name}
      </a>
    ) : (
      <span className="activity-name-p">{name}</span>
    )}
    {time && <div className="event-time">{time}</div>}
    <div className="event-detail">{detail}</div>
  </div>
);

const EducationEntry = ({ title, subtitle, activities, logo, links }) => (
  <Card className="mb-4 border-0 shadow-sm about-card">
    <Card.Body>
      <Row>
        <Col xs={12} md={2} className="d-flex align-items-start justify-content-center p-3">
          <ImageLogo {...logo} />
        </Col>
        <Col xs={12} md={10} className="p-3">
          <Card.Title className="mb-3">{title}</Card.Title>
          {subtitle.map((text) => (
            <Card.Subtitle key={text} className="mb-2 text-muted">
              {text}
            </Card.Subtitle>
          ))}
          <Card.Text className="mb-3 mt-3">
            <strong>Activities and societies:</strong>
            <Slider
              dots
              infinite
              slidesToShow={1}
              slidesToScroll={1}
              arrows={false}
              autoplay
              speed={1000}
              autoplaySpeed={getMaxAutoplaySpeed(activities)}
              cssEase="linear"
            >
              {activities.map((activity) => (
                <ActivityCard
                  key={`${activity.name}-${activity.link || activity.detail}`}
                  {...activity}
                />
              ))}
            </Slider>
          </Card.Text>
          {links && (
            <Card.Text className="mb-3 link-group mt-3">
              {links.map((link) => (
                <Card.Link
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-dark"
                >
                  <FaFileAlt className="me-1" /> {link.text}
                </Card.Link>
              ))}
            </Card.Text>
          )}
        </Col>
      </Row>
    </Card.Body>
  </Card>
);

const Education = () => (
  <section id="education" className="my-4">
    <h2 className="mb-4 text-center title-enhanced">Education</h2>
    {EDUCATION_ENTRIES.map((entry) => (
      <EducationEntry key={entry.title} {...entry} />
    ))}
  </section>
);

export default Education;
