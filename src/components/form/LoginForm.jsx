import styled from "@emotion/styled";
import React from "react";
import InputField from "./InputField";
//전역자리 윈도우 등록
const FormContainer = styled.div`
  width: 100%;
  padding: 25px;
  max-width: 800px;
  margin: 30px auto;
  border-radius: 16px;
  background-color: #fafafa;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;
const ErrorText = styled.div`
  color: red;
  margin-top: 10px;
  font-size: 12px;
`;
const SubmitButton = styled.button`
  width: 100%;
  padding: 15px;
  max-width: 100px;
  margin: 0px auto;
  display: block;
  border-radius: 15px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
  font-size: 12px;
  &:hover {
    background-color: #0056c3;
  }
`;

function LoginForm({ formData, errorMessage, handleSubmit, handeleChange }) {
  //js

  //jsx
  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <InputField
          label="아이디"
          type="text"
          name="user_id"
          id="user_id"
          value={formData.user_id}
          placeholder="아이디를 입력하세요."
          onChange={handeleChange}
        />
        <InputField
          label="이메일"
          type="email"
          name="user_email"
          id="user_email"
          value={formData.user_email}
          placeholder="이메일을 입력하세요."
          onChange={handeleChange}
        />
        <InputField
          label="비밀번호"
          type="password"
          name="user_pw"
          id="user_pw"
          value={formData.user_pw}
          placeholder="비밀번호를 입력하세요."
          onChange={handeleChange}
        />
        <SubmitButton type="submit">로그인</SubmitButton>
      </form>
      <ErrorText>{errorMessage}</ErrorText>
    </FormContainer>
  );
}

export default LoginForm;
