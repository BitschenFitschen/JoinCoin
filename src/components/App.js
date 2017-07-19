import React, { Component } from 'react';
import Header from './header/Header';
import Beginner from './main/Beginner';
import Introduction from './main/Introduction';
import Advanced from './main/Advanced';
import Ticker from './footer/Ticker';
import '../css/style.css';


class App extends Component {
  render() {
    return (
      <div className="App">
          <div className="landingPage">
             <Header />
             <Beginner />
             <Introduction />
             <Advanced />
             <Ticker />
           </div>
      </div>
    );
  }
}

export default App;
