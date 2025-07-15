import React from "react";
import { Link } from "react-router-dom";

function Footer({ children }) {
  return (
    <footer>
      <Link to="/">👀 홈</Link>
      {children}
    </footer>
  );
}

export default Footer;
