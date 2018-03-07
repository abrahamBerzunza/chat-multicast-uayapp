import React from 'react';

import './styles.css';

function ChatMessages(props) {

  function validateCurrentUser() {
    if(props.user.uid === props.message.uid) {
      return 'message-self'; 
    }
    else {
      return 'message-everyone'
    }
  }

  return (
    <div className={`${validateCurrentUser()} message-chat row`}>
      <div className="row">
        <div className="username col s12">
          {props.message.displayName}
          <div class="divider" />
        </div>
      </div>
      <div className='col s5 m3 l3'>
        <img
          width='48px'
          className='circle'
          src={props.message.avatar}
          alt={props.message.displayName}
        />
      </div>
      <div className='col s8 m9 l9'>
        {props.message.text}
      </div>
    </div>
  )
}

export default ChatMessages;