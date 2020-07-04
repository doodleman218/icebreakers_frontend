import React, { Component } from 'react'

export class gameText extends Component {
  
  userReshuffle = "reshuffling users"
  // userReshuffle = () => {
  //   {Reshuffling Users}
  // }
  
  gameText = () => {
    let player = this.props.currentPlayer
    let question = this.props.currentQuestion.content
    
    if (this.props.reshufflingQuestions && this.props.reshufflingUsers){
      return <div><a>reshuffling users and questions</a> <a>{player}, {question}</a></div>
    } else if (this.props.reshufflingUsers === true) {
        setTimeout(this.userReshuffle, 1000)
        // return
        // <a>{player}, {question}</a>
        // return setTimeout(() => <a>reshuffling users</a>, 3000);
      //         () => clearTimeout(setTimeout);
    } else if (this.props.reshufflingQuestions === true) {
      return <div><a>reshuffling questions</a> <a>{player}, {question}</a></div>
    } else {
    return <a>{player}, {question}</a>
    }
  }
  
  render() {
    return (
      <div>
        {this.gameText()}
      </div>
    )
  }
}

export default gameText


// this.props.reshufflingUsers
// this.props.reshufflingQuestions
// this.props.currentPlayer
//     this.props.currentQuestion.content