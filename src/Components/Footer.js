
import React from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

import "./Footer"
const Footer = () => {
  return (
    <Container className="Box">
      <Container className="Container">
        <Row className="Row">
          <Col className="Column">
            <div className="Heading">About Us</div>
            <Button className="FooterLink" href="#">Aim</Button>
            <Button className="FooterLink" href="#">Vision</Button>
            <Button className="FooterLink" href="#">Testimonials</Button>
          </Col>
          <Col className="Column">
            <div className="Heading">Services</div>
            <Button className="FooterLink" href="#">Writing</Button>
            <Button className="FooterLink" href="#">Internships</Button>
            <Button className="FooterLink" href="#">Coding</Button>
            <Button className="FooterLink" href="#">Teaching</Button>
          </Col>
          <Col className="Column">
            <div className="Heading">Contact Us</div>
            <Button className="FooterLink" href="#">Uttar Pradesh</Button>
            <Button className="FooterLink" href="#">Ahemdabad</Button>
            <Button className="FooterLink" href="#">Indore</Button>
            <Button className="FooterLink" href="#">Mumbai</Button>
          </Col>
          <Col className="Column">
            <div className="Heading">Social Media</div>
            <Button className="FooterLink" href="#">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>
                  Facebook
                </span>
              </i>
            </Button>
            <Button className="FooterLink" href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>
                  Instagram
                </span>
              </i>
            </Button>
            <Button className="FooterLink" href="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>
                  Twitter
                </span>
              </i>
            </Button>
            <Button className="FooterLink" href="#">
              <i className="fab fa-youtube">
                <span style={{ marginLeft: "10px" }}>
                  Youtube
                </span>
              </i>
            </Button>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};
export default Footer;