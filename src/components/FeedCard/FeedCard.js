import React from "react";
import FeedCardStyled from "./FeedCardStyled.style";

function FeedCard(props) {
  return(
    <FeedCardStyled className="card mt-4">
      <div className="card-infos">
        <h2>{props.data.title}</h2>
        <p>{props.data.content}</p>
      </div>
    </FeedCardStyled>
  )
}

export default FeedCard