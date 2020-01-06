import React from "react";
import AddComaStyled from "./AddcomaStyled.style";

function AddComa(props) {
  return (
    <React.Fragment>
      <AddComaStyled>
        <div className="btn--close">
          <button onClick={props.closePopup}>x</button>
        </div>
        <div className="inputs--coma">
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <label htmlFor="title" className="mr-4" >Titre:</label>
              <input type="title" id="title" className="form-group" size="30" onChange={props.inputTitle} required />
            </div>
          </div>
          <div className="input-group">
            <div className="input-group-prepend">
              <label htmlFor="coma--desc" className="mr-3">Coma:</label>
              <textarea id="coma--desc"  size="30" style={{height: "25vh", width: "25vw"}} onChange={props.inputContent} required />
            </div>
          </div>
        </div>
        <button className="btn btn-primary" onClick={props.addComaDb}>Ajouter</button>
      </AddComaStyled>
    </React.Fragment>
  )
}

export default AddComa