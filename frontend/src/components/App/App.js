import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//import components
import NavBar from '../NavBar/NavBar';



class App extends Component {
  render() {
    return (
      <div className="App container-fluid">

        <NavBar/>
      </div>
    );
  }
}

export default App;
