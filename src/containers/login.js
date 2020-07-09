import React, { Component } from "react";
// import Cable from '../components/Cable';
import icebreakersv8 from "../logo/icebreakersv8.png";

export class login extends Component {
  state = {
    room_name: "",
    password: "",
    username: "",
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const reqObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(this.state),
    };
    fetch("http://localhost:3000/", reqObj)
      .then((resp) => resp.json())
      .then((room) => {
        console.log("1", room);
       if (room.user) { localStorage.setItem("token", room.jwt);
        this.props.updateUser(room.user);
        this.props.updateHost(room.room.host_id);
        this.props.hostName(room.room.host_name);
        this.props.roomName(room.room.room_name);
        this.props.history.push(`/room/${room.room.id}`);
      } else {
        alert(room.error)
      }
      });
    this.setState({ room_name: "", password: "", username: "" });
  };

  render() {
    return (
      <div className="createRoomDiv">
        <img className="formLogo" src={icebreakersv8} alt="icebreakers logo" />
        <form className="createRoomForm" onSubmit={this.handleSubmit}>
          <label className="formLabel">Enter Room Name</label>
          <input
            className="formInput"
            name="room_name"
            value={this.state.room_name}
            onChange={this.handleChange}
          />
         <label className="formLabel">Enter Password</label>
          <input
            className="formInput"
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <label className="formLabel">Create Player Name</label>
          <input
            className="formInput"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
          />
          <br></br>
          <button className="formBtn" type="submit">
            Join a Room
          </button>
        </form>
      </div>
    );
  }
}

export default login;


// fetch("http://localhost:3000/", reqObj)
// .then((resp) => resp.json())
// .then((room) => {
//   console.log("1", room);
//   localStorage.setItem("token", room.jwt);
//   this.props.updateUser(room.user);
//   this.props.updateHost(room.room.host_id);
//   this.props.hostName(room.room.host_name);
//   this.props.roomName(room.room.room_name);
//   this.props.history.push(`/room/${room.room.id}`);
// });
// this.setState({ room_name: "", password: "", username: "" });
// };