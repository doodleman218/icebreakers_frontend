import React, { Component } from "react";

export class voting extends Component {
  componentDidMount() {
    this.props.runTimer();
  }

  render() {
    return (
      <div>
        <h3 className="currentPlayer">{this.props.currentPlayer}</h3>
        <h3 className="currentQuestion">
          <button
            onClick={() => this.props.handleVote(this.props.votingQuestionA.id)}
          >
            {this.props.votingQuestionA.content}
          </button>
        </h3>
        <h3 className="currentQuestion">
          <button
            onClick={() => this.props.handleVote(this.props.votingQuestionB.id)}
          >
            {this.props.votingQuestionB.content}
          </button>
        </h3>
        <h3>{this.props.timerSeconds}</h3>;<br></br>
      </div>
    );
  }
}

export default voting;
