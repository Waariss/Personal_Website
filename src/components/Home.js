import React from 'react';
import { Container,Button} from 'react-bootstrap';
import '../App.css';

const Home = () => {
    return (
        <section id="home" className="text-center my-4 home-section">
            <Container className="jumbotron-style">
                <h1 className="display-4">Waris Damkham</h1>
                <p className="lead">Offensive Security Engineer | PNPT | CPTS | C-APIPen | CRTP | BSCP | PMPA | CCPenX-AWS | CMPen-IOS | C-AI/MLPen | CRTA | CRT-ID | MCRTA | GHF | CBBH | CMPen-Android | CAPenX | CNPen | CAPen | CAP</p>
                <hr className="my-4" />
                <p>Take a moment to explore my skills, experiences, and projects below.</p>
                <p className="lead">
                <Button variant="outline-light" href="#resume">Resume</Button>
                </p>
            </Container>
        </section>
    );
};

export default Home;
