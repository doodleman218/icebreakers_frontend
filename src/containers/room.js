import React, { Component } from 'react'

export class room extends Component {
  
  handleLogOut = () => {
    
  }
  
  render() {
    return (
      <div>
        this is a room
        <button onClick={this.handleLogOut}>End Game</button>
      </div>
    )
  }
}

export default room
