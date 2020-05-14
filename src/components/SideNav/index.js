import React from 'react';

import './styles.css';

function SideNav(props) {

  function handleElement(e) {
    e.preventDefault();
    props.onSetRoom(e.target);
  }

  return (
    <div>
      <ul className='side-nav-l side-nav hide-on-med-and-down'>
        <li className='container-subheader'>
          <a className='subheader'>Chats de soporte</a>
            <button 
              href='#modal-group' 
              className='btn waves-effect blue darken-1 modal-trigger'>
                Nuevo
            </button> 
        </li>
        <li><div className='divider'></div></li>
        {
          props.rooms.map(room => (
            <li key={room.roomId}>
              <a 
                id={room.roomId}
                onClick={handleElement}
                className='waves-effect'>
                {room.name}
              </a>
            </li>
          ))
        }
      </ul>
    </div>
  );
  
}

export default SideNav;