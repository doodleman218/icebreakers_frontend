import React, { Component } from 'react'
import Cable from '../components/Cable';

export class createRoom extends Component {
  
  state = {
    room_name: '',
    password: '',
    username: '',
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault()
    const reqObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({room: this.state})
    }
    fetch("http://localhost:3000/rooms", reqObj)
    .then(resp => resp.json())
    .then(room => {
      console.log(room)
      localStorage.setItem("token", room.jwt)
      this.props.history.push(`/room/${room.room.id}`)
    })
    this.setState({room_name: '', password: '', username: ''})
  }
  
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        roomname:
        <input name='room_name' value={this.state.room_name} onChange={this.handleChange} />
        password:
        <input name='password' type='password' value={this.state.password} onChange={this.handleChange} />
        username:
        <input name='username' type='text' value={this.state.username} onChange={this.handleChange} />
        <button type='submit'>Create your Room</button>
        </form>
      </div>
    )
  }
}

export default createRoom
