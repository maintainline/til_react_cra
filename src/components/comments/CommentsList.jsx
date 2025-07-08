import styled from "@emotion/styled";
import React from "react";

function CommentsList({ id, name, postid, email, body }) {
  //js
  const CommentsCard = styled.div`
    background-color: #fff;
    border-radius: 15px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.5);
    border: 6px solid #fc639e;
    margin: 20px;
    padding: 20px;
    cursor: pointer;

    transition: all 0.2s;
    &:hover {
      transform: translateY(-10px);
    }
  `;
  const CommentsName = styled.h2`
    font-size: 20px;
    color: #333;
    margin-bottom: 20px;
  `;
  const CommentsBody = styled.div`
    font-size: 13px;
    text-align: left;
    color: #999;
  `;
  //jsx
  return (
    <CommentsCard>
      <CommentsName>
        User : {id} {name}:{email}
      </CommentsName>
      <CommentsBody>
        {postid} {body}
      </CommentsBody>
    </CommentsCard>
  );
}

export default CommentsList;
