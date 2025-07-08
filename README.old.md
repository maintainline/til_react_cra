# 리액트 CRA 프로젝트

- `Create React App` 줄임말

## 1. VSCode 플러그인 설치

- ESLint 설치
- Error Lens 설치
- ES7+ React/Redux/React-Native snippets 설치
- prettier (기존설치 완료) 설치

## 2. 리액트 프로젝트 생성 규칙

- 프로젝트명은(폴더명) 반드시 `소문자 영문`
- 폴더명에 특수기호는 `-` 외에는 금지
- 프로젝트 생성하면 기본적으로 `git init` 이 자동 셋팅됩니다.

## 3. 리액트 프로젝트 `보일러플레이트` 생성 명령

```bash
npx create-react-app@latest 프로젝트명
npx create-react-app@latest .
```






# useState

- 리액트에서 변수를 만드는 법
- `변수의 값이 변하면 웹브라우저의 화면도 변한다.`

```jsx
const [변수명, set변수명] = useState(초기값);
```
