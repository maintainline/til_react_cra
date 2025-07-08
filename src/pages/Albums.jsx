import React, { useState } from "react";
import AlbumList from "../components/albums/AlbumList";
import styled from "@emotion/styled";

function Albums() {
  //js 자리
  const [albumsData, setAlbumsData] = useState([]);
  const ButtonStyle = styled.div`
    display: inline-block;
    background-color: #8c63fc;
    font-size: 15px;
    font-weight: 500;
    padding: 10px;
    color: #fff;
    border-radius: 50px;
    margin: 0 10px;
  `;
  const ButtonStyle1 = styled.div`
    display: inline-block;
    background-color: #8c63fc;
    font-size: 15px;
    font-weight: 500;
    padding: 10px;
    color: #fff;
    border-radius: 50px;
  `;

  async function getAlbums() {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/albums");
      const result = await res.json();
      console.log(result);
      setAlbumsData(result);
    } catch (error) {
      console.log(error);
    }
  }
  // getAlbums();

  function resetList() {
    setAlbumsData([]);
  }

  //jsx 자리
  return (
    <div>
      <h1>
        Albums_<ButtonStyle onClick={getAlbums}>목록 가져오기</ButtonStyle>
        <ButtonStyle1 onClick={resetList}>목록 초기화</ButtonStyle1>
      </h1>
      <div>
        {albumsData.map(function (요소, 인덱스) {
          return (
            <AlbumList
              userId={요소.userId}
              id={요소.id}
              title={요소.title}
              key={인덱스}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Albums;
