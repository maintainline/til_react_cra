import React, { useState } from "react";
import PhotosList from "../components/photos/PhotosList";
import styled from "@emotion/styled";

function Photos() {
  //js
  const [photosData, setPhotosData] = useState([]);

  const ButtonStyle = styled.div`
    display: inline-block;
    background-color: #63fcb5;
    font-size: 15px;
    font-weight: 500;
    padding: 10px;
    color: #fff;
    border-radius: 50px;
    margin: 0 10px;
  `;
  const ButtonStyle1 = styled.div`
    display: inline-block;
    background-color: #63fcb5;
    font-size: 15px;
    font-weight: 500;
    padding: 10px;
    color: #fff;
    border-radius: 50px;
  `;

  async function getPhotos() {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/photos");
      const result = await res.json();
      console.log(result);
      setPhotosData(result);
    } catch (error) {
      console.log(error);
    }
  }
  // getPhotos();
  function resetList() {
    setPhotosData([]);
  }
  //jsx
  return (
    <div>
      <h1>
        Photos_ <ButtonStyle onClick={getPhotos}>목록가져오기</ButtonStyle>
        <ButtonStyle1 onClick={resetList}>목록 초기화</ButtonStyle1>
      </h1>
      <div>
        {photosData.map(function (요소, 인덱스) {
          return (
            <PhotosList
              albumId={요소.albumId}
              id={요소.id}
              title={요소.title}
              url={요소.url}
              thumbnailUrl={요소.thumbnailUrl}
              key={인덱스}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Photos;
