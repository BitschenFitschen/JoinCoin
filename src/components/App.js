import React, { Component } from 'react';
import Header from './header/Header';
import Beginner from './main/Beginner';
import Introduction from './main/Introduction';
import Advanced from './main/Advanced';
import Ticker from './footer/Ticker';


class App extends Component {
  render() {
    return (
      <div className="App">
         <Header />
         <Beginner />
         <Introduction />
         <Advanced />
         <Ticker />
      </div>
    );
  }
}

export default App;
