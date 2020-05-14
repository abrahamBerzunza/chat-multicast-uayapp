import React from 'react';

function NewRoom(props) {

  function handleSubmit(e) {
    e.preventDefault();
    props.onCreateRoom(e.target.text.value);
    e.target.text.value = '';
    document.getElementById('new-room').classList.add('disabled');
  }

  function handleKeyPress(e){
	  if (e.key === 'Enter' && e.target.value === ''){
		  e.preventDefault();
	  }
  }

  return(
    <form id='modal-group' className='modal' onSubmit={handleSubmit}>
      <div className='modal-content'>
        <h4>Nueva Sala</h4>
        <div className='input-field'>
          <input id='input-room' name='text' type='text' 
          onChange={props.onChangeButton}
          onKeyPress={handleKeyPress}/>
          <label htmlFor='input-room'>Nombre de la sala</label>
        </div>
      </div>
      <div className='modal-footer'>
        <button type='button' className='modal-close waves-effect btn-flat'>Cancelar</button>
        <button 
          id='new-room' 
          className='modal-close waves-effect btn-flat disabled'
          type='submit'>
          Aceptar
        </button>
      </div>
    </form>
  );
}

export default NewRoom;