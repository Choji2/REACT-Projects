import React from "react";
import { FormControl, InputGroup } from "react-bootstrap";
import { useState, useEffect } from "react";

const Input = ({
  id,
  htmlFor,
  className,
  placeHolder,
  arialabel,
  ariadescripbedby,
  text,
  onInputChange,
  value

}) => {

  return (
    <React.Fragment>
      <InputGroup className={className}>
        <FormControl
          placeholder={placeHolder}
          aria-label={arialabel}
          aria-describedby={ariadescripbedby}
          value={value}
          onChange={onInputChange}
        />
        <InputGroup.Text id={id}>{text}</InputGroup.Text>
      </InputGroup>
    </React.Fragment>
  );
};
export default Input;
