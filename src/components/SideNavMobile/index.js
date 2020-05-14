import React from 'react';

import './styles.css';
import background from './background.jpg';

function SideNavMobile(props) {

  function handleElement(e) {
    e.preventDefault();
    props.onSetRoom(e.target);
  }

  function UserData() {
    return(
      <div>
        <button 
          className='right btn-flat waves-effect btn-logout-m' 
          onClick={props.onLogout}> 
            Logout
        </button>
        <img className='circle' src={props.user.photoURL} alt={props.user.displayName}/>
        <span className='white-text name'>{props.user.displayName}</span>
      </div>
    );
  }

  function Login() {
    return(
      <div>
        <button 
          className='btn-flat waves-effect btn-login' 
          onClick={props.onAuth}> 
            Login
        </button>
      </div>
    );
  }

  return (
    <ul id='side-mobile' className='side-nav'>
      <li>
        <div className='user-view'>
          <div className='background'>
            <img src={background} width='300'/>
          </div>
          {props.user ? UserData() : Login()}
        </div>
      </li>
      <li>
        <a className='subheader'>Chats de soporte</a>
        {props.user ? 
          <button 
            href='#modal-group' 
            className='btn-room btn waves-effect blue darken-1 modal-trigger'>
            Nuevo
          </button> : <button disabled className='btn-room btn'>Nuevo</button>}
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
  );
}

export default SideNavMobile;