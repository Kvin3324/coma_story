import React, { useState, useRef } from "react";
import SpaceLogStyled from "./SpaceLogStyled.style";
import { Redirect } from "react-router-dom";
import store from "../../../redux/store";

function SpaceLog(props) {
  const [data, setData] = useState({
    users: [],
    redirection: false,
    showNotif: false
  });
  const emailValue = useRef(null);
  const pswValue = useRef(null);

  function checkLogs() {
    fetch("http://localhost:3000/users")
      .then(response => response.json())
      .then(dataParsed => {
        if (!dataParsed.find(user => user.mail === emailValue.current.value)) {
          fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
              "Content-type": "application/json"
            },
            body: JSON.stringify({
              mail: emailValue.current.value,
              password: pswValue.current.value,
              yourStories: []
            })
          })
            .then(response => response.json())
            .then( newUser => {
              // setData({
              //   users: dataParsed,
              //   redirection: true,
              //   shwoNotif: false
              // })
              // return <Redirect to="/" />
              sessionStorage.isConnected = true;
              store.dispatch({type: "USER_CONNECTED", userId: newUser.id})
              props.history.push("/");
              props.history.goForward();
              }
            )
        } else {
          const newState = { ...data };

          newState.showNotif = true;
          setData(newState)
        }
      })
  }

  console.log(data);

  return (
    <React.Fragment>
      <SpaceLogStyled className="space--log">
        <h1 className="mb-5">Inscription:</h1>
        <div className="space--log--mail">
          <label htmlFor="mail" className="mr-4" >Email:</label>
          <input type="email" id="mail" className="form-group" placeholder="name@example.com" size="30" ref={emailValue} required />
        </div>
        <div className="space--log--password">
          <label htmlFor="mail" className="mr-4">Mot de passe:</label>
          <input type="password" id="password" className="form-group" name="password" ref={pswValue} required />
        </div>
        <div className="space--log--submit">
          <button className="btn btn-primary" onClick={checkLogs}>Inscription</button>
          {
            function () {
              if (data.showNotif === true) {
                return (
                  <div className="alert alert-danger mt-4" role="alert">
                    <p>Un compte existe déjà, veuillez utiliser une adresse mail différente.</p>
                  </div>
                )
              }
              if (data.redirection === true) {
                return <Redirect to="/" />
              }
            }()
          }
        </div>
      </SpaceLogStyled>
    </React.Fragment>
  )
}

export default SpaceLog