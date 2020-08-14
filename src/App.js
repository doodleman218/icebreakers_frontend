import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./containers/login";
import Home from "./containers/home";
import Room from "./containers/room";
import CreateRoom from "./containers/createRoom";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  state = {
    currentUser: "",
    hostID: "",
    roomName: "",
    allUsers: [],
    gameStarted: false,
    hostName: "",
  };

  startGame = () => {
    this.setState({
      gameStarted: true,
    });
  };

  endGame = () => {
    this.setState({
      gameStarted: false,
    });
  };

  setCreateRoom = (currentUser, roomName, hostID, hostName) => {
    this.setState({
      currentUser: currentUser,
      roomName: roomName,
      hostID: hostID,
      hostName: hostName,
    });
  };

  setLogin = (currentUser, roomName, hostID, hostName) => {
    this.setState({
      currentUser: currentUser,
      roomName: roomName,
      hostID: hostID,
      hostName: hostName,
    });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Route
            exact
            path="/"
            render={(routeParams) => {
              return <Home {...routeParams} />;
            }}
          />
          <Route
            exact
            path="/login"
            render={(routeParams) => {
              return <Login setLogin={this.setLogin} {...routeParams} />;
            }}
          />
          <Route
            exact
            path="/room/:id"
            render={(routeParams) => {
              return (
                <Room
                  currentUser={this.state.currentUser}
                  startGame={this.startGame}
                  endGame={this.endGame}
                  gameStarted={this.state.gameStarted}
                  hostID={this.state.hostID}
                  roomName={this.state.roomName}
                  hostName={this.state.hostName}
                  {...routeParams}
                />
              );
            }}
          />
          <Route
            exact
            path="/create_room"
            render={(routeParams) => {
              return (
                <CreateRoom
                  setCreateRoom={this.setCreateRoom}
                  {...routeParams}
                />
              );
            }}
          />
        </div>
      </Router>
    );
  }
}

export default App;
