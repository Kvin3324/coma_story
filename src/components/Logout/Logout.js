import React from "react";
import LogoutStyled from "./LogoutStyled.style";

function Logout() {
  function clearSession() {
    sessionStorage.clear();
    document.location.reload(true);
  }

  return(
    <LogoutStyled className="space--log--logout">
      <button onClick={clearSession}>Logout</button>
    </LogoutStyled>
  )
}

export default Logout