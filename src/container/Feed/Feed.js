import React, { useState, useEffect } from "react";
import FeedCard from "../../components/FeedCard/FeedCard";
import FeedStyled from "./FeedStyled.style";
import ButtonAddStyled from "./Style/ButtonAddStyled.style";
import AddComa from "../../components/AddComa/AddComa";

function Feed() {
  const [data, setData] = useState({
    data: [],
    showPopup: false,
    titleStory: "",
    contentStory: "",
  });

  useEffect(() => {
    fetch("http://localhost:3000/comaStories")
      .then(response => (response.json()))
      .then(dataParsed => setData({
        data: dataParsed,
        showPopup: false,
        titleStory: "",
        contentStory: ""
      }))
      .catch(error => alert(error))
  }, [])

  console.log(data);
  console.log(sessionStorage);

  function togglePopup() {
    const newState = {...data};

    newState.showPopup = !data.showPopup;
    setData(newState);
  }

  function inputTitle(e) {
    const newState = {...data};
    newState.titleStory = e.target.value;

    setData(newState);
  }

  function inputContent(e) {
    const newState = {...data};
    newState.contentStory = e.target.value;

    setData(newState);
  }

  function postComa() {
    fetch("http://localhost:3000/comaStories", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        title: data.titleStory,
        content: data.contentStory
      })
    })
    .then(response => console.log(response.json()))
    .then(dataParsed => {
      fetch("http://localhost:3000/comaStories")
      .then(response => response.json())
      .then(parsedData => setData({
        data: parsedData,
        showPopup: false,
        titleStory: "",
        contentStory: ""
      }))
    })
  }

  if (data.data.length === 0) return "loading";

  if (data.data.length !== 0) {
    if (sessionStorage.mail) {
      return (
        <React.Fragment>
          <div className="alert alert-warning alert-dismissible fade show mt-5" role="alert">
            Vous êtes maintenant connecté !
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <ButtonAddStyled className="btn--add">
            <button className="btn btn-primary" onClick={togglePopup}>Soumettre un Coma</button>
          </ButtonAddStyled>
          {
            function () {
              if (data.showPopup === true) {
                return(
                  <AddComa closePopup={togglePopup} inputTitle={e => inputTitle(e)} inputContent={e => inputContent(e)} addComaDb={postComa} />
                )
              }
            }()
          }
          {
            data.data.map((card, index) => {
              return (
                <FeedStyled className="feed-cards" key={index}>
                  <FeedCard data={card} />
                </FeedStyled>
              )
            })
          }
        </React.Fragment>
      )
    }
    return data.data.map((card, index) => {
      return (
        <FeedStyled className="feed-cards" key={index}>
          <FeedCard data={card} />
        </FeedStyled>
      )
    })
  }
}

export default Feed