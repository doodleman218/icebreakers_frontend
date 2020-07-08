import React, { Component } from "react";
import { Link } from "react-router-dom";
import login from "./login";

export class home extends Component {
  render() {
    return (
      <div>
        <h1>WELCOME TO ICEBREAKERS</h1>
        <div className="homeBtnContainer" >
          <Link to="/create_room">
            <button className="homeCreateBtn"><h3>Create a Room</h3></button>
          </Link>
          </div>
          <div>
          <Link to="/login">
            <button className="homeJoinBtn"><h3>Join a Room</h3></button>
          </Link>
          {/* <a href="login/">Join a Game</a> */}
        </div>
      </div>
    );
  }
}

export default home;

{
  /* <a type="button" className="btn btn-info" href="create_room/" role="button">Create a Game</a> */
}
