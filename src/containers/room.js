import React from 'react';
import { ActionCableConsumer } from 'react-actioncable-provider';
import Cable from '../components/Cable';

export class room extends React.Component {

  state = {
    users: [],
    questions: []
  }

  componentDidMount(){
    console.log("did mount")
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


  handleReceived = resp => {
    console.log(resp, "hello")
  }


  handleLogOut = () => {
    localStorage.removeItem('token')

    // history.push('/create_room')
  }
  
  render() {
    return (
      <div>
        this is a room
        <button onClick={this.handleEndGame}>End Game</button>
        <button onClick={this.handleLogOut}>Log Out</button>

        <ActionCableConsumer
          channel={{ channel: 'RoomsChannel' }}
          onReceived={this.handleReceived}
        />
        
          <Cable
          room={this.props}
            // handleReceivedMessage={this.handleReceivedMessage}
          />
        

      </div>
    )
  }
}

export default room
