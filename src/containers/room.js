import React from 'react';
import { ActionCableConsumer } from 'react-actioncable-provider';
import Cable from '../components/Cable';
import Button from 'react-bootstrap/Button';

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
    console.log("clicked-1")
    const reqObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ room: this.props.match.params.id  }),
    }; 
    fetch(`http://localhost:3000/users/test`, reqObj)
    .then(resp => resp.json())
    .then(users => console.log("clicked-2", users))
  }
  
  render() {
    console.log("allo", this.state.number)
    return (
      <div>
        this is a room
        <button onClick={this.handleEndGame}>End Game</button>
        <button onClick={this.handleLogOut}>Log Out</button>

        <ActionCableConsumer
          channel={{ channel: 'UsersChannel', room: this.props.match.params.id }}
          //userschannel or roomschannel??
          onReceived={this.handleReceived}
        >
         
        <button onClick={this.handleClick}>
          BUTTON
        </button>
        <Button className="btn btn-default" >Primary</Button>
        <Button className="btn btn-default btn-lg" > lg</Button>
        <Button className="btn btn-warning" >warning</Button>
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