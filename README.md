# JSX 1.

- React 에서 사용하는 html 태그
- 용도 : Component 만들기

## 1. Component 란?

- `HTML 태그 형태`를 리턴하는 함수
- 화살표 함수(`rafce`) 또는 일반함수(`rfce`) `HTML 태그를 리턴`하면 인정.
- JSX는 `반드시 하나의 태그`에 `포함되도록 배치`하여야 한다.
  ![Image](https://github.com/user-attachments/assets/c8dc447a-736f-4282-b255-5f23aa9f9d0e)
- `<></>`를 Fragment 라고 합니다.
  ![Image](https://github.com/user-attachments/assets/b115261a-3d0e-4949-ba5a-a1b915008513)
- 파일명 및 컴포넌트 함수는 반드시 `파스칼`이어야 한다.

## 2. Component 와 Page 구분(관례상)

- `폴더명은 반드시 소문자`로 생성해야 한다.
- 각 화면단위로 구성한다면 `src/pages` 폴더에 저장
- `하나의 html 을 완성하기 위해서 배치 요소`라면 `src/components` 폴더에 저장
-

# css

## 1. JSX에 css 추가하기

- 일반적으로 src 폴더 안에 `css폴더`를 생성함.
- css 파일은 모두 이곳에 배치한다
- css 파일명은 컴포넌트명과 동일하게 `파스칼케이스`를 사용한다.
- ex) Header.css , Footer.css, Slide.css

## 2. css 사용하기

### src/index.css

- 기본적인 css 적용
- index.js 에 적용되는 css
- css 를 불러들이는 import 형태 확인

```js
import "./index.css";
```

### src/pages/StartPage.jsx

- src/pages/StartPage.css 파일 생성

```jsx
import "../css/StartPage.css";
```

- Header.jsx

```jsx
import "../css/Header.css";
```

- Footer.jsx

```jsx
import "../css/Footer.css";
```

- Slide.jsx

```jsx
import "../css/Slide.css";
```

## 3. 외부 css 라이브러리 사용하기

### 3.1. 링크 방식

![Image](https://github.com/user-attachments/assets/7efa745c-bdda-4461-b2ec-529938968e12)

- 위 처럼 리액트에서 활용은 추천하지 않습니다.
- 일반 웹 퍼블리싱에서만 활용하시길 추천
- reset.css : https://meyerweb.com/eric/tools/css/reset/
- normalize.css : https://necolas.github.io/normalize.css/8.0.1/normalize.css
- fontAwsome : https://cdnjs.com/libraries/font-awesome
- 구글폰트 : https://fonts.google.com/
- public/index.html추가

```html
<!doctype html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta name="description" content="마인드 다이어리 서비스입니다." />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <title>마인드 다이어리</title>
    <!-- reset.css -->
    <link
      rel="stylesheet"
      href="https://meyerweb.com/eric/tools/css/reset/reset200802.css"
    />
    <!-- normalize.css -->
    <link
      rel="stylesheet"
      href="https://necolas.github.io/normalize.css/8.0.1/normalize.css"
    />
    <!-- font-awsome -->
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
      integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
    <!-- 구글 폰트 -->
    <link
      href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap"
      rel="stylesheet"
    />
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
  </body>
</html>
```

### 3.2 npm 설치 방식 권장

```bash
npm i normalize
npm i reset-css
npm install react-icons --save
```

### 3.3. 구글폰트는 `index.css 에서 작성` 권장

- index.css 에 모든 페이지에 적용되는 파일이므로
- link 방식 보다는 @import url 방식 권장
  ![Image](https://github.com/user-attachments/assets/5aca612e-c28b-4a44-b8d4-3893fee77ad6)

## 4. 일반 css 적용해보기

- css : `import "../css/StartPage.css";`
- jsx : `<div className="box">로고</div>`
- css 내용 : `.box {background-color: red;}`

- StartPage.jsx

```jsx
import React from "react";
//css
import "../css/StartPage.css";
//컴포넌트
import Header from "../components/Header";
import Footer from "../components/Footer";
import Slide from "../components/Slide";

function StartPage() {
  return (
    <>
      <div className="box">로고</div>
      {/* 헤더 컨포넌트 */}
      <Header></Header>
      {/* 슬라이드 컨포넌트 */}
      <Slide></Slide>
      {/* 분류메뉴 컨포넌트 */}
      {/* 공지 컨포넌트 */}
      {/* 추천 컨포넌트 */}
      {/* 새목록 컨포넌트 */}
      {/* 앱설치 안내 컨포넌트 */}
      {/* 하단 컨포넌트 */}
      <Footer></Footer>
    </>
  );
}

export default StartPage;
```

- StratPage.css

```css
.box {
  background-color: red;
}
```

## 5. `module.css` 적용해보기

- index.css : 공통 적용 내용.(클래스명 충돌 가능성 있음)
- StartPage.css 를 파일명 변경 : `StartPage.module.css`
  ![Image](https://github.com/user-attachments/assets/6d5e571e-096a-4b63-9d47-945f7d17b303)

- css 가 아니라 module.css 를 불러들임

```jsx
// import from "../css/StartPage.css"  원래 방식
import styles from "../css/StartPage.module.css";
```

```jsx
// <div className="box">로고</div>  원래 방식
<div className={styles.box}>로고</div>
```

## 6. SCSS 활용하기

- 소스 가독성이 상당히 좋다.
- css 를 체계적으로 생성 및 관리.

### 6.1. SCSS npm 설치

- VSCode 플러그인은 설치 되어있음(live sass compiler)

```bash
npm i sass -D
```

### 6.2 기본 폴더 생성

- src/scss 폴더 생성 권장
- src/scss/test.scss 파일생성
  ![Image](https://github.com/user-attachments/assets/867cdf68-9e74-4fdd-b807-40106bedb7e2)
- 파일 실행시에 src 폴더 밖으로 css 가 생기면 삭제후 setting가서 주석처리
- `Watching Sass...` 실행후 시작하기

### 6.3. 중첩(Nesting)

```scss
.wrap {
  position: relative;
  .notice {
    width: 800px;
    height: 400px;
    a {
      display: block;
      &:hover {
        background-color: red;
      }
      span {
        display: block;
      }
    }
  }
}
```

### 6.4. 변수

- 변수는 `$` 기호를 사용한다.
- 가능하면 외부파일로 생성하시길 권장
- 변수만 모은 파일은`_파일명.scss`은 `css 생성을 하지 않는게` 좋다.
  - scss 폴더에 `_` 사용시 css 파일 생성이 되지않는다.(기본은 자동생성)

```scss
// 변수만들기

$width-800: 800px;
$height-400: 400px;
$red: red;

.wrap {
  position: relative;
  .notice {
    width: $width-800;
    height: $height-400;
    a {
      display: block;
      &:hover {
        background-color: $red;
      }
      span {
        display: block;
      }
    }
  }
}
```

- 변수만 모은 `_val.scss`, `_color.scss`

```scss
// _color.scss
$red: red;
```

```scss
// _val.scss
$width-800: 800px;
$height-400: 400px;
```

```scss
// test.scss <  _ 삭제 후 import>
@import "val";
@import "color";

.wrap {
  position: relative;
  .notice {
    width: $width-800;
    height: $height-400;
    a {
      display: block;
      &:hover {
        background-color: $red;
      }
      span {
        display: block;
      }
    }
  }
}
```

### 6.5. 함수

- `파일명은 _붙이고 생성`=> css 생성되지 말라고 `_붙임`
- src/scss/`_mixins.scss` 파일생성

```scss
//_mixins.scss
@mixin flex-center-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

@mixin border-line($num, $cc) {
  border: $num solid $cc;
}
```

```scss
// test.scss
// 변수만들기
@import "val";
@import "color";
//함수사용하기
@import "mixins";

.wrap {
  position: relative;
  @include flex-center-center;
  .notice {
    @include flex-center-center;
    @include border-line(5px, #ff0000);
    width: $width-800;
    height: $height-400;
    a {
      display: block;
      &:hover {
        background-color: $red;
      }
      span {
        display: block;
      }
    }
  }
}
```

### 6.6. `React 에서 scss` 쓰기로 했다면?

- 반드시 `npm i scss -D` 가 되었다는 전제로 진행 가능.
- `Watch Sass ...`꼭 끄고 불필요한 css 생성하지 않기..
- pages/StartPage.scss 파일 생성

```jsx
import "./StartPage.scss"; //../과 ./ 차이 상위폴더냐 해당폴더냐 차이.
```

- pages/StartPage.module.scss 파일 생성

```jsx
import styles from "./StartPage.module.scss";

<div className={styles.wrap}></div>;
```

# JSX 2.

### 1. JSX 에서 변수 사용하기

- 값의 종류 : 글자, 숫자, null, undefined, boolean, [], {}
- 보간법(`{}`)을 이용하기 : 중괄호 표현법

```jsx
import React from "react";
import { BiColor } from "react-icons/bi";

function Header() {
  //js 코드자리
  const title = "웹 서비스 제목";
  const version = 0.5;
  function say() {
    return "하하하";
  }

  //아래는 html jsx 출력자리
  return (
    <div>
      <div>{title}</div>
      <div>
        버전:{version} {say()}
      </div>
    </div>
  );
}

export default Header;
```

## 2. style 태그에 `css 객체` 넣기

```js
import React from "react";

function Header() {
  // js 코딩자리
  const title = "웹 서비스 제목";
  const version = 0.5;
  function say() {
    return "하하하";
  }

  // html jsx 코드 자리
  return (
    <div>
      <div
        style={{
          backgroundColor: "green",
          color: "#fff",
          border: "5px solid hotpink",
        }}
      >
        {title}
      </div>
      <div>
        버전:{version} {say()}
      </div>
    </div>
  );
}

export default Header;
```

- 아래처럼 변수에 담아서 전달하시길 추천

```js
import React from "react";

function Header() {
  // js 코딩자리
  const title = "웹 서비스 제목";
  const version = 0.5;
  function say() {
    return "하하하";
  }

  const bgObj = {
    backgroundColor: "green",
    color: "#fff",
    border: "5px solid hotpink",
  };

  // html jsx 코드 자리
  return (
    <div>
      <div style={bgObj}>{title}</div>
      <div>
        버전:{version} {say()}
      </div>
    </div>
  );
}

export default Header;
```

- 응용 버전

```jsx
import React from "react";

function Header() {
  // js 코딩자리
  const title = "웹 서비스 제목";
  const version = 0.5;
  function say() {
    return "하하하";
  }

  const isLogin = true;

  const bgObj = {
    backgroundColor: "green",
    color: "#fff",
    border: "5px solid hotpink",
  };
  const bgObjRed = {
    backgroundColor: "red",
    color: "#fff",
    border: "5px solid hotpink",
  };

  // html jsx 코드 자리
  return (
    <div>
      <div style={isLogin ? bgObj : bgObjRed}>{title}</div>
      <div>
        버전:{version} {say()}
      </div>
    </div>
  );
}

export default Header;
```

## 3. css 에 객체를 별도로 모아서 관리하기

- 위의 css 객체를 `객체리터럴 오브젝트 방식`으로 칭한다.
- 관례상 css 객체는 관례상 `파스칼` 케이스를 쓴다.
- /components/bg.js 파일 생성

```js
export const BgObj = {
  backgroundColor: "green",
  color: "#fff",
  border: "5px solid hotpink",
};
export const BgObjRed = {
  backgroundColor: "red",
  color: "#fff",
  border: "5px solid hotpink",
};
export default BgObjRed;
```

```jsx
import React from "react";
import { BiColor } from "react-icons/bi";
import BgObjRed, { BgObj } from "./bg";

function Header() {
  //js 코드자리
  const title = "웹 서비스 제목";
  const version = 0.5;
  function say() {
    return "하하하";
  }
  const isLogin = false;

  //아래는 html jsx 출력자리
  return (
    <div>
      <div style={isLogin ? BgObj : BgObjRed}>{title}</div>
      <div>
        버전:{version}
        {say()}
      </div>
    </div>
  );
}

export default Header;
```

- 참고
  ![Image](https://github.com/user-attachments/assets/67a46735-ab3d-42af-914c-be3f1f5b119a)

- export default 는 jsx 출력시

```jsx
import BgObjRed, { BgObj } from "./bg";
```
