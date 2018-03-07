import React, { Component } from "react";
import Wrapper from "./components/Wrapper/Wrapper";
import Navbar from "./components/Navbar/Navbar";
import Card from "./components/Card"
import images from "./images.json";

let imagesArr = images;
// let idArr;

class App extends Component {

  state = {
    imagesArr: images,
    idArr: [],
    score: 0,
    text: "Try to click on all 12 images without clicking the same image twice",
    highestScore: 0,
    gameOver: false
  };

  handleGameLogic = id => {
    let shuffledImages;
    console.log(id);

    for (let i = imagesArr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [imagesArr[i], imagesArr[j]] = [imagesArr[j], imagesArr[i]];
    }
    shuffledImages = imagesArr;

    this.setState({ imagesArr: shuffledImages });

    const updatedIdArr = this.state.idArr;
    if (updatedIdArr.indexOf(id) !== -1) {
      this.setState({
        score: 0,
        text: "You guessed incorrectly!",
        idArr: []
      });
    }

    else {

      const newScore = this.state.score + 1;
      console.log(`newScore: ${newScore}`);
      let newHighScore;

      if (newScore > this.state.highestScore) {
        newHighScore = newScore;
        console.log(`newHIGHScore: ${newHighScore}`);
        updatedIdArr.push(id);
        this.setState({
          idArr: updatedIdArr,
          score: this.state.score + 1,
          highestScore: newHighScore,
          text: "You guessed correctly!"
        });
      } else {
        updatedIdArr.push(id);
        this.setState({
          idArr: updatedIdArr,
          score: this.state.score + 1,
          text: "You guessed correctly!"
        });
      }



      // if(this.state.score > this.state.highestScore) {
      //   this.setState({highestScore: this.state.score})
      // }

    }
    console.log(`idArr: ${this.state.idArr}`);
    console.log(`score: ${this.state.score}`);
    console.log('shuffledImages:', shuffledImages);
    console.log(`text: ${this.state.text}`);



  };

  render() {
    return (
      <div>
        <Navbar
          score={this.state.score}
          text={this.state.text}
          highestScore={this.state.highestScore}
        />
        <Wrapper>
          {this.state.imagesArr.map(image => (
            <Card
              handleGameLogic={this.handleGameLogic}
              handleIncrement={this.handleIncrement}
              id={image.id}
              key={image.id}
              name={image.name}
              image={image.image}
            />
          ))}
        </Wrapper>
      </div>
    )
  }
}

export default App;