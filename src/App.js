import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Quote from "./Quote";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Simpsons Quotes</h1>
        </header>
        <Quote
          destination= "Italie"
          country="Italie"
          distance= "1297km"
          photo="https://images.salaun-holidays.com/(Image)-image-Italie-Rome-Fontaine-de-Trevi-131-fo_64257101-09032017.jpg"
        />

        <Quote
          destination= "Chine"
          country="Chine"
          distance= "8017km"
          photo="https://www.voyages-chine.fr/image/chine/bandeau/lanternes_lijiang_tunnan_20171213111759.jpg"
        />
      </div>
    );
  }
}

export default App;