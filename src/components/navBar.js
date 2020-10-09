import React, { Component } from "react";
import icebreakersv8 from "../logo/icebreakersv8.png";
import { Container, Row, Col } from "react-bootstrap";

export class navBar extends Component {
  logOutBtn = () => {
    if (this.props.currentUser === this.props.host) {
      return (
        <button className="LogoutBtn" onClick={this.props.endGameBtn}>
          End Game
        </button>
      );
    } else {
      return (
        <button className="LogoutBtn" onClick={this.props.logoutBtn}>
          Logout
        </button>
      );
    }
  };

  render() {
    return (
      <Row className="nav-bar">
        <Col className="col-3">{this.logOutBtn()}</Col>
        <Col className="col-6 ">
          {/* <div className="NavBarTitle"> */}
          <img
            className="nav-logo"
            src={icebreakersv8}
            alt="icebreakers logo"
          />
          {/* </div> */}
        </Col>
        <Col className="col-3 nav-bar-info">
          <Row>
            <Col><span className="nav-bar-info-room-bar">Room</span></Col>
          </Row>
          <Row>
            <Col>{this.props.room}</Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default navBar;

