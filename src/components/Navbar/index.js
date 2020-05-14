import React from 'react';

import logo from './Logo.png';
import './styles.css'

function Navbar(props) {

  function UserData () {
    return (
      <ul className='navbar right hide-on-med-and-down'>
        <li>
          <img width='50' className='avatar circle responsive-img' src={props.user.photoURL} alt={props.user.displayName}/>
        </li>
        <li className='name'>{props.user.displayName}</li>
        <li>
          <button 
            className='btn-logout waves-effect waves-light btn blue darken-1' 
            onClick={props.onLogout}>
            Logout
          </button>
        </li>
      </ul>
    )
  }

  function Login () {
    return (
      <ul className='right hide-on-med-and-down'>
        <li>
          <button 
            className='btn-login waves-effect waves-light btn blue darken-1' 
            onClick={props.onAuth}>
            Login
          </button>
        </li>
      </ul>
    )
  }

  return (
    <nav className='blue darken-2'>
      <div className='nav-wrapper'>
        <div className='brand-logo'>
          <img src={logo} className='hide-on-small-and-down' width='250'/>
          <i className='hide-on-large-only hide-on-med-only large material-icons chat-logo'>
            chat_bubble_outline
          </i>
        </div>
        {props.user ? UserData() : Login()}
        <a href='#' data-activates='side-mobile' className='button-collapse'>
          <i className='material-icons'>menu</i>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;