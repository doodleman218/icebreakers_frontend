import React, { Component } from "react";

export class allUsers extends Component {
  
  renderAllUsers = () => {
    return this.props.users.map((userObj) => {   
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
