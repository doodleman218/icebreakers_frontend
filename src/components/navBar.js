import React, { Component } from 'react'
import icebreakersv8 from "../logo/icebreakersv8.png"

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
        <div className="NavBarTitle"><img className="navLogo"src={icebreakersv8} alt="icebreakers logo"/></div>
        {/* <div className="NavBarInfoParent"> */}
          <span className="NavBarInfo"> 
            <div className="navBarInfoRoom">Room</div>
            <div className="navBarInfoName">{this.props.room}  </div>
          </span>
          
        </div>
      // </div>
    )
  }
}

export default navBar
