import React from "react";

import { Col, Row, Container } from "react-bootstrap";
import Time from "../info-time";
import '../../CSS/basic.css';

const Header = ({ title }) => {
  return (
    <React.Fragment>
      <div id="header">
        <Container>
          <h1 id="title">{title}</h1>
          <h6 id="header-time">{<Time />}</h6>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Header;
