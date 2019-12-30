import React from "react";
import LoginStyled from "./LoginStyled.style";
import {Link} from "react-router-dom";

function Login() {
  return(
    <LoginStyled className="space--log">
      <div className="space--log--sign--up">
        <Link to={"/logIn"} > Log in </Link>
      </div>
    </LoginStyled>
  )
}

export default Login