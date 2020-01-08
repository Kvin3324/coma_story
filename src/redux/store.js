import {createStore} from "redux";

const userConnection = false;

function connection(state = userConnection, action) {
  if (action.type === "USER_CONNECTED") {
    return state = true;
  }
  return state;
}

export default createStore(connection)