import React, { Component } from 'react';
import './App.css';
import './stylesheets/carousel.css';
import { Artist } from './containers';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Artist />
      </div>
    );
  }
}

export default App;
