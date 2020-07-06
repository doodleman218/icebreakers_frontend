import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export class home extends Component {
  render() {
    return (
      <div>
        WELCOME TO ICEBREAKERS
        <div className="home-buttons">
        <a type="button" className="btn btn-info" href="create_room/" role="button">Create a Game</a>
        <br></br>
        <a href="login/">Join a Game</a>
        </div>
      </div>
    )
  }
}

export default home
