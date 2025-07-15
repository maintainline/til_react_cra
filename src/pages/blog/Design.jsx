import React from "react";
import { useParams } from "react-router-dom";

function Design() {
  //js
  const { id } = useParams();
  //jsx
  return <div>{id} 번째 Design</div>;
}

export default Design;
