import React, { Component } from 'react'


export class createRoom extends Component {
  
  state = {
    room_name: '',
    password: '',
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
    fetch("http://localhost:3000/rooms", reqObj)
    .then(resp => resp.json())
    .then(room => {

    })
  }
  
  render() {
    console.log(this.state.room_name)
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        roomname:
        <input name='room_name' value={this.state.room_name} onChange={this.handleChange} />
        password:
        <input name='password' type='password' value={this.state.password} onChange={this.handleChange} />
        <button type='submit'>Create your Room</button>
        </form>
      </div>
    )
  }
}

export default createRoom
