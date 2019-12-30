import React from "react";
import HeaderStyled from "./HeaderStyled.style";
import Login from "../Login/Login/Login";

function Header() {
  return(
    <header>
      <HeaderStyled className="header--title">
        <h1 className="pt-4 pl-5">#COMA</h1>
      <Login />
      </HeaderStyled>
    </header>
  )
}

export default Header