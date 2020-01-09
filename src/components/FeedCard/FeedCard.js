import React, {useState} from "react";
import FeedCardStyled from "./FeedCardStyled.style";
import store from "../../redux/store";

function FeedCard(props) {
  const [user, setUser] =  useState(store.getState())

  return(
    <FeedCardStyled className="card mt-4">
      {
        user.userId === props.data.authorId && <i className="fas fa-pencil-alt" onClick={props.editStory}></i>
      }
      <div className="card-infos">
        <h2>{props.data.title}</h2>
        <p>{props.data.content}</p>
      </div>
    </FeedCardStyled>
  )
}

export default FeedCard