import React from 'react';
import { Card, Carousel, Col, Row } from 'react-bootstrap';
import '../App.css';
import { SKILL_CATEGORIES } from '../data';
import { chunkArray } from '../utils';

const CHUNK_SIZE = 3;

const Skills = () => (
  <section id="skills" className="my-5">
    <h2 className="mb-4 text-center title-enhanced">Skills &amp; Tools</h2>
    <Row>
      {SKILL_CATEGORIES.map((category) => {
        const skillChunks = chunkArray(category.skills, CHUNK_SIZE);

        return (
          <Col key={category.name} xs={12} sm={6} md={4} className="mb-4">
            <Card className="border-0 shadow-sm skill-card hover-shadow">
              <Card.Body>
                <Card.Title className="mb-4">{category.name}</Card.Title>
                <Carousel indicators className="custom-carousel">
                  {skillChunks.map((chunk, chunkIndex) => (
                    <Carousel.Item key={`${category.name}-${chunkIndex}`}>
                      <Row>
                        {chunk.map((skill) => (
                          <Col key={`${category.name}-${skill.name}`} xs={4} className="mb-3 text-center">
                            <div className="skill-logo-wrapper">
                              <div
                                className="skill-logo"
                                style={{ backgroundImage: `url(${skill.logo})` }}
                              />
                            </div>
                            <p className="skill-title">{skill.name}</p>
                          </Col>
                        ))}
                      </Row>
                    </Carousel.Item>
                  ))}
                </Carousel>
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </Row>
  </section>
);

export default Skills;
