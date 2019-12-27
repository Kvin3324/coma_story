import React from "react";
import FeedCard from "../../components/FeedCard/FeedCard";
import FeedStyled from "./FeedStyled.style";

function Feed() {
  return(
    <React.Fragment>
      <FeedStyled className="feed-cards">
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
      </FeedStyled>
    </React.Fragment>
  )
}

export default Feed