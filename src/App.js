import React, { Component } from 'react';
import "./App.css"
import Navbar from './components/Navbar';
import Title from './components/Title';
import GameHeader from './components/GameHeader';
import images from './assets/images/goats.json';

class App extends Component {




  render() {
    return (
      <div className="App" >
        <Navbar />
        <Title />
        <GameHeader />
        <div>{
          images.map((goat) => {
            return (< img key={goat.id} className="img img-thumbnail" src={require(goat.image + ".jpg")} alt={goat.name}></img>)
          })
        }
        </div>

      </div>
    );
  };
}
export default App;
