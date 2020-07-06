import React, { Component } from "react";

export class gameText extends Component {

  gameText = () => {
    let player = this.props.currentPlayer;
    let question = this.props.currentQuestion.content;

    if (this.props.reshufflingQuestions && this.props.reshufflingUsers === true) {
      setTimeout(() => {
        this.props.resetUsersAndQuestionsShuffle()
      }, 2000);
        return <h3>Reshuffling Questions and Users...</h3>
    } else if (this.props.reshufflingUsers === true) {
      setTimeout(() => {
        this.props.resetUsersShuffle()
      }, 2000);
        return <h3>Reshuffling Users...</h3>
    } else if (this.props.reshufflingQuestions === true) {
      setTimeout(() => {
        this.props.resetQuestionsShuffle()
      }, 2000);
        return <h3>Reshuffling Questions...</h3>
    } else {
      return (
        <div>
          <h3 className="CurrentPlayer">{player}</h3>
          <br></br>
          <h3 className="CurrentQuestion">{question}</h3>
          <br></br>
          {this.props.playerButton()}
          {this.props.hostButton()}
        </div>
      );
    }
  };

  render() {
    return <div>{this.gameText()}</div>;
  }
}

export default gameText;
