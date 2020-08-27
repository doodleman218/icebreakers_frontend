import React, { Component } from "react";
import icebreakersv8 from "../logo/icebreakersv8.png";
import { Container, Row, Col } from "react-bootstrap";

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
      body: JSON.stringify({ room: this.state }),
    };
    fetch("http://localhost:3000/", reqObj)
      .then((resp) => resp.json())
      .then((resp) => {
        if (resp.user) {
          localStorage.setItem("token", resp.jwt);
          this.props.setLogin(
            resp.user,
            resp.room.room_name,
            resp.room.host_id,
            resp.room.host_name
          );
          this.props.history.push(`/room/${resp.room.id}`);
        } else {
          alert(resp.error);
        }
      });
    this.setState({ room_name: "", password: "", username: "" });
  };

  render() {
    return (
      <Container>
      {/* <div className="createRoomDiv"> */}
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
          <label className="formLabel">Enter Room Name</label>
          <br></br>
          <input
            className="formInput"
            name="room_name"
            value={this.state.room_name}
            onChange={this.handleChange}
          />
          <br></br>
          <label className="formLabel">Enter Password</label>
          <br></br>
          <input
            className="formInput"
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
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
          />
          <br></br>
          <button className="formBtn" type="submit">
            Join a Room
          </button>
        </form>
        </Col>
        <Col className="col"></Col>
        </Row>
      {/* </div> */}
      </Container>
    );
  }
}

export default login;
