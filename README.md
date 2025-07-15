# react -router-dom

- 리액트에는 http 경로로 페이지 이동을 못합니다. 즉 `화면이동을 못합니다.`
- http 경로를 흔히 `라우터`라고 칭합니다.
- 라우터 즉, 경로를 이동하려면 `react router dom` 을 사용해야함.

## 1. 참고사항

- a 태그

```html
<a href="라우터">이동</a>
```

- form 태그

```html
<form action="라우터">~</form>
```

## 2. URI의 구성

```txt
http://localhost:3000/todo/login?id=hong&pass=1234
```

## 2.1. Protocol (네트워크 처리를 위한 약속)

```txt
http://
```

```txt
HTTP(HyperText Transfer Protocol)
: 웹 브라우저와 서버 컴퓨터간의 데이터 전송 규약

HTTPS (HTTP Secure)
: HTTP 에 보안(SSL/TLS)을 추가한 프로토콜

FTP (File Transfer Protocol)
: 파일 전송에 사용하는 프로토콜
: 웹 호스팅(웹 퍼블리싱을 하고나면 FTP 로 서버에 파일을 업로드하여 서비스)
: Filezilla, 알FTP

SMTP (Simple Mail Transfer Protocol)
: 이메일 전송

IMAP (Ineternet Message Access Protocol)
: 이메일 수신 (서버에서 관리)

POP3(Post Office Protocol 3)
: 이메일 수신(다운로드 후 로컬 관리)

DNS (Domain Name System)
: 도메인 이름을 IP 주소로 변환

DHCP (Dynamic Host Cofiguration Protocol)
: 동적 IP할당

```

### 2.2. 도메인(Domain)

```txt
http://      `localhost`      :3000/todo/login?id=hong&pass=1234

```

- 일반적으로 `홈페이지 주소`로 이해
- DNS 서버가 있어야 한다.(AWS 나 Vercel로 활용)

### 2.3. 포트(Port)

```txt
http://localhost     `:3000`       /todo/login?id=hong&pass=1234
```

- 컴퓨터의 연결 주소로서 관례상 활용하는 번호가 존재
- :80 은 웹 서비스 포트 (index.html)
- :3036 DB 서비스 포트
- :3000 리액트 포트
- :5050 Vite 프로젝트 포트

### 2.4 패스 (Path)

```txt
http://localhost:3000           `/todo/login`          ?id=hong&pass=1234
```

- 백엔드 개발자가 설정/작성합니다.

### 2.5. Query String

```txt
http://localhost:3000/todo/login        `?id=hong&pass=1234`
```

- 물어보고 결과를 받겠다 라는 뜻
- request, response

## 3. 라우터 구성(백엔드 역할)

- `site map`으로 생각하자.

```txt
http://localhost:3000/     첫페이지, 홈페이지

http://localhost:3000/about           소개
http://localhost:3000/about/mission   미션
http://localhost:3000/about/team      팀소개

http://localhost:3000/service         서비스
http://localhost:3000/blog            블로그 첫 화면
http://localhost:3000/blog/desing     블로그의 디자인
http://localhost:3000/blog/desing/1   블로그의 디자인 첫번째(REST API)
http://localhost:3000/blog/desing/detail?id=1   Query String
```

## 4. Router에 맞게 Pages 폴더를 구성하자.

```txt
http://localhost:3000/               src/pages/Index.jsx

http://localhost:3000/about          src/pages/about/Index.jsx

http://localhost:3000/about/mission  src/pages/about/mission/Index.jsx
http://localhost:3000/about/mission  src/pages/about/Mission.jsx

http://localhost:3000/about/team     src/pages/about/team/Index.jsx
http://localhost:3000/about/team     src/pages/about/Team.jsx

http://localhost:3000/service        src/pages/service/Index.jsx
http://localhost:3000/service        src/pages/service/Service.jsx

http://localhost:3000/blog             src/pages/blog/Index.jsx
http://localhost:3000/blog             src/pages/blog/Blog.jsx

http://localhost:3000/blog/design      src/pages/blog/design/Index.jsx
http://localhost:3000/blog/design      src/pages/blog/Design.jsx

http://localhost:3000/blog/design/1    src/pages/blog/detail/Index.jsx
http://localhost:3000/blog/design/1    src/pages/blog/Detail.jsx

http://localhost:3000/blog/design/deail?id=1  src/pages/blog/detail/Index.jsx
http://localhost:3000/blog/design/deail?id=1  src/pages/blog/Detail.jsx

```

## 5. npm 설치하기

```bash
npm i react-router-dom
```

## 6. Router 적용은 App.jsx 로 합시다.

- 반드시 적용 순서는 `Router > Routes > Route` 순서 기억하자.

```jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route></Route>
      </Routes>
    </Router>
  );
}

export default App;
```

## 7. 라우터 구조에 맞는 파일 생성

- src/pages/Index.jsx
- src/pages/about/About.jsx
- src/pages/about/Mission.jsx
- src/pages/about/Team.jsx
- src/pages/service/Service.jsx
- src/pages/blog/Blog.jsx
- src/pages/blog/Design.jsx
- src/pages/blog/Detail.jsx

```jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/about/About";
import Mission from "./pages/about/Mission";
import Team from "./pages/about/Team";
import Service from "./pages/service/Service";
import Blog from "./pages/blog/Blog";
import Design from "./pages/blog/Design";
import Detail from "./pages/blog/Detail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index></Index>}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/about/mission" element={<Mission />}></Route>
        <Route path="/about/team" element={<Team />}></Route>
        <Route path="/service" element={<Service />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/blog/design/1" element={<Design />}></Route>
        <Route path="/blog/design/detail" element={<Detail />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
```

- 이름 변경 가능

```jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import IndexPage from "./pages/Index";
import AboutPage from "./pages/about/About";
import MissionPage from "./pages/about/Mission";
import TeamPage from "./pages/about/Team";
import ServicePage from "./pages/service/Service";
import BlogPage from "./pages/blog/Blog";
import DesignPage from "./pages/blog/Design";
import DetailPage from "./pages/blog/Detail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IndexPage></IndexPage>}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/about/mission" element={<MissionPage />}></Route>
        <Route path="/about/team" element={<TeamPage />}></Route>
        <Route path="/service" element={<ServicePage />}></Route>
        <Route path="/blog" element={<BlogPage />}></Route>
        <Route path="/blog/design/1" element={<DesignPage />}></Route>
        <Route path="/blog/design/detail" element={<DetailPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
```

## 7.1. 중첩 라우터 (Nested)

-`<Route index element={<컴포넌트>} />` 기억하자

```jsx
// 중첩 시키자!
  <Route path="/about" element={<AboutPage />}></Route>
  <Route path="/about/mission" element={<MissionPage />}></Route>
  <Route path="/about/team" element={<TeamPage />}></Route>
/* About 관련 중첩 라우터*/
<Route path="/about">
  <Route index element={<AboutPage />}></Route>
  <Route path="mission" element={<MissionPage />}></Route>
  <Route path="team" element={<TeamPage />}></Route>
</Route>
```

- 이중중첩

```jsx
 {/* Blog 관련 */}
 <Route path="/blog">
  <Route index element={<BlogPage />}></Route>
  {/* 이중중첩 */}
  <Route path="design">
  <Route path="1" element={<DesignPage />}></Route>
  <Route path="detail" element={<DetailPage />}></Route>
```

## 7.2 Not Found 페이지 구성

- 없는 path 로 접근한 경우 처리
- /src/pages/NotFound.jsx 생성

```jsx
/* 잘못된 경로 접근 처리 */
<Route path="*" element={<NotFound />}></Route>
```

## 7.3. 라우터에 param 전달하기 및 처리

- `REST Api`방식
- 백엔드와 업무 진행시 param 이라는 단어를 알아야함.
- `경로/param`
- `http://lacalhost:300/good/1` /1 을 param이라고 함
- `http://lacalhost:300/good/2` /2 을 param이라고 함
- `http://lacalhost:300/good/333` /333 을 param이라고 함

```jsx
<Route path=":id" element={<DesignPage />}></Route>
```

```jsx
import React from "react";
import { useParams } from "react-router-dom";

function Design() {
  //객체 구조분해 할당
  const { id } = useParams();
  return <div>{id} 번째 Design</div>;
}

export default Design;
```

## 7.4. 라우터에 search parm 전달 처리하기

- Query String 처리하기
- `http://lacalhost:300/search?word=bts&cate=idol`
- `http://lacalhost:300/blog/design/detail?id=1`

```jsx
<Route path="detail" element={<DetailPage />}></Route>
```

```txt
http://localhost:3000/blog/design/detail?id=100&user=bts
```

```jsx
import React from "react";
import { useSearchParams } from "react-router-dom";

function Detail() {
  // ? search params
  const [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get("id");
  const user = searchParams.get("user");
  return (
    <div>
      블로그 상세 정보 {id} {user}내용 Detail
    </div>
  );
}

export default Detail;
```

## 7.5. 공통 레이아웃

```html
<body>
  <div class="wrap">
    <header>메뉴/로고</header>
    <main>메뉴별 내용</main>
    <footer>카피라이터</footer>
  </div>
</body>
```

```jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import IndexPage from "./pages/Index";
import AboutPage from "./pages/about/About";
import MissionPage from "./pages/about/Mission";
import TeamPage from "./pages/about/Team";
import ServicePage from "./pages/service/Service";
import BlogPage from "./pages/blog/Blog";
import DesignPage from "./pages/blog/Design";
import DetailPage from "./pages/blog/Detail";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <header>
        <Link to="/">😜로고</Link>
        <Link to="/about">🌹소개</Link>
        <Link to="/about/mission">🙌소개/미션</Link>
        <Link to="/about/team">🎂소개/팀</Link>
        <Link to="/service">😎서비스</Link>
        <Link to="/blog">🎶블로그</Link>
        <Link to="/blog/design/100">🎶블로그100번글</Link>
        <Link to="/blog/design/detail?id=200&user=iu">
          🎶블로그100번글 상세 내용
        </Link>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<IndexPage></IndexPage>}></Route>
          {/* About 관련 */}
          <Route path="/about">
            <Route index element={<AboutPage />}></Route>
            <Route path="mission" element={<MissionPage />}></Route>
            <Route path="team" element={<TeamPage />}></Route>
          </Route>

          <Route path="/service" element={<ServicePage />}></Route>

          {/* Blog 관련 */}
          <Route path="/blog">
            <Route index element={<BlogPage />}></Route>
            {/* 이중중첩 */}
            <Route path="design">
              <Route path=":id" element={<DesignPage />}></Route>
              <Route path="detail" element={<DetailPage />}></Route>
            </Route>
          </Route>
          {/* 잘못된 경로 접근 처리 */}
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </main>
      <footer>
        <Link to="/">👀 홈</Link>
      </footer>
    </Router>
  );
}

export default App;
```

- 컴포넌트로 분리하시길 권장 (Header, Footer)
- /src/components/Header.jsx

```jsx
import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <Link to="/">😜로고</Link>
      <Link to="/about">🌹소개</Link>
      <Link to="/about/mission">🙌소개/미션</Link>
      <Link to="/about/team">🎂소개/팀</Link>
      <Link to="/service">😎서비스</Link>
      <Link to="/blog">🎶블로그</Link>
      <Link to="/blog/design/100">🎶블로그100번글</Link>
      <Link to="/blog/design/detail?id=200&user=iu">
        🎶블로그100번글 상세 내용
      </Link>
    </header>
  );
}

export default Header;
```

- /src/components/Footer.jsx

```jsx
import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <Link to="/">👀 홈</Link>
    </footer>
  );
}

export default Footer;
```

- App.jsx

```jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import IndexPage from "./pages/Index";
import AboutPage from "./pages/about/About";
import MissionPage from "./pages/about/Mission";
import TeamPage from "./pages/about/Team";
import ServicePage from "./pages/service/Service";
import BlogPage from "./pages/blog/Blog";
import DesignPage from "./pages/blog/Design";
import DetailPage from "./pages/blog/Detail";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header></Header>
      <main>
        <Routes>
          <Route path="/" element={<IndexPage></IndexPage>}></Route>
          {/* About 관련 */}
          <Route path="/about">
            <Route index element={<AboutPage />}></Route>
            <Route path="mission" element={<MissionPage />}></Route>
            <Route path="team" element={<TeamPage />}></Route>
          </Route>

          <Route path="/service" element={<ServicePage />}></Route>

          {/* Blog 관련 */}
          <Route path="/blog">
            <Route index element={<BlogPage />}></Route>
            {/* 이중중첩 */}
            <Route path="design">
              <Route path=":id" element={<DesignPage />}></Route>
              <Route path="detail" element={<DetailPage />}></Route>
            </Route>
          </Route>
          {/* 잘못된 경로 접근 처리 */}
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </main>
      <Footer></Footer>
    </Router>
  );
}

export default App;
```

## 7.6. 컴포넌트에 Props 전달하기

```jsx
<Header company={"좋은회사"} service={"Todo서비스"}></Header>
```

```jsx
<Route path="/" element={<IndexPage first={"첫페이지입니다."} />}></Route>
```

## 7.7. 컴퍼넌트에 Props 인 Children 전달하기

```jsx
<Header company={"좋은회사"} service={"Todo서비스"}>
  <div>🐱‍🚀나는 자식입니다.</div>
  <div>🐱😂자식은 여러명 가능합니다.</div>
</Header>
```

```jsx
// children props 받을때
import React from "react";
import { Link } from "react-router-dom";

function Header({ children, company, service }) {
  return (
    <header>
      {children}
      <Link to="/">😜{company}</Link>
      <Link to="/about">🌹{service}</Link>
      <Link to="/about/mission">🙌소개/미션</Link>
      <Link to="/about/team">🎂소개/팀</Link>
      <Link to="/service">😎서비스</Link>
      <Link to="/blog">🎶블로그</Link>
      <Link to="/blog/design/100">🎶블로그100번글</Link>
      <Link to="/blog/design/detail?id=200&user=iu">
        🎶블로그100번글 상세 내용
      </Link>
    </header>
  );
}

export default Header;
```

- useState 로 children 변경 예제

```jsx
const [isLogin, setIsLogin] = useState(false);
```

```jsx
<Footer>
  {isLogin ? <p>🌹 로그인 중이시네요.</p> : <p>😎 로그아웃 중이시군요.</p>}
</Footer>
```

## 7.8. 레이아웃을 유지하고 Outlet에 출력하기
