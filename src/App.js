import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import About from './components/About/About';
import Feed from './container/Feed/Feed';
import { Route, BrowserRouter } from "react-router-dom";
import SpaceLog from './components/Login/SpaceLog/SpaceLog';
import SpaceConnection from './components/Login/SpaceConnection/SpaceConnection';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Header />
      <Route exact path="/logIn" component={SpaceLog} />
      <Route exact path="/connection" component={SpaceConnection} />
        <div className="container col-12">
          <Route exact path="/" component={About}  ></Route>
          <Route exact path="/" component={Feed}  ></Route>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
