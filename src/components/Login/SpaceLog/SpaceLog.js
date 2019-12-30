import React, {useState, useRef } from "react";
import SpaceLogStyled from "./SpaceLogStyled.style";
import { Link } from "react-router-dom";

function SpaceLog(props) {
  const [data, setData] = useState([]);
  const emailValue = useRef(null);
  const pswValue = useRef(null);

  function checkLogs() {
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        mail: emailValue.current.value,
        paswword: pswValue.current.value
      })
    })
    .then(response => response.json())
    .then(dataParsed => {
      fetch("http://localhost:3000/db")
      .then(response => response.json())
      .then(parsedData => setData([...parsedData.users]))
    })
  }

  console.log(data);


  return(
    <React.Fragment>
      <SpaceLogStyled className="space--log mt-5">
        <h1 className="mb-5">Se connecter:</h1>
        <div className="space--log--mail">
          <label htmlFor="mail" className="mr-4" >Email:</label>
          <input type="email" id="mail" className="form-group" placeholder="name@example.com" size="30" ref={emailValue} required />
        </div>
        <div className="space--log--password">
          <label htmlFor="mail" className="mr-4">Mot de passe:</label>
          <input type="password" id="password" className="form-group" name="password" ref={pswValue} required />
        </div>
        <div className="space--log--submit">
          <Link to={`${props.match.path = "/"}`}  >
            <button className="btn btn-primary" onClick={checkLogs} >Sign in</button>
          </Link>
        </div>
      </SpaceLogStyled>
    </React.Fragment>
  )
}

export default SpaceLog