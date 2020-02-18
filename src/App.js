import React, { Component } from 'react';
import "./App.css"
import Navbar from './components/Navbar';
import Title from './components/Title';
import GameHeader from './components/GameHeader';
// import Card from './components/Card';
import images from './assets/images/goats.json';


class App extends Component {

  state = {
    images,
    goatsClicked: []
  }

  //apply shuffle function to image array
  shuffleGoats = () => {
    this.setState({ images: this.shuffle(images) })
  }

  //function to shuffle the image array
  shuffle = (arr) => {
    var i, j, temp;
    for (i = arr.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
    return arr;
  }

  render() {
    return (
      <div className="App" >
        <Navbar />
        <Title />
        <GameHeader />
        {/* <Card /> */}
        <div>{
          images.map((goat) => {
            return (<img onClick={this.shuffleGoats} key={goat.id} className="img img-thumbnail" src={require(goat.image + ".jpg")} alt={goat.name}></img>)
          })
        }
        </div>
      </div>
    );
  };
}

export default App;
