import React from "react";
import { ActionCableConsumer } from "react-actioncable-provider";
// import Cable from "../components/Cable";
import Button from "react-bootstrap/Button";

export class room extends React.Component {
  state = {
    currentQuestion: [],
    currentPlayer: ""
  };

  componentDidMount() {
  console.log("mount",this.props.currentUser)
    // fetch("http://localhost:3000/users")
    // .then(resp => resp.json())
    // .then(users => {
    //   this.setState({
    //     users: users
    //   })
    // })
  }

  handleEndGame = () => {
    localStorage.removeItem("token");
    const reqObj = {
      method: "DELETE",
    };
    fetch(
      `http://localhost:3000/room/${this.props.match.params.id}`,
      reqObj
    ).then((resp) => resp.json());
    this.props.history.push("/create_room");
  };

  handleLogOut = () => {
    localStorage.removeItem("token");

    // history.push('/create_room')
  };

  handleReceived = (resp) => {
    const currentPlayer = resp
    this.setState({
      currentPlayer: currentPlayer
    })
  };

  handleClick = () => {
    console.log("clicked")
    const reqObj = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user: { room: this.props.match.params.id, currentPlayer: this.state.currentPlayer } }),
    };
    fetch(`http://localhost:3000/users/select`, reqObj);
  };

  hostButton = () => {
    console.log(this.props.currentUser, this.props.hostID, "host button")
    if (this.props.currentUser.id === this.props.hostID) {
      return <button onClick={this.handleClick}>HOST BUTTON</button>;
    } else {
     return null;
    }
  };

  playerButton = () => {
    console.log(this.props.currentUser, this.state.currentPlayer, "player button")
    if (this.props.currentUser.id === this.state.currentPlayer.id) {
      return <button onClick={this.handleClick}>PLAYER BUTTON</button>;
    } else {
     return null;
    }
  }

  render() {
    console.log("props", this.props)
    return (
      <div>
        this is a room
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

          {/* <button onClick={this.handleClick}>BUTTON</button> */}

          <Button className="btn btn-default">Primary</Button>
          <Button className="btn btn-default btn-lg"> lg</Button>
          <Button className="btn btn-warning">warning</Button>
        </ActionCableConsumer>
      </div>
    );
  }
}

export default room;


// handleClick = () => {
//   console.log("clicked")
//   const reqObj = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ user: { room: this.props.match.params.id } }),
//   };
//   fetch(`http://localhost:3000/users/test`, reqObj);
// };

// handleReceived = (resp) => {
//   console.log(resp, "recieved");
// };