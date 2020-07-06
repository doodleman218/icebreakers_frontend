import React, { Component } from "react";

export class allUsers extends Component {
  
  renderAllUsers = () => {

    let allUsersArray = this.props.users.sort((a,b) => a.id - b.id )

    return allUsersArray.map((userObj) => {   
      return <li key={userObj.id}>{userObj.username}</li>;
    })
  }
  
  render() {
    console.log("ALLUSERS", this.props.users);
    return (
      <div>
        All Users: 
        {this.renderAllUsers()}
      </div>
    );
  }
}

export default allUsers;
