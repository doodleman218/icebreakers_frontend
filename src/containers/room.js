import React from 'react';
import { ActionCable } from 'react-actioncable-provider';
import Cable from '../components/Cable';

export class room extends React.Component {

  state = {
    rooms: []
  }

  componentDidMount(){
    console.log("did mount")
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

        <ActionCable
          channel={{ channel: 'RoomsChannel' }}
          onReceived={this.handleReceived}
        />
        
          <Cable
          room_id={this.props.match.params.id}
            // handleReceivedMessage={this.handleReceivedMessage}
          />
        

      </div>
    )
  }
}

export default room
