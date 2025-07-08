import React, { useState } from "react";
import UsersList from "../components/users/UsersList";
import styled from "@emotion/styled";

function Users() {
  const [UsersData, setUserData] = useState([]);
  //js

  const ButtonStyle = styled.div`
    display: inline-block;
    background-color: #64864e;
    font-size: 15px;
    font-weight: 500;
    padding: 10px;
    color: #fff;
    border-radius: 50px;
    margin: 0 10px;
  `;
  const ButtonStyle1 = styled.div`
    display: inline-block;
    background-color: #64864e;
    font-size: 15px;
    font-weight: 500;
    padding: 10px;
    color: #fff;
    border-radius: 50px;
  `;
  async function getUsers() {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const result = await res.json();
      console.log(result);
      setUserData(result);
    } catch (error) {
      console.log(error);
    }
  }
  // getUsers();
  function resetList() {
    setUserData([]);
  }
  //jsx

  return (
    <div>
      <h1>
        Users_
        <ButtonStyle onClick={getUsers}>목록가져오기</ButtonStyle>
        <ButtonStyle1 onClick={resetList}>목록 초기화</ButtonStyle1>
      </h1>
      <div>
        {UsersData.map(function (요소, 인덱스) {
          return (
            <UsersList
              id={요소.id}
              nickname={요소.name}
              username={요소.username}
              email={요소.email}
              address={요소.address}
              phone={요소.phone}
              website={요소.website}
              company={요소.company}
              key={인덱스}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Users;
