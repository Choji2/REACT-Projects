import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../CSS/basic.css";


import { Container, Row, Col, Button, NavLink } from "react-bootstrap";
import Header from "../Components/layout/header";
import TestComponents from '../Components/test-components.js'

const Components = (props) => {
  return (
    <React.Fragment>
      <Header title="COMPONENTS" />
      <TestComponents/>
      
    </React.Fragment>
  );
};

export default Components;
