import React from "react";
import LoginStyled from "./LoginStyled.style";

function Login() {
  return(
    <LoginStyled className="space--log">
      <div className="space--log--sign--up">
        <p>Sign up</p>
      </div>
      <div className="space--log--sign--in">
        <p>Sign in</p>
      </div>
    </LoginStyled>
  )
}

export default Login