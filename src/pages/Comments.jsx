import React, { useState } from "react";
import CommentsList from "../components/comments/CommentsList";
import styled from "@emotion/styled";

function Comments() {
  const [commentsData, setCommentsData] = useState([]);
  const ButtonStyle = styled.div`
    display: inline-block;
    background-color: #fc639e;
    font-size: 15px;
    font-weight: 500;
    padding: 10px;
    color: #fff;
    border-radius: 50px;
    margin: 0 10px;
  `;
  const ButtonStyle1 = styled.div`
    display: inline-block;
    background-color: #fc639e;
    font-size: 15px;
    font-weight: 500;
    padding: 10px;
    color: #fff;
    border-radius: 50px;
  `;

  //js
  async function getComments() {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/comments");
      const result = await res.json();
      console.log(result);
      setCommentsData(result);
    } catch (error) {
      console.log(error);
    }
  }
  // getComments();
  //jsx
  function resetList() {
    setCommentsData([]);
  }
  return (
    <div>
      <h1>
        Comments_
        <ButtonStyle onClick={getComments}>목록가져오기</ButtonStyle>
        <ButtonStyle1 onClick={resetList}>목록초기화</ButtonStyle1>
      </h1>
      <div>
        {commentsData.map(function (요소, 인덱스) {
          return (
            <CommentsList
              postId={요소.postid}
              id={요소.id}
              name={요소.name}
              email={요소.email}
              body={요소.body}
              key={인덱스}
            ></CommentsList>
          );
        })}
      </div>
    </div>
  );
}

export default Comments;
