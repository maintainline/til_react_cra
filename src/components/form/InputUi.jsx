import styled from "@emotion/styled";
import React from "react";
import { InputGroup, InputStyled, Label } from "./InputUi.styles";

function InputUi({ id, type, name, value, placeholder, label, onChange }) {
  //js

  //jsx
  return (
    <InputGroup>
      <Label htmlFor={id}>{label}</Label>
      <InputStyled
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        id={id}
        onChange={onChange}
      />
    </InputGroup>
  );
}

export default InputUi;
