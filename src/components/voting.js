import React from "react";

export default function voting(props) {
  return (
    <div>
      <h3 className="currentPlayer">{props.currentPlayer}</h3>
      <h3 className="currentQuestion">
        <button onClick={() => props.handleVote("A")}>{props.votingQuestionA.content}</button>
      </h3>
      <h3 className="currentQuestion">
        <button onClick={() => props.handleVote("B")}>{props.votingQuestionB.content}</button>
      </h3>
      <br></br>
      {props.hostButton()}
    </div>
  );
}
