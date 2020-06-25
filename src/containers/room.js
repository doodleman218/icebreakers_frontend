import React, { Component } from 'react'

export class room extends Component {
  
 
 
  handleEndGame = () => {
    localStorage.removeItem('token')
    
    // remove user
    this.props.history.push('/create_room')
  }

  handleLogOut = () => {
    localStorage.removeItem('token')

    // history.push('/create_room')
  }
  
  render() {
    return (
      <div>
        this is a room
        <button onClick={this.handleEndGame}>End Game</button>
        <button onClick={this.handleLogOut}>Log Out</button>
      </div>
    )
  }
}

export default room
