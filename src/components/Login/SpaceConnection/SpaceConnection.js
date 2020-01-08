import React, {useState, useRef, useEffect} from "react";
import SpaceLogStyled from "../SpaceLog/SpaceLogStyled.style";
import { Redirect } from "react-router-dom";
import store from "../../../redux/store";

function SpaceConnection() {
  const [data, setData] = useState({
    users: [],
    redirectionConnection: false
  })
  const inputMail = useRef(null);
  const inputPsw = useRef(null);

  useEffect(() => {
    fetch("http://localhost:3000/users")
    .then(response => response.json())
    .then(dataParsed => setData({
      users: dataParsed,
      redirectionConnection: false
    }))
  }, [])

  function checkAccount() {
    if (data.users.find(user => user.mail === inputMail.current.value && user.password === inputPsw.current.value)) {
      const newState = {...data};
      newState.redirectionConnection = true;
      store.dispatch({type: "USER_CONNECTED"});
      sessionStorage.setItem("mail", `${inputMail.current.value}`)
      setData(newState);
    }
  }

  return (
    <React.Fragment>
      <SpaceLogStyled className="space--log mt-5">
        <h1 className="mb-5">Connexion:</h1>
        <div className="space--log--mail">
          <label htmlFor="mail" className="mr-4">Email:</label>
          <input type="email" id="mail" className="form-group" placeholder="name@example.com" size="30" ref={inputMail} required />
        </div>
        <div className="space--log--password">
          <label htmlFor="mail" className="mr-4">Mot de passe:</label>
          <input type="password" id="password" className="form-group" name="password" ref={inputPsw} required />
        </div>
        <div className="space--log--submit">
          <button className="btn btn-primary" onClick={checkAccount}>Connexion</button>
          {
            function () {
              if (data.redirectionConnection === true) {
                return <Redirect to="/" />
              }
            }()
          }
        </div>
      </SpaceLogStyled>
    </React.Fragment>
  )
}

export default SpaceConnection