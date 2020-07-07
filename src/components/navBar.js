import React, { Component } from 'react'

export class navBar extends Component {
  
  logOutBtn = () => {
    if (this.props.currentUser === this.props.host) {
      return <button className="LogoutBtn" onClick={this.props.endGameBtn}>End Game</button>
    } else {
      return <button className="LogoutBtn" onClick={this.props.logoutBtn}>Logout</button>
    }
  }
  
  render() {
    return (
      <div className="NavBar">
        {this.logOutBtn()}
        <div className="NavBarTitle">ICEBREAKERS</div>
        <div className="NavBarInfoParent">
          <span className="NavBarInfo">Room: {this.props.room} </span>
          <span className="NavBarInfo">Player: {this.props.player}</span>
        </div>
      </div>
    )
  }
}

export default navBar
