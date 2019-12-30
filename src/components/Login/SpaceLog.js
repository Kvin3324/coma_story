import React from "react";

function SpaceLog() {
  return(
    <React.Fragment>
      <div className="space--log">
        <div className="space--log--mail">
          <input type="email" size="30" required />
        </div>
        <div className="space--log--password">
          <input type="password" name="password" required />
        </div>
        <div className="space--log--submit">
          <button className="btn btn-primary">Sign in</button>
        </div>

      </div>
    </React.Fragment>
  )
}

export default SpaceLog