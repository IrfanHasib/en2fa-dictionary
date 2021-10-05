import React from 'react';
import './style.scss';
import { Container, Row, Col } from 'reactstrap';
import Logo from '../../Images/logoipsum.svg';

const Header: React.FunctionComponent = () => {
  return (
    <Container className="">
      <header className="site-header">
        <Row className="justify-content-center align-self-center align-items-center">
          <Col className={'site-header-left '}>
            <a href="/" className="logo">
              <img src={Logo} alt="" />
            </a>
          </Col>
          <Col className={'site-header-right'}></Col>
        </Row>
      </header>
    </Container>
  );
};

export default Header;
