import React, { Component } from "react";
import { Link } from "react-router-dom";
import login from "./login";
import icebreakersv8 from "../logo/icebreakersv8.png"

export class home extends Component {
  render() {
    return (
      <div>
        <div>
        <img className="homeLogo"src={icebreakersv8} alt="icebreakers logo"/>
        </div>
        <div className="homeBtnContainer" >
          <Link to="/create_room">
            <button className="homeCreateBtn"><h3 className="homeCreateBtnText">Create a Room</h3></button>
          </Link>
          </div>
          <div>
          <Link to="/login">
            <button className="homeJoinBtn"><h3 className="homeJoinBtnText">Join a Room</h3></button>
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
