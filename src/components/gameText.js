import React, { Component } from "react";

export class gameText extends Component {
  // userReshuffle = "reshuffling users"
  userReshuffle = () => {
    return "HELLO";
  };

  gameText = () => {
    let player = this.props.currentPlayer;
    let question = this.props.currentQuestion.content;

    if (this.props.reshufflingQuestions && this.props.reshufflingUsers) {
      return (
        <div>
          <h3>reshuffling users and questions</h3>{" "}
          <h3 className="CurrentPlayer">{player}</h3>
          <br></br>
          <h3 className="CurrentQuestion">{question}</h3>
        </div>
      );
    } else if (this.props.reshufflingUsers === true) {
      return setTimeout(() => {
        this.userReshuffle();
      }, 1000);

      // this.userReshuffle()
      // return
      // <h2>{player}, {question}</h2>
      // return setTimeout(() => <h3>reshuffling users</h3>, 3000);
      //         () => clearTimeout(setTimeout);
    } else if (this.props.reshufflingQuestions === true) {
      return (
        <div>
          <h3>reshuffling questions</h3>
          <h3 className="CurrentPlayer">{player}</h3>
          <br></br>
          <h3 className="CurrentQuestion">{question}</h3>
        </div>
      );
    } else {
      return (
        <div>
          <h3 className="CurrentPlayer">{player}</h3>
          <br></br>
          <h3 className="CurrentQuestion">{question}</h3>
        </div>
      );
    }
  };

  render() {
    return <div>{this.gameText()}</div>;
  }
}

export default gameText;

// this.props.reshufflingUsers
// this.props.reshufflingQuestions
// this.props.currentPlayer
//     this.props.currentQuestion.content
