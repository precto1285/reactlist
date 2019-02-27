import React, { Component } from 'react';
import './App.css';
import Listarea from './Components/Listarea';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Entry from './Components/Entry';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <Header
          title="Grocery List"></Header>

        <br />
        <div className="row">
          <div className="col-md-6">
            <Entry
              newitem="Milk"></Entry>
          </div>
          <br />
          <div className="col-md-6">
            <Listarea
              items="Fish"></Listarea>
          </div>
        </div>
        <br />
        <Footer
          footer="Thank You For Visiting!"></Footer>
      </div>
    );
  }
}

export default App;
