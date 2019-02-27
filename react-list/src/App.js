import React, { Component } from 'react';
import './App.css';
import Listarea from './Components/Listarea';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Entry from './Components/Entry';

class App extends Component {
  constructor() {
    super();
    this.state = {
      title: 'Grocery List',
      newItem: 'Milk',
      items: 'Fish',
      footer: 'Thank You For Visiting!'
    }
  }

  render() {
    return (
      <div className="App container">
        <Header
          title={this.state.title}></Header>
        <br />
        <div className="row">
          <div className="col-md-6">
            <Entry
              newitem={this.state.newItem}></Entry>
          </div>
          <br />
          <div className="col-md-6">
            <Listarea
              items={this.state.items}></Listarea>
          </div>
        </div>
        <br />
        <Footer
          footer={this.state.footer}></Footer>
      </div >
    );
  }
}

export default App;
