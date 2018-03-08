import React from 'react';
import firebase from 'firebase';

function UsersOnline(props) {
  
  return (
    <div className='fixed-action-btn hide-on-small-and-down hide-on-med-and-down'>
      <a className='btn-floating btn-large amber'>
        <i className='material-icons'>person</i>
      </a>
      <ul>
        <li key={props.user.uid}>
          <img className='btn-floating' 
            src={props.user.photoURL} 
            alt={props.user.displayName}/>
        </li>

      </ul>
    </div>
  )
}

export default UsersOnline;