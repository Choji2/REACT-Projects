import React from "react";
import "../../CSS/basic.css";
import { Modal, Row, Col, Button } from "react-bootstrap";

const  ModalComp1=({modalState,modalTitle,modalBodyText,button1Text,button1Var,button2Text,button2Var}) =>{
  return (
    <Modal show={modalState}>
      <Modal.Header >
        <Modal.Title>{modalTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{modalBodyText}</Modal.Body>
      <Modal.Footer>
  <Button variant={button1Var} >
  {button1Text}
  </Button>
  <Button variant={button2Var} >
      {button2Text}
    </Button> 
    </Modal.Footer>
    </Modal>
  );
}

export default ModalComp1;
// comments
