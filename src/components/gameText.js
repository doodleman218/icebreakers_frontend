import React, { Component } from "react";

export class gameText extends Component {

renderText = () => {
  let player = this.props.currentPlayer;
    let question = this.props.currentQuestion.content;
return (
    <div>
    <h3 className="currentPlayer">{player}</h3>
    <h3 className="currentQuestion">{question}</h3>
    <br></br>
    {this.props.playerButton()}
    {this.props.hostButton()}
  </div>
)
}

callReset = (resetFunc) => {
  setTimeout(resetFunc, 2000);
}

  gameText = () => {
    // let player = this.props.currentPlayer;
    // let question = this.props.currentQuestion.content;

    if (this.props.reshufflingQuestions && this.props.reshufflingUsers === true) {
      this.callReset(this.props.resetUsersAndQuestionsShuffle)
      // setTimeout(() => {
      //   this.props.resetUsersAndQuestionsShuffle()
      // }, 2000);
        return <h3>Reshuffling Questions and Users...</h3>
    } else if (this.props.reshufflingUsers === true) {
      this.callReset(this.props.resetUsersShuffle)
      // setTimeout(() => {
      //   this.props.resetUsersShuffle()
      // }, 2000);
        return <h3>Reshuffling Users...</h3>
    } else if (this.props.reshufflingQuestions === true) {
      this.callReset(this.props.resetQuestionsShuffle)
      // setTimeout(() => {
      //   this.props.resetQuestionsShuffle()
      // }, 2000);
        return <h3>Reshuffling Questions...</h3>
    } else {
      
      return this.renderText()
      // return (
      //   <div>
      //     <h3 className="currentPlayer">{player}</h3>
      //     <h3 className="currentQuestion">{question}</h3>
      //     <br></br>
      //     {this.props.playerButton()}
      //     {this.props.hostButton()}
      //   </div>
      // );
    }
  };

  render() {
    return <div>{this.gameText()}</div>;
  }
}

export default gameText;

