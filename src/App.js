import React, { Component } from 'react';
import "./App.css"
import Navbar from './components/Navbar';
import Title from './components/Title';
import GameDiv from './components/GameDiv';
import images from './assets/images/goats.json';

class App extends Component {
  render() {
    return (
      <div className="App" >
        <Navbar />
        <Title />
        {/* <GameDiv> */}
        <div>{
          images.map(goat => {
            return (< img className="img img-thumbnail" src={require(goat.image + ".jpg")} alt={goat.name}></img>)
          })
        } </div>
        {/* </GameDiv> */}
      </div>
    );
  };
}
export default App;
