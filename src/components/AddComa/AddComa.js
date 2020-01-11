import React, {useState} from "react";
import AddComaStyled from "./AddcomaStyled.style";
import store from "../../redux/store";

function AddComa(props) {
  const [dataStore, setDataStore] = useState(store.getState());
  store.subscribe(() => setDataStore(store.getState()));

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
              <input type="title" id="title" className="form-group" size="30" value={props.titleStory} onChange={props.inputTitle} required />
            </div>
          </div>
          <div className="input-group">
            <div className="input-group-prepend">
              <label htmlFor="coma--desc" className="mr-3">Coma:</label>
              <textarea id="coma--desc"  size="30" style={{height: "25vh", width: "25vw"}} value={props.contentStory} onChange={props.inputContent} required />
            </div>
          </div>
        </div>
        {
          !dataStore.editStory ?
            <button className="btn btn-primary" onClick={props.addComaDb}>Ajouter</button>:
            <button className="btn btn-primary">Editer</button>
        }
      </AddComaStyled>
    </React.Fragment>
  )
}

export default AddComa