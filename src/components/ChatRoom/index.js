import React, { Component } from 'react';
import firebase from 'firebase';
import ChatInput from '../ChatInput';
import ChatMessages from '../ChatMessages';

import './styles.css';

class ChatRoom extends Component {

  constructor(props) {
    super(props);

    this.state = {
      messages: []
    }

    this.handleSendMessage = this.handleSendMessage.bind(this);
    this.handleChangeMessage = this.handleChangeMessage.bind(this);
  }

  componentDidMount() {
    const messagesDB = firebase.database().ref().child('messages');

    messagesDB.on('child_added', snapshot => {

      this.setState({
        messages: this.state.messages.concat(snapshot.val())
      })
    });
  }

  handleSendMessage(text) {
    const messagesDB = firebase.database().ref().child('messages');
    let newUserMessage = messagesDB.push();
    let msg = {
      text: text,
      roomId: this.props.currentRoom.id,
      avatar: this.props.user.photoURL,
      uid: this.props.user.uid,
      displayName: this.props.user.displayName,
      date: Date.now()
    }

    newUserMessage.set(msg);
  }

  handleChangeMessage(e) {

    let message = e.target.value;
    let buttonSend = document.getElementById('submit-message');
    
    if(message !== '') {
      buttonSend.classList.remove('disabled');
    }
    else {
      buttonSend.classList.add('disabled');
    }
  }

  render() {
    return (
      <div>
        <div className='row container'>
          <div className='row'>
            <div className='col push-l3'>
              <h5>{this.props.currentRoom.name}</h5>
            </div>
          </div>
          <div className='col s12 l10 push-l3 container-messages'>
            {
              this.state.messages
              .filter(msg => { return msg.roomId === this.props.currentRoom.id })
              .map( msg => (
                <ChatMessages
                  key={msg.date}
                  message={msg}
                  user={this.props.user}
                />
              ))
            }
          </div>
        </div>
        <ChatInput 
          onSendMessage={this.handleSendMessage}
          onChangeMessage={this.handleChangeMessage} />
      </div>
    );
  }
}

export default ChatRoom;