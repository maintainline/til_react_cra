import React from "react";
//css
import styles from "../css/StartPage.module.css";
//컴포넌트
import Header from "../components/Header";
import Footer from "../components/Footer";
import Slide from "../components/Slide";

function StartPage() {
  return (
    <>
      <div className={styles.box}>로고</div>
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
