import React from "react";
import "../css/Slide.css";
import styled from "@emotion/styled";

function Slide() {
  //js자리

  // Emotion 관련
  // 기본형
  const BasicButton = styled.button``;
  const BasicUPButton = styled.button`
    background-color: sandybrown;
    color: #fff;
    padding: 10px 20px;
    border-radius: 15px;
    border: none;
    font-size: 16px;
    cursor: pointer;
    /* SCSS 적용가능 */
    transition: all 0.5s;

    &:hover {
      background-color: darkseagreen;
    }
  `;
  // props 로 동적인 즉, 실시간으로 변경하기
  const Box = styled.div`
    background-color: ${props => props.bg};
    height: 100px;
    width: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 0;
  `;
  // jsx 자리
  return (
    <div style={{ padding: "30px" }}>
      <h1>CSS-in-JS 예제</h1>
      <BasicButton>기본버튼</BasicButton>
      <br />
      <br />
      <BasicUPButton>CSS 적용 버튼</BasicUPButton>
      <br />
      <br />
      <Box bg="red" width="200">
        1번 박스
      </Box>
      <Box bg="skyblue"> 2번 박스</Box>
    </div>
  );
}

export default Slide;
