import React from 'react';
import { ActionCableConsumer } from 'react-actioncable-provider';
import Cable from '../components/Cable';

export class room extends React.Component {

  state = {
    current_user: [],
    current_question: [],
    number: 0
  }

  componentDidMount(){
    // fetch("http://localhost:3000/users")
    // .then(resp => resp.json())
    // .then(users => {
    //   this.setState({
    //     users: users
    //   })
    // })
  }
  
 
  handleEndGame = () => {
    localStorage.removeItem('token')
      const reqObj = {
        method: "DELETE"
      }
      fetch(`http://localhost:3000/room/${this.props.match.params.id}`, reqObj)
          .then((resp) => resp.json())
    this.props.history.push('/create_room')
  }

  handleLogOut = () => {
    localStorage.removeItem('token')

    // history.push('/create_room')
  }

  handleReceived = resp => {
    console.log(resp, "recieved")
  }

  handleClick = () => {
    console.log("clicked")
    fetch(`http://localhost:3000/users`)
    .then(resp => resp.json())
    .then(users => console.log(users))
  }
  
  render() {
    console.log("allo", this.state.number)
    return (
      <div>
        this is a room
        <button onClick={this.handleEndGame}>End Game</button>
        <button onClick={this.handleLogOut}>Log Out</button>

        <ActionCableConsumer
          channel={{ channel: 'RoomsChannel', room: this.props.match.params.id }}
          onReceived={this.handleReceived}
        >
         
        <button onClick={this.handleClick}>
          BUTTON
        </button>

        </ActionCableConsumer>
      
      </div>
    )
  }
}

export default room


    //   {
    //   room_users = users.find((userObj) => {
    //     if (userObj.id)
    //   }
       
    //   )
    // })

 
    // this.setState({
    //   number: this.state.number + 1
    // })