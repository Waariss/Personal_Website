import React from 'react';
import {Card, ListGroup} from 'react-bootstrap';
import '../App.css';

const Publication = () => {
    return (
        <section id="publications" className="my-4">
                <h1 className="mb-4 text-center">Publications</h1>
                <Card className="border-0 shadow-sm about-card">
                    <Card.Body>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                            <a href="https://ieeexplore.ieee.org/document/10067528" target="_blank" rel="noopener noreferrer" className="linkStyle">
                                <h5>
                                    Automated COVID-19 Screening Framework Using Deep CNN With Chest X-Ray Medical Images
                                </h5>
                            </a>
                            <p>An automated COVID-19 screening framework using chest X-ray images is proposed in this study. It leverages artificial intelligence techniques and transfer learning for accurate diagnosis. The framework extracts features using transfer learning and applies modified deep neural networks. Grad-CAM visualization supports the predicted diagnosis. Experimental results demonstrate superior performance compared to other deep learning techniques. This framework has the potential to aid in early COVID-19 diagnosis and alleviate the burden on radiologists.</p>
                            <Card.Subtitle className="mb-2 text-muted">IEEE · Nov 11, 2022</Card.Subtitle>
                           </ListGroup.Item>
                            {/* <ListGroup.Item>
                                <h5>Title of Publication 2</h5>
                                <p>Description of Publication 2</p>
                            </ListGroup.Item> */}
                            {/* Add more ListGroup.Items for each publication */}
                        </ListGroup>
                    </Card.Body>
                </Card>
        </section>
    );
};

export default Publication;