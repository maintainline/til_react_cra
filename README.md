# useEffect

## 1. 특징

- 리랜더링에서 제외되는 Hook
- Hook 은 우선 `컴포넌트에서 자동 실행`되는 함수
- useState 에서 만든 리액트 변수 출력하기 / 리액트 변수 확인하기
- 백엔드 비동기 통신 / fetch 함수를 호출하기

## 2. 작동/실행이 되는 3가지 경우

### 2.1. 컴포넌트가 화면에 보여질 때(랜더링)

- 딱 한번만 실행됩니다.

```js
useEffect(() => {
  //딱 한번반 실행되면 좋겠다.
}, []);
```

### 2.2. 계속 실행되는 경우 (리랜더링시)

```js
useEffect(() => {
  //계속 하고싶은 일
}, [리액트변수]);
```

### 2.3. 컴포넌트가 사라질때 (화면에서 제거될때)

- 클린업 함수

```js
useEffect(() => {
  //딱 한번만 실행하기
  //딱 한번만 실행하기
  //딱 한번만 실행하기
  return () => {
    // 사라질때 하고싶은말
  };
}, []);
```

```js
useEffect(() => {
  //계속 실행하기
  //계속 실행하기
  //계속 실행하기
  return () => {
    // 사라질때 하고싶은말
  };
}, [리액트변수]);
```

## 3. 이해를 해보자

```js
useEffect(() => {
  widown.addEventListenr("resize", function () {
    // 실행할일
  });
  widown.addEventListenr("scroll", function () {
    // 실행할일
  });

  // 클린업 함수
  return () => {
    widown.removeEventListenr("resize", function () {
      // 실행할일
    });
    widown.removeEventListenr("scroll", function () {
      // 실행할일
    });
  };
}, []);
```

- 예제

```js
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
```
