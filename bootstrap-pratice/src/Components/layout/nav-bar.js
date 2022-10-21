import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../CSS/basic.css";
import { Navbar, Container, Nav, Row, Col, NavItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import ModalComp from "./modal";

function NavBar(props) {

  const base = () => {
    props.setHomeDisable(true);
    props.setOtherDisable(false);
    props.setGridDisable(false);
  };

  const changeHome = () => {
    if (props.homeLinkDisable === false) {
      props.setHomeDisable(true);
      props.setOtherDisable(false);
      props.setGridDisable(false);
    } else {
      props.setHomeDisable(false);
    }
  };

  const changeOther = () => {
    if (props.otherLinkDisable === false) {
      props.setOtherDisable(true);
      props.setHomeDisable(false);
      props.setGridDisable(false);
    } else {
      props.setHomeDisable(true);
    }
  };

  const changeGrid = () => {
    if (props.gridLinkDisable === false) {
      props.setGridDisable(true);
      props.setHomeDisable(false);
      props.setOtherDisable(false);
    } else {
      props.setGridDisable(false);
    }
  };

  return (
   <React.Fragment>
      <Navbar sticky="top" bg="dark" variant="dark" expand="lg">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand onClick={() => base()} disabled={props.homeLinkDisable}>
            LOST.N3T
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavItem>
              <LinkContainer to="/home">
                <Nav.Link
                  onClick={() => changeHome()}
                  disabled={props.homeLinkDisable}
                >
                  Home
                </Nav.Link>
              </LinkContainer>
            </NavItem>

            <NavItem>
              <LinkContainer to="/grid">
                <Nav.Link
                  onClick={() => changeGrid()}
                  disabled={props.gridLinkDisable}
                >
                  Grid
                </Nav.Link>
              </LinkContainer>
            </NavItem>

            <NavItem>
              <LinkContainer to="/components">
                <Nav.Link
                  onClick={() => changeOther()}
                  disabled={props.otherLinkDisable}
                >
                  Components 
                </Nav.Link>
              </LinkContainer>
            </NavItem>
          </Nav>
          <Navbar.Text id="nav-text">Dont Code for Free.  </Navbar.Text>
          <Navbar.Text>{props.inputState}</Navbar.Text>
           
          
        </Navbar.Collapse>
        
      </Container>
     
    </Navbar>


    
   </React.Fragment>
  );
}

export default NavBar;
