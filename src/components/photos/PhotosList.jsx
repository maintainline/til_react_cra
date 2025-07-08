import styled from "@emotion/styled";
import React from "react";

function PhotosList({ albumId, id, title, url, thumbnailUrl }) {
  //js 자리
  const PhotoCard = styled.div`
    background-color: #fff;
    border-radius: 15px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.5);
    border: 6px solid #63fcb5;
    margin: 20px;
    padding: 20px;
    cursor: pointer;

    transition: all 0.2s;
    &:hover {
      transform: translateY(-10px);
    }
  `;
  const PhotoTitle = styled.h2`
    font-size: 20px;
    color: #333;
    margin-bottom: 20px;
  `;
  const PhotoUrl = styled.div`
    font-size: 13px;
    text-align: left;
    color: #999;
  `;
  //jsx 자리
  return (
    <PhotoCard>
      <PhotoTitle>
        {id}.{title}
      </PhotoTitle>
      <PhotoUrl>
        User : {albumId}
        <br />
        {url}
        <br />
        {thumbnailUrl}
      </PhotoUrl>
    </PhotoCard>
  );
}

export default PhotosList;
