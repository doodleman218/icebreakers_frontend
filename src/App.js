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


function App() {
  return (
    <Router >
      <div className="App">
      <Route exact path="/" component={Login}/>
      <Route exact path="/room/:id" component={Room}/>
      <Route exact path="/create_room" component={CreateRoom}/>
      </div>
    </Router>
  );
}

export default App;
