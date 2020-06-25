import React, { Component } from 'react'

export class createUser extends Component {
  
  state = {
    username: '',
  }

  handleChange = (event) => {
    this.setState({ username: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault()
    console.log("new name")
  }
  
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        username:
        <input name='room_name' value={this.state.username} onChange={this.handleChange} />
        <button type='submit'>Create your Username</button>
        </form>
      </div>
    )
  }
}

export default createUser
