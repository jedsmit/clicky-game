import React, { Component } from 'react';
import "./App.css"
import Navbar from './components/Navbar';
import Title from './components/Title';
import Card from './components/Card';
import images from './assets/images/goats.json';


class App extends Component {

  state = {
    images,
    goatsClicked: [],
    score: 0,
    topScore: 0,
    message: "Click on a goat to begin!"
  }

  //==============functions==================

  //apply shuffle function to image array
  shuffleGoats = () => {
    this.setState({ images: this.shuffle(images) })
  };

  //increments the score by setting the score state to the length of the goats clicked array, then updates the top score if needed 
  incrementScore = () => {
    let newScore = this.state.goatsClicked.length;
    console.log("newScore: " + newScore);
    this.setState({ score: newScore });
    console.log("score: " + this.state.score)
    if (this.state.topScore < this.state.score) {
      this.setState({ topScore: this.state.score })
    };
  };

  // handles clicks, calls score and shuffle functions
  clickHandler = (event) => {
    this.setState({ message: "Click a goat to begin!" })
    let goat = event.target.id;
    //check to see if the goat has already been clicked, if not adds to clickedGoats array and increments score
    if (this.state.goatsClicked.includes(goat)) {
      this.setState({ goatsClicked: [], score: 0, message: "You already picked that goat. Start over." });
    } else {
      let goatsClicked = this.state.goatsClicked;
      goatsClicked.push(goat);
      this.setState({ goatsClicked: goatsClicked, message: "Keep Clicking!" })
      console.log(this.state.goatsClicked);
      this.incrementScore();
    };
    //checks for winner by comparing score to clickedGoats array length
    if (this.state.score === this.state.images.length) {
      this.setState({ message: "You got them all! Click a goat to play again!" });
    };
    this.shuffleGoats();
  };

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

  //==================render components=================

  render() {
    return (
      <div className="App" >
        <Navbar message={this.state.message} score={this.state.score} topScore={this.state.topScore} />
        <Title />
        {
          this.state.images.map(goat => {
            return <Card key={goat.id} id={goat.id} className={"img img-thumbnail hvr-grow-shadow"} src={require(goat.image + ".jpg")} alt={goat.name} onClick={this.clickHandler} />
          })
        }

      </div >
    );
  };
}

export default App;
