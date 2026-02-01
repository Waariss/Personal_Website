import React from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';
import '../App.css';

const FeaturedSection = () => {
    const featuredItems = [
        {
            title: "Black Hat Asia 2026 Arsenal",
            subtitle: "Oblivion Token (Selected)",
            description: "Microsoft 365 Conditional Access identity and security tooling research selected for presentation at Black Hat Asia 2026 Arsenal.",
            link: "#projects",
            linkText: "View project"
        },
        {
            title: "Red Team / Identity Research",
            subtitle: "Enterprise Identity Security",
            description: "Advanced research in Microsoft 365 security, Conditional Access bypass techniques, and AD CS exploitation methodologies.",
            link: "#projects",
            linkText: "Read more"
        },
        {
            title: "IEEE Publications Highlight",
            subtitle: "3× Published Papers",
            description: "Multiple research publications in IEEE conferences covering AI-driven security frameworks and practical security applications.",
            link: "#publications",
            linkText: "View publications"
        }
    ];

    return (
        <section className="featured-section my-5">
            <div className="container">
                <h2 className="text-center mb-4 title-enhanced">Featured Work</h2>
                <Row>
                    {featuredItems.map((item, index) => (
                        <Col key={index} xs={12} md={4} className="mb-4">
                            <Card className="featured-card h-100 border-0 shadow-sm">
                                <Card.Body className="d-flex flex-column">
                                    <div className="featured-badge mb-2">
                                        <span className="badge bg-primary">Featured</span>
                                    </div>
                                    <Card.Title className="featured-title">{item.title}</Card.Title>
                                    <Card.Subtitle className="text-muted mb-3">{item.subtitle}</Card.Subtitle>
                                    <Card.Text className="flex-grow-1">{item.description}</Card.Text>
                                    <Button 
                                        variant="outline-primary" 
                                        href={item.link}
                                        className="mt-auto"
                                    >
                                        {item.linkText}
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </section>
    );
};

export default FeaturedSection;
