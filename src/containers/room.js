import React from "react";
import { ActionCableConsumer } from "@thrash-industries/react-actioncable-provider";
import Button from "react-bootstrap/Button";
import AllUsers from "../components/allUsers";
import GameText from "../components/gameText";
import NavBar from '../components/navBar'

export class room extends React.Component {
  state = {
    currentPlayer: "",
    currentQuestion: "",
    reshufflingUsers: false,
    reshufflingQuestions: false,
    allUsers: []
  };

  componentDidMount() {
    
  }

  handleReceived = (resp) => {

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
    const allUsers = resp.allUsers

    this.setState({
      currentPlayer: currentPlayer.username,
      currentQuestion: currentQuestion,
      reshufflingUsers: reshufflingUsers,
      reshufflingQuestions: reshufflingQuestions,
      allUsers: allUsers
    });

    // const user = resp.user.username
    // this.setState({
    //   allUsers: [...this.state.allUsers, user]
    // })
  };

  handleClick = () => {
    // console.log("handleClicked");
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
    if (this.props.currentUser.id === this.props.hostID) {
      return this.renderHostButtons();
    } else {
      return null;
    }
  };

  playerButton = () => {
    console.log("playerButton");
    if (this.props.currentUser.id === this.props.hostID ) {
      return null;
    } else if (this.props.currentUser.username === this.state.currentPlayer) {
      return <button onClick={this.handleClick}>PLAYER BUTTON</button>;
    }  else {
      return null
    }
  };

  resetUsersAndQuestionsShuffle = () => {
    this.setState({
      reshufflingUsers: false,
      reshufflingQuestions: false
    })
  }
  
  resetUsersShuffle = () => {
    this.setState({
      reshufflingUsers: false
    })
  }

  resetQuestionsShuffle = () => {
    this.setState({
      reshufflingQuestions: false
    })
  }

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
            resetUsersShuffle={this.resetUsersShuffle}
            resetQuestionsShuffle = {this.resetQuestionsShuffle}
            resetUsersAndQuestionsShuffle = {this.resetUsersAndQuestionsShuffle} 
            playerButton = {this.playerButton}
            hostButton = {this.hostButton}
          />
        </div>
      );
    }
  };

  render() {
    // console.log("props", this.props);
    console.log("all users", this.state.allUsers)
    // console.log(this.props.gameStarted);
    return (
      <div>
        <div>
        <NavBar room={this.props.roomName} currentUser={this.props.currentUser.id} host={this.props.hostID} player={this.props.currentUser.username}></NavBar>
        
        </div><br></br>
        {/* <button onClick={this.handleEndGame}>End Game</button>
        <button onClick={this.handleLogOut}>Log Out</button> */}
        <ActionCableConsumer
          channel={{
            channel: "UsersChannel",
            room: this.props.match.params.id,
          }}
          onReceived={this.handleReceived}
        >
          
          <br></br>    
          {this.startText()}
          <br></br>
          {this.hostButton()}
          {/* {this.playerButton()}           */}
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
