import React, { useState } from "react";
import TodosList from "../components/todos/TodosList";
import styled from "@emotion/styled";

function Todos() {
  const [TodosData, setTodosData] = useState([]);

  const ButtonStyle = styled.div`
    display: inline-block;
    background-color: #fca863;
    font-size: 15px;
    font-weight: 500;
    padding: 10px;
    color: #fff;
    border-radius: 50px;
    margin: 0 10px;
  `;
  const ButtonStyle1 = styled.div`
    display: inline-block;
    background-color: #fca863;
    font-size: 15px;
    font-weight: 500;
    padding: 10px;
    color: #fff;
    border-radius: 50px;
  `;
  //js
  async function getTodos() {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos");
      const result = await res.json();
      console.log(result);
      setTodosData(result);
    } catch (error) {
      console.log(error);
    }
  }
  // getTodos();
  function resetList() {
    setTodosData([]);
  }
  //jsx
  return (
    <div>
      <h1>
        Todos_<ButtonStyle onClick={getTodos}>목록 가져오기</ButtonStyle>
        <ButtonStyle1 onClick={resetList}>목록 초기화</ButtonStyle1>
      </h1>
      <div>
        {TodosData.map(function (요소, 인덱스) {
          return (
            <TodosList
              userId={요소.userId}
              id={요소.id}
              title={요소.title}
              completed={요소.completed}
              key={인덱스}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Todos;
