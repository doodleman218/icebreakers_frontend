import React, { Component } from "react";
import { Link } from "react-router-dom";
import icebreakersv8 from "../logo/icebreakersv8.png"
import { Container, Row, Col } from 'react-bootstrap'

export class home extends Component {
  render() {
    return (
      <Container >
        <Row className="boot-home-logo">
        <img className="img-fluid" src={icebreakersv8} alt="icebreakers logo"/>
        </Row>
        <Row >
        <Col></Col>
        <Col>
          <Link to="/create_room">
            <button ><h3>Create a Room</h3></button>
          </Link>
        </Col>
        <Col></Col>
        </Row>
        <Row>
        <Col></Col>
        <Col>
          <Link to="/login">
            <button ><h3 >Join a Room</h3></button>
          </Link>
          </Col>
        <Col></Col>
        </Row>
      </Container>
    );
  }
}

export default home;


{/* <Container>
<Row>
<img className="homeLogo"src={icebreakersv8} alt="icebreakers logo"/>
</Row>
<Row className="homeBtnContainer" >
  <Link to="/create_room">
    <button className="homeCreateBtn"><h3 className="homeCreateBtnText">Create a Room</h3></button>
  </Link>
</Row>
<Row>
  <Link to="/login">
    <button className="homeJoinBtn"><h3 className="homeJoinBtnText">Join a Room</h3></button>
  </Link>
</Row>
</Container> */}