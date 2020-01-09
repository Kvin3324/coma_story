import {createStore} from "redux";

const appState = {
  userId: null
};

function connection(state = appState, action) {
  const newState = {...state};

  if (action.type === "USER_CONNECTED") {
    // newState.isConnected = true;
    newState.userId = action.userId;
    return newState;
  }
  return state;
}

export default createStore(connection)