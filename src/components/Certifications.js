import React, { useMemo, useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { FaExternalLinkAlt } from 'react-icons/fa';
import Slider from 'react-slick';
import '../App.css';
import { CERTIFICATIONS } from '../data';
import { chunkArray } from '../utils';

const FEATURED_COUNT = 16;

const Certifications = () => {
  const [showAllCerts, setShowAllCerts] = useState(false);
  const displayedCertificates = useMemo(
    () => (showAllCerts ? CERTIFICATIONS : CERTIFICATIONS.slice(0, FEATURED_COUNT)),
    [showAllCerts]
  );

  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const slides = chunkArray(displayedCertificates, 4);

  return (
    <section id="certifications" className="my-5">
      <h2 className="mb-4 text-center title-enhanced">Certifications</h2>

      <Slider {...settings}>
        {slides.map((slideCerts) => (
          <div key={`${slideCerts[0]?.title || 'slide'}-${slideCerts[0]?.date || ''}`}>
            <Card className="mb-5 border-0 shadow-sm cert-slide-card">
              <Card.Body className="p-4">
                <Row>
                  {slideCerts.map((cert) => (
                    <Col key={cert.link || `${cert.title}-${cert.date}`} xs={12} sm={6} md={6} lg={3} className="mb-4">
                      <Card className="cert-item-card h-100 border-0 shadow-sm">
                        <div className="cert-img-wrapper">
                          <Card.Img
                            variant="top"
                            src={cert.imageUrl}
                            className="cert-img"
                            loading="lazy"
                            alt={`${cert.title} certificate`}
                          />
                        </div>

                        <Card.Body className="d-flex flex-column">
                          <Card.Title className="cert-item-title">{cert.title}</Card.Title>

                          <div className="cert-item-meta mb-3">
                            <Card.Subtitle className="text-muted d-block mb-2">
                              {cert.organization}
                            </Card.Subtitle>
                            <Card.Subtitle className="text-muted d-block">
                              {cert.date}
                            </Card.Subtitle>
                          </div>

                          <a
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-outline-primary btn-sm mt-auto"
                          >
                            View Credential <FaExternalLinkAlt className="ms-1" />
                          </a>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Card.Body>
            </Card>
          </div>
        ))}
      </Slider>

      {CERTIFICATIONS.length > FEATURED_COUNT && (
        <div className="text-center mt-3">
          <Button
            variant="outline-secondary"
            onClick={() => setShowAllCerts((value) => !value)}
            aria-expanded={showAllCerts}
          >
            {showAllCerts
              ? 'Show fewer certifications'
              : `Show all ${CERTIFICATIONS.length} certifications`}
          </Button>
        </div>
      )}
    </section>
  );
};

export default Certifications;
