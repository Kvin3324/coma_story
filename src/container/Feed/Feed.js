import React, {useState, useEffect} from "react";
import FeedCard from "../../components/FeedCard/FeedCard";
import FeedStyled from "./FeedStyled.style";

function Feed() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/comaStories")
    .then(response => response.json())
    .then(dataParsed => setData([...dataParsed] ))
    .catch(error => alert(error))
  }, [])

  console.log(data);


  if (data.length === 0) return "loading";

  if (data.length !== 0) {
    return data.map((card, index) => {
      return(
        <FeedStyled className="feed-cards" key={index}>
          <FeedCard data={card} />
        </FeedStyled>
      )
    })
  }
}

export default Feed