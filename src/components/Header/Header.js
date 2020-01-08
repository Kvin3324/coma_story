import React, {useState} from "react";
import HeaderStyled from "./HeaderStyled.style";
import Login from "../Login/Login/Login";
import store from "../../redux/store";
import Logout from "../Logout/Logout";


function Header() {
  const [data, setData] = useState(store.getState());
  store.subscribe(() => setData(store.getState()));

  return(
    <header>
      <HeaderStyled className="header--title">
        <h1 className="pt-4 pl-5">#COMA</h1>
        {
          function () {
            if (store.getState() === false) {
              return <Login />
            }
            if (store.getState() === true) {
              return <Logout />
            }
          }()
        }
      </HeaderStyled>
    </header>
  )
}

export default Header