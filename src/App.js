import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Login from './containers/login'
import Home from './containers/home'
import Room from './containers/room'
import CreateRoom from './containers/createRoom'
import 'bootstrap/dist/css/bootstrap.min.css';



// componentDidMount(){
  // const token = localStorage.getItem('token')
  // if (token){
    // reqObj = {
    //   method: "GET",
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: 'Bearer ${token}',
    //   },
    // }
    // fetch("http://localhost:3000/users", reqObj)
    // .then((resp) => resp.json())
    // .then((data) => {

    // })
  // }
// }

class App extends React.Component {
  
  state = {
    currentUser: "",
    hostID: "",
    roomName: "",
    allUsers:[],
    gameStarted: false,
    hostName: ""
  }

  updateUser = (user) => {
    this.setState({
      currentUser: user
    })
  }

  roomName = (room) => {
    this.setState({
      roomName: room
    })
  }

  setHost = (host) => {
    this.setState({
      hostID: host
    })
  }

  hostName = (username) => {
    this.setState({
      hostName: username
    })
  }

  startGame = () => {
    this.setState({
      gameStarted: true
    })
  }

  updateHost = (host) => {
    this.setState({
      hostID: host
    })
  }
  
  render(){

    return (
    <Router >
      <div className="App">
      <Route exact path="/" render={ (routeParams) => {
        return <Home {...routeParams} />
      }}/>
      <Route exact path="/login" render={ (routeParams) => {
        return <Login updateUser={this.updateUser} updateHost={this.updateHost} hostName={this.hostName} roomName={this.roomName} {...routeParams} />
      }}/>
      <Route exact path="/room/:id" render={ (routeParams) => {
        return <Room currentUser={this.state.currentUser} startGame={this.startGame} gameStarted={this.state.gameStarted} hostID={this.state.hostID} roomName={this.state.roomName} hostName={this.state.hostName} {...routeParams} />
      }}/>
      <Route exact path="/create_room" render={ (routeParams) => {
        return <CreateRoom updateUser={this.updateUser} setHost={this.setHost} roomName={this.roomName} hostName={this.hostName} {...routeParams} />
      }}/>
      </div>
    </Router>
  );
  }
}

export default App;
