import React, { useState, useEffect } from "react";
import FeedCard from "../../components/FeedCard/FeedCard";
import FeedStyled from "./FeedStyled.style";
import ButtonAddStyled from "./Style/ButtonAddStyled.style";
import AddComa from "../../components/AddComa/AddComa";
import store from "../../redux/store";

function Feed() {
  const [data, setData] = useState({
    data: [],
    showPopup: false,
    titleStory: "",
    contentStory: ""
  });

  const [storeFeed, setStoreFeed] = useState(store.getState());
  store.subscribe(() => setStoreFeed(store.getState()));


  useEffect(() => {
    const newState = { ...data };

    fetch("http://localhost:3000/comaStories")
      .then(response => (response.json()))
      .then(dataParsed => {
        newState.data = dataParsed
        setData(newState)
      })
      .catch(error => alert(error))
  }, [])

  console.log(data);

  function togglePopup() {
    const newState = { ...data };

    newState.showPopup = !data.showPopup;
    setData(newState);
  }

  function inputTitle(e) {
    const newState = { ...data };
    newState.titleStory = e.target.value;

    setData(newState);
  }

  function inputContent(e) {
    const newState = { ...data };
    newState.contentStory = e.target.value;

    setData(newState);
  }

  function postComa() {
    fetch(`http://localhost:3000/comaStories`, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        title: data.titleStory,
        content: data.contentStory,
        authorId: storeFeed.userId
      })
    })
      .then(response => response.json())
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

  function editStory(e) {
    console.log(e.target.nextSibling.querySelector("h2").textContent   );
    console.log(e.target.nextSibling.querySelector("p").textContent   );
    

    const newState = { ...data };
    newState.showPopup = !data.showPopup;

    newState.titleStory = e.target.nextSibling.querySelector("h2").textContent;
    console.log(newState.titleStory);
    
    newState.contentStory = e.target.nextSibling.querySelector("p").textContent;
    console.log(newState.contentStory);


    setData(newState)
  }

  if (data.data.length === 0) return "loading";

  if (data.data.length !== 0) {

    return (
      <React.Fragment>
        {
          sessionStorage.isConnected &&
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
              data.showPopup && <AddComa closePopup={togglePopup} inputTitle={e => inputTitle(e)} inputContent={e => inputContent(e)} titleStory={data.titleStory} contentStory={data.contentStory} addComaDb={postComa} />
            }
          </React.Fragment>
        }
        <div className="row">
          {
            data.data.map((card, index) => {
              return (
                <FeedStyled className="col-lg-4 feed-cards" key={index}>
                  <FeedCard data={card} editStory={editStory} />
                </FeedStyled>
              )
            })
          }
        </div>
      </React.Fragment>
    )
  }
}

export default Feed