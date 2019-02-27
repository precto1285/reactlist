import React, { Component } from 'react';
import './App.css';
import Listarea from './Components/Listarea';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Entry from './Components/Entry';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <Entry></Entry>
        <Listarea></Listarea>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
