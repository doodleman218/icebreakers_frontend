import React, { Component } from "react";

export class allUsers extends Component {
  renderAllUsers = () => {
    let allUsersArray = this.props.users.sort((a, b) => a.id - b.id);

    return allUsersArray.map((userObj) => {
      return (
        <span className="eachUser" key={userObj.id}>
          {userObj.username}
        </span>
      );
    });
  };

  renderBox = () => {
    if (this.props.gameStarted === false) {
      return null
    } else {
    return <div className="allUsers">
      <h3 className="allUsersTitle">All Users:</h3>
      <div className="allUsersList">{this.renderAllUsers()}</div>
    </div>;
  };
}

  render() {
    console.log("ALLUSERS", this.props.users);
    return (
    <div>
      {this.renderBox()}
    </div>
    )
  }
}

export default allUsers;
