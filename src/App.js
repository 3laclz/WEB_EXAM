import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, NavLink } from 'react-router-dom';





class App extends Component {


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <h3><a href='/'>Home</a></h3>
          <h3><a href='#'>Content</a></h3>
        </header>
        <p className="App-intro">
          57024211 นายธนพนธ์ โป่งมณี
        </p>

        <button>Get Data</button><br/><br/>
        <button>Clear</button>
        
      </div>
    );
  }
}

export default App;
