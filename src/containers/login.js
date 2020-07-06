import React, { Component } from 'react'
// import Cable from '../components/Cable';

export class login extends Component {
  
  state = {
    room_name: '',
    password: '',
    username: ''
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
      body: JSON.stringify(this.state)
    }
    fetch("http://localhost:3000/", reqObj)
    .then(resp => resp.json())
    .then(room => {
      localStorage.setItem("token", room.jwt)
      this.props.updateUser(room.user)
      this.props.updateHost(room.room.host_id)
      this.props.history.push(`/room/${room.room.id}`)
    })
    this.setState({room_name: '', password: '', username: ''})
  }

  render() {
    return (
      <div>
        Login 
        <form onSubmit={this.handleSubmit}>
        roomname:
        <input name='room_name' value={this.state.room_name} onChange={this.handleChange} />
        password:
        <input name='password' type='password' value={this.state.password} onChange={this.handleChange} />
        create username:
        <input name='username' value={this.state.username} onChange={this.handleChange} />
        <button type='submit'>Join a Room</button>
        </form>
      </div>
    )
  }
}

export default login
