import React from "react";

function Logout() {
  function clearSession() {
    sessionStorage.clear();
    document.location.reload(true);
    console.log(sessionStorage);
  }

  return(
    <div className="space--log--logout">
      <button onClick={clearSession}>Logout</button>
    </div>
  )
}

export default Logout