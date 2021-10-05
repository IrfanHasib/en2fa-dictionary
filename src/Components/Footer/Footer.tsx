import React from 'react';
import './style.scss';
import { Container, Row, Col } from 'reactstrap';
import logo from '../../Images/logoipsum.svg';

const Footer: React.FunctionComponent = () => {
  return (
    <div className="footer-section">
      <Container>
        <Row>
          <Col xs={8} md={6}>
            <a href="/" className="footer-logo">
              <img src={logo} alt="" />
            </a>
            <p className="footer-tagline">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </Col>
          <Col xs={4} md={3}>
            <ul className="footer-menu">
              <li>
                <a href="/">About Us</a>
              </li>
              <li>
                <a href="/">Privacy</a>
              </li>
              <li>
                <a href="/">Terms</a>
              </li>
              <li>
                <a href="/">Terms</a>
              </li>
            </ul>
          </Col>
          <Col xs={12} md={3}>
            <ul className="footer-menu">
              <li>
                <a href="/">Instagram</a>
              </li>
              <li>
                <a href="/">Linkedin</a>
              </li>
              <li>
                <a href="/">Email</a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      <div className="copyright-text">2021 Dictionary Inc. All rights reserved.</div>
    </div>
  );
};
export default Footer;
