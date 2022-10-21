import React from "react";
import {
  Container,
  Alert,
  Col,
  Row,
  Button,
  Accordion,
  AccordionCollapse,
} from "react-bootstrap";
import "../CSS/basic.css";
import Time from "../Components/info-time.js";

const TestComponents = () => {
  return (
    <React.Fragment>
     <TestLearn/>
    </React.Fragment>
    
  );
};

export default TestComponents;

const TestLearn=()=>
{
  return(

    <React.Fragment>



    </React.Fragment>
  );

  
};

const AlertComp = () => {
  const [variantState, setVarient] = React.useState("dark");
  const [textState, setText] = React.useState(
    "This is the base state with Dark variant"
  );

  const changeVariantOn = () => {
    setVarient("danger");
  };

  const changeVariantOff = () => {
    setVarient("primary");
  };

  const changeTextOn = () => {
    setText("This is the second state with Danger variant");
  };

  const changeTextOff = () => {
    setText("This is the Third state with Primary variant");
  };

  return (
    <React.Fragment>
      <Container id="" className="mt-5">
        <Alert
          variant={variantState}
          onMouseEnter={() => {
            changeTextOn();
            changeVariantOn();
          }}
          onMouseLeave={() => {
            changeVariantOff();
            changeTextOff();
          }}
        >
          <h5>{textState}</h5>
        </Alert>
        <Alert variant="success">
          <Alert.Heading>This is the heading of the alert.</Alert.Heading>
          <p>
            Id pariatur pariatur incididunt duis exercitation. Id consectetur ut
            ut aliqua Lorem eiusmod aliquip cillum commodo minim minim velit et
            id. Ea occaecat tempor esse elit culpa incididunt. Laboris ullamco
            commodo velit officia id et mollit deserunt labore occaecat qui
            reprehenderit tempor pariatur. Consequat pariatur incididunt
            reprehenderit aliquip sunt nisi voluptate enim commodo minim magna
            mollit. Eu enim incididunt enim cupidatat incididunt cillum deserunt
            laboris quis eu dolor.
          </p>
          <hr />
          <Row className="align-items-baseline">
            <Col xs={1}>
              <h6>Cool Right?</h6>
            </Col>
            <Col>
              <Button variant="outline-success" className="px-5">
                {" "}
                Yes
              </Button>
              {""}
              <Button variant="outline-success" className="px-5 mx-2">
                {" "}
                No
              </Button>
              {""}
            </Col>
          </Row>
        </Alert>
      </Container>
    </React.Fragment>
  );
};

const AccordionComp = () => {
  return (
    <React.Fragment>
      <Container>
        <Accordion defaultActiveKey={0}>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Accordion Item #1</Accordion.Header>
            <Accordion.Body>
              Officia reprehenderit labore non amet ut voluptate. Ipsum ullamco
              et exercitation quis eu dolor cupidatat occaecat ullamco in aute.
              Ea in nostrud aute proident adipisicing reprehenderit cupidatat
              Lorem elit minim nisi enim. Officia anim reprehenderit ea non.
              Irure ut proident laborum veniam quis in ad. Veniam amet consequat
              in reprehenderit in dolore ut. Ut aute dolor incididunt eu duis eu
              tempor.
            </Accordion.Body>
            
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Accordion Item #2</Accordion.Header>
            <Accordion.Body>
              Officia reprehenderit labore non amet ut voluptate. Ipsum ullamco
              et exercitation quis eu dolor cupidatat occaecat ullamco in aute.
              Ea in nostrud aute proident adipisicing reprehenderit cupidatat
              Lorem elit minim nisi enim. Officia anim reprehenderit ea non.
              Irure ut proident laborum veniam quis in ad. Veniam amet consequat
              in reprehenderit in dolore ut. Ut aute dolor incididunt eu duis eu
              tempor.
            </Accordion.Body>
            
          </Accordion.Item>
        </Accordion>
      </Container>
    </React.Fragment>
  );
};
