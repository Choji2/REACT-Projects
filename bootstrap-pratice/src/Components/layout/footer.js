import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../CSS/basic.css";
import { Navbar, Container, Nav, Row, Col, NavItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Time from "../info-time";


function Footer(props) {
  const base = () => {
    props.setHomeDisable(true);
    props.setOtherDisable(false);
    props.setGridDisable(false);
  };

  

  var curr=props.dateState;
    
  return (
    <Navbar  id="footer" fixed="bottom" bg="dark" variant="dark" expand="lg">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand></Navbar.Brand>
        </LinkContainer>

        <Navbar.Text>{<Time/>}</Navbar.Text>
      </Container>
    </Navbar>
  );
}

export default Footer;
