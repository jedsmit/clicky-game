import React from 'react';
import Navbar from './components/Navbar';
import Title from './components/Title';
import GameDiv from './components/GameDiv';
import images from './assets/images/goats.json';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Title />
      <GameDiv />
      <img className="img img-thumbnail" src={require(images[0].image + ".jpg")} alt={images[0].name}></img>
    </div>
  );
}
export default App;
