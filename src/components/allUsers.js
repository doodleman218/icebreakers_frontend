import React, { Component } from "react";

export class allUsers extends Component {
  
  userColor = (userObj) => {
    if (userObj.is_active === true) {
      return <span><h5 className="userTrue">{userObj.username}</h5></span>
    } else {
      return <span><h5 className="userFalse">{userObj.username}</h5></span>
    }
  }
  
  renderAllUsers = () => {
    
    let allUsersArray = this.props.users.sort((a, b) => a.id - b.id);
    
    return allUsersArray.map((userObj) => {
      return (
        <span className="eachUser" key={userObj.id}>
          {this.userColor(userObj)}
          {/* {userObj.username} */}
        </span>
      );
    });
  };

  renderBox = () => {
    if (this.props.gameStarted === false) {
      return null
    } else {
    return <div className="allUsers">
      <h3><span className="allUsersTitle">Players</span></h3>
      <div className="allUsersList">{this.renderAllUsers()}</div>
    </div>;
  };
}

  render() {
    return (
    <div>
      {this.renderBox()}
    </div>
    )
  }
}

export default allUsers;
