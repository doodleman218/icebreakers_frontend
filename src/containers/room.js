import React from 'react';
import { ActionCable } from 'react-actioncable-provider';
import Cable from '../components/Cable';

export class room extends React.Component {

  state = {
    rooms: []
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
    console.log("hello")
  }


  handleLogOut = () => {
    localStorage.removeItem('token')

    // history.push('/create_room')
  }
  
  render() {
    console.log(this.props)
    return (
      <div>
        this is a room
        <button onClick={this.handleEndGame}>End Game</button>
        <button onClick={this.handleLogOut}>Log Out</button>

        <ActionCable
          channel={{ channel: 'RoomsChannel' }}
          onReceived={this.handleReceived}
        />
        
          <Cable
          rooms={this.state.rooms}
            // handleReceivedMessage={this.handleReceivedMessage}
          />
        

      </div>
    )
  }
}

export default room
