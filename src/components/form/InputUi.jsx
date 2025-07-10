import styled from "@emotion/styled";
import React from "react";
//전역 자리
const InputGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
`;
const Label = styled.label`
  font-size: 11px;
  font-weight: 500;
  color: #333;
  white-space: nowrap;
  min-width: 60px;
`;
const InputStyled = styled.input`
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 10px;
  font-size: 12px;
  &:focus {
    outline: none;
    border: 1px solid #007bff;
  }
`;

function InputUi({ id, type, name, value, placeholder, label }) {
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
      />
    </InputGroup>
  );
}

export default InputUi;
