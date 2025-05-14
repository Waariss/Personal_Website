import React from 'react';
import { Container,Button} from 'react-bootstrap';
import '../App.css';

const Home = () => {
    return (
        <section id="home" className="text-center my-4 home-section">
            <Container className="jumbotron-style">
                <h1 className="display-4">Waris Damkham</h1>
                <p className="lead">Offensive Security Engineer | PNPT | PMPA | eWPTX | CRTP | CPTS | CBBH | BSCP | ASCP | ACP | GHF | HCCDA-Tech | C-APIPen | C-AI/MLPen | CCPenX-AWS | CAPenX | CMPen-Android & iOS | CNPen | CAPen | CAP | CRTA | CRT-ID | MCRTA</p>
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
