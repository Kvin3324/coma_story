import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import About from './components/About/About';
import Feed from './container/Feed/Feed';

function App() {
  return (
    <div className="App">
    <Header />
      <div className="container">
        <About />
        <Feed />
      </div>
    </div>
  );
}

export default App;
