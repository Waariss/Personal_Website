import React from 'react';
import { Badge, Button, Container, Stack } from 'react-bootstrap';
import '../App.css';
import { HOME_CREDENTIAL_ROWS, HOME_PROOF_HIGHLIGHTS, HOME_SUMMARY } from '../data';

const Home = () => (
  <section id="home" className="text-center my-4 home-section">
    <Container className="jumbotron-style">
      <h1 className="display-4">Waris Damkham</h1>
      <p className="lead">Offensive Security Engineer &amp; AI Security Engineer</p>
      <p className="mb-4 home-summary">{HOME_SUMMARY}</p>

      {HOME_CREDENTIAL_ROWS.map((credentials, index) => (
        <Stack
          key={`credential-row-${index + 1}`}
          direction="horizontal"
          gap={2}
          className="justify-content-center flex-wrap my-3"
        >
          {credentials.map((credential) => (
            <Badge
              bg="light"
              text="dark"
              key={credential}
              className="px-3 py-2 home-credential-badge"
            >
              {credential}
            </Badge>
          ))}
        </Stack>
      ))}

      <Stack direction="horizontal" gap={2} className="justify-content-center flex-wrap my-3">
        {HOME_PROOF_HIGHLIGHTS.map((proof) => (
          <a key={proof.text} href={proof.link} className="text-decoration-none home-proof-link">
            <Badge bg="light" text="dark" className="px-3 py-2 proof-badge-clickable home-proof-badge">
              {proof.text}
            </Badge>
          </a>
        ))}
      </Stack>

      <div className="d-flex justify-content-center gap-3 flex-wrap mt-4">
        <Button variant="light" href="#resume" className="text-dark fw-semibold">
          Resume
        </Button>
        <Button variant="outline-light" href="mailto:waris.dam@outlook.com" className="fw-semibold">
          Email
        </Button>
      </div>
    </Container>
  </section>
);

export default Home;
