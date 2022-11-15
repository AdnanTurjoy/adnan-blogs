import React from "react";
import { Container } from "react-bootstrap";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <h3>Adnan Blog</h3>
        A constructive and inclusive social network for software developers.
        With you every step of your journey.
        <br />
        Made with love and{" "}
        <a
          href="https://portfolio-adnan.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Adnan
        </a>
         © 2022.
      </Container>
    </footer>
  );
}
