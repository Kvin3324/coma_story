import {createStore} from "redux";

const appState = {
  userId: null,
  editStory: false
};

function connection(state = appState, action) {
  const newState = {...state};

  if (action.type === "USER_CONNECTED") {
    newState.userId = action.userId;
    return newState;
  }

  if (action.type === "EDIT_STORY") {
    newState.editStory = true;
    return newState;
  }

  if (action.type === "ADD_STORY") {
    newState.editStory = false;
    return newState;
  }

  return state;
}

export default createStore(connection)