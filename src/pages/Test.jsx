import React, { useEffect, useState } from "react";
//전역
function Test() {
  //js
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("하이염");
    return () => {
      console.log("빠이염");
    };
  }, []);
  useEffect(() => {
    console.log(`${count}이군요. 후후`);
    return () => {
      console.log("빠이빠이염");
    };
  }, [count]);

  //jsx
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>점수</button>
    </div>
  );
}

export default Test;
