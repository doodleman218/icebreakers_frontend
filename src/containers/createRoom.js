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

  renderForm = () => {
    return (
      <form className="create-room-form" onSubmit={this.handleSubmit}>
        <label className="form-label">Create Room Name</label>
        <br></br>
        <input
          className="form-input"
          id="rname"
          name="room_name"
          value={this.state.room_name}
          onChange={this.handleChange}
        />{" "}
        <br></br>
        <label className="form-label">Create Password</label>
        <br></br>
        <input
          className="form-input"
          id="pword"
          name="password"
          type="password"
          value={this.state.password}
          onChange={this.handleChange}
        />
        <br></br>
        <label className="form-label">Create Player Name</label>
        <br></br>
        <input
          className="form-input"
          id="uname"
          name="username"
          type="text"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <br></br>
        <button className="form-btn" type="submit">
          Create your Room
        </button>
        <br></br>
      </form>
    );
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
          <Col className="col"/>
          <Col className="max-width-400 col-10 align-self-center">
            {this.renderForm()}
          </Col>
          <Col className="col"/>
        </Row>
      </Container>
    );
  }
}

export default createRoom;
