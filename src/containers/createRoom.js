import React, { Component } from "react";
import icebreakersv8 from "../logo/icebreakersv8.png";
import { Container, Row, Col } from "react-bootstrap";

export class createRoom extends Component {
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
      body: JSON.stringify({ room: this.state }),
    };
    fetch("http://localhost:3000/rooms", reqObj)
      .then((resp) => resp.json())
      .then((resp) => {
        localStorage.setItem("token", resp.jwt);
        this.props.setCreateRoom(
          resp.user,
          resp.room.room_name,
          resp.room.host_id,
          resp.room.host_name
        );
        this.props.history.push(`/room/${resp.room.id}`);
      });
    this.setState({ room_name: "", password: "", username: "" });
  };

  render() {
    return (
      <Container>
        <Row className="boot-home-logo">
          <img
            className="img-fluid"
            src={icebreakersv8}
            alt="icebreakers logo"
          />
        </Row>
        <Row>
          <Col className="col"></Col>
          <Col className="max-width-400 col-10 align-self-center">
            <form className="createRoomForm" onSubmit={this.handleSubmit}>
            
              <label className="formLabel">Create Room Name</label>
              <br></br>
              <input
                className="formInput"
                id="rname"
                name="room_name"
                value={this.state.room_name}
                onChange={this.handleChange}
              />{" "}
              <br></br>
              <label className="formLabel">Create Password</label>
              <br></br>
              <input
                className="formInput"
                id="pword"
                name="password"
                type="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
              <br></br>
              <label className="formLabel">Create Player Name</label>
              <br></br>
              <input
                className="formInput"
                id="uname"
                name="username"
                type="text"
                value={this.state.username}
                onChange={this.handleChange}
              />
              <br></br>
              <button className="formBtn" type="submit">
                Create your Room
              </button>
              <br></br>
            </form>
          </Col>
          <Col className="col"></Col>
        </Row>
      </Container>
    );
  }
}

export default createRoom;

{
  /* <Container className="createRoomDiv">
        <Row className="boot-home-logo">
        <img className="img-fluid" src={icebreakersv8} alt="icebreakers logo" />
        </Row>
        <form className="createRoomForm" onSubmit={this.handleSubmit}>
          <label className="formLabel">Create Room Name</label>
          <input
            className="formInput"
            id="rname"
            name="room_name"
            value={this.state.room_name}
            onChange={this.handleChange}
          />
          <label className="formLabel">Create Password</label>
          <input
            className="formInput"
            id="pword"
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <label className="formLabel">Create Player Name</label>
          <input
            className="formInput"
            id="uname"
            name="username"
            type="text"
            value={this.state.username}
            onChange={this.handleChange}
          />
          <br></br>
          <button className="formBtn" type="submit">
            Create your Room
          </button>
        </form>
      </Container>
    );
  } */
}
