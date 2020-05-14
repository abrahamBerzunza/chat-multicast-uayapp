import React from 'react';

import './styles.css';

function ChatInput(props) {
  
  function handleSubmit(e) {
    e.preventDefault();
    props.onSendMessage(e.target.text.value);
    e.target.text.value = '';
    document.getElementById('submit-message').classList.add('disabled');
  }
  
  function handleKeyPress(e){
	  if (e.key === 'Enter' && e.target.value === ''){
		  e.preventDefault();
	  }
  }

  return (
    <form className='page-footer transparent' onSubmit={handleSubmit}>
      <div className='container row'>
        <div className='input-container input-field col s6 m9 l7 push-l3'>
          <input id='typing-message' name='text' type='text' 
            onChange={props.onChangeButton} 
            onKeyPress={handleKeyPress}/>
          <label htmlFor="typing-message">Mensaje ...</label>
        </div>
        <div className='col s2 l3 push-l3 '>
          <button 
            id='submit-message' 
            className='btn disabled waves-effect waves-light amber' 
            type='submit'>
            Enviar
            <i className='material-icons right'>send</i>
          </button>
        </div>
      </div>
    </form>
  );
}

export default ChatInput;