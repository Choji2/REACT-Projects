import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../CSS/basic.css";
import Input from "../Components/Input-field";
import { Container, Row, Col, Button, NavLink } from "react-bootstrap";
import Header from "../Components/layout/header";
import ModalComp from "../Components/layout/modal";

const Home = (props) => {
  const ChangeInputState = (event) => {
    if (event.target.value === "") {
      props.setInput("Type to Change My Text");
    } else {
      props.setInput(event.target.value);
    }
  };

  return (
    <React.Fragment>
      <Header title="WELCOME" />

      <br />
      <Container>
        <Row>
          <Col md={6}>
            <Input
              className="mb-3"
              placeHolder="User Input"
              arialabel="User Input"
              ariadescripbedby="basic-addon2"
              id="basic-addon2"
              text={props.inputState}
              onInputChange={ChangeInputState}
            />
          </Col>
        </Row>

       

      </Container>
    </React.Fragment>
  );
};

export default Home;
