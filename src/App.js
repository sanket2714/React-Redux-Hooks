import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>Hi, I am a React App</h1>
      <p>This is also working</p>
      </div> //We generally use this code i.e. JSX.....
      //React.createElement('div',{className:'App'},React.createElement('h1',null,'Let\'s begin understanding react now!!!'))
    );
  }
}

export default App;
