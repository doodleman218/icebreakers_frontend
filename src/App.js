import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import { createBrowserHistory } from 'history'
import Login from './containers/login'
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
    hostID: ""
  }

  updateUser = (user) => {
    this.setState({
      currentUser: user
    })
  }

  setHost = (host) => {
    this.setState({
      hostID: host
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
        return <Login updateUser={this.updateUser} updateHost={this.updateHost} {...routeParams} />
      }}/>
      <Route exact path="/room/:id" render={ (routeParams) => {
        return <Room currentUser={this.state.currentUser} hostID={this.state.hostID} {...routeParams} />
      }}/>
      <Route exact path="/create_room" render={ (routeParams) => {
        return <CreateRoom updateUser={this.updateUser} setHost={this.setHost} {...routeParams} />
      }}/>
      </div>
    </Router>
  );
  }
}

export default App;
