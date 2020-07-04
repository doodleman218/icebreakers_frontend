import React from "react";
import { ActionCableConsumer } from "@thrash-industries/react-actioncable-provider";
import Button from "react-bootstrap/Button";
import AllUsers from "../components/allUsers";
import GameText from "../components/gameText";

export class room extends React.Component {
  state = {
    currentPlayer: "",
    currentQuestion: "",
    reshufflingUsers: false,
    reshufflingQuestions: false,
    allUsers: [],
  };

  componentDidMount() {
    
  }

  handleReceived = (resp) => {
    // debugger
    console.log("first", resp);
    if (this.props.gameStarted === false) {
      {
        this.props.startGame();
      }
    }
    const currentPlayer = resp.currentPlayer;
    const currentQuestion = resp.currentQuestion;
    const reshufflingUsers = resp.reshufflingUsers;
    const reshufflingQuestions = resp.reshufflingQuestions;

    this.setState({
      currentPlayer: currentPlayer.username,
      currentQuestion: currentQuestion,
      reshufflingUsers: reshufflingUsers,
      reshufflingQuestions: reshufflingQuestions,
    });

    // const user = resp.user.username
    // this.setState({
    //   allUsers: [...this.state.allUsers, user]
    // })
  };

  handleClick = () => {
    // console.log("handleClicked");
    // debugger
    const reqObj = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          room: this.props.match.params.id,
          currentPlayer: this.state.currentPlayer,
        },
        question: {
          id: this.state.currentQuestion.id,
        },
      }),
    };
    fetch(`http://localhost:3000/users/select/foo`, reqObj);
  };

  handleStartClick = () => {
    const reqObj = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          room: this.props.match.params.id,
        },
      }),
    };
    fetch(`http://localhost:3000/users/start/foo`, reqObj);
  };

  renderHostButtons = () => {
    if (this.props.gameStarted === false) {
      return (
        <div>
          <button onClick={this.handleStartClick}>START GAME</button>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.handleClick}>HOST BUTTON</button>
        </div>
      );
    }
  };

  hostButton = () => {
    // console.log(this.props.currentUser, this.props.hostID, "host button");
    if (this.props.currentUser.id === this.props.hostID) {
      return this.renderHostButtons();
    } else {
      return null;
    }
  };

  playerButton = () => {
    console.log("playerButton");
    if (this.props.currentUser.username === this.state.currentPlayer) {
      return <button onClick={this.handleClick}>PLAYER BUTTON</button>;
    } else {
      return null;
    }
  };

  startText = () => {
    if (this.props.gameStarted === false) {
      return <div>The host will start the game soon</div>;
    } else {
      return (
        <div>
          <GameText
            currentPlayer={this.state.currentPlayer}
            currentQuestion={this.state.currentQuestion}
            reshufflingUsers={this.state.reshufflingUsers}
            reshufflingQuestions={this.state.reshufflingQuestions}
          />
        </div>
      );
    }
  };

  render() {
    // console.log("props", this.props);
    console.log(this.props.gameStarted);
    return (
      <div>
        <div>
        <a>Room: {this.props.roomName} </a>
        <a>Player: {this.props.currentUser.username}</a>
        </div><br></br>
        <button onClick={this.handleEndGame}>End Game</button>
        <button onClick={this.handleLogOut}>Log Out</button>
        <ActionCableConsumer
          channel={{
            channel: "UsersChannel",
            room: this.props.match.params.id,
          }}
          onReceived={this.handleReceived}
        >
          {this.hostButton()}
          {this.playerButton()}
          <br></br>    
          {this.startText()}
          <br></br>
          
        </ActionCableConsumer>
        {/* 
          <Button className="btn btn-default">Primary</Button>
          <Button className="btn btn-default btn-lg"> lg</Button>
          <Button className="btn btn-warning">warning</Button> */}
        <ul>
          <AllUsers users={this.state.allUsers}></AllUsers>
        </ul>
      </div>
    );
  }
}

export default room;

// handleClick = () => {
//   console.log("clvicked")
//   const reqObj = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ user: { room: this.props.match.params.id } }),
//   };
//   fetch(`http://localhost:3000/users/test`, reqObj);
// };


// {Resp = {type: 'player', player: {}} if (resp.type === 'player)

// handleEndGame = () => {
//   localStorage.removeItem("token");
//   const reqObj = {
//     method: "DELETE",
//   };
//   fetch(
//     `http://localhost:3000/room/${this.props.match.params.id}`,
//     reqObj
//   ).then((resp) => resp.json());
//   this.props.history.push("/create_room");
// };

// handleLogOut = () => {
//   localStorage.removeItem("token");

//   // history.push('/create_room')
// };
