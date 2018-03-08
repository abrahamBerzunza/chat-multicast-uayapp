import React, { Component } from 'react';
import firebase from 'firebase';
import Push from 'push.js'
import Navbar from './components/Navbar';
import NoAuth from './components/NoAuth';
import NewRoom from './components/NewRoom';
import SideNav from './components/SideNav';
import ChatRoom from './components/ChatRoom';
import SideNavMobile from './components/SideNavMobile';
import UsersOnline from './components/UsersOnline';

class App extends Component {

  constructor(props) {
    super(props) 

    this.state = {
      user: null, 
      rooms: [],
      currentRoom: { 
        id: '-L6bt2yrIKoHrlb6ShlI',
        name: 'INFORMACIÓN'
      }
    }

    this.handleAuth = this.handleAuth.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleCreateRoom = this.handleCreateRoom.bind(this);
    this.handleSetRoom = this.handleSetRoom.bind(this);
  }
  
  componentDidMount() {
    const SUPPORT_ID = 'RvPxALxWenPy41aBj8i6JMlCK0n1';
    const roomsDB = firebase.database().ref().child('rooms');
    
    roomsDB.on('child_added', snapshot => {
      this.setState({
        rooms: this.state.rooms.concat(snapshot.val())
      });
      
      if(this.state.user.uid === SUPPORT_ID) {
        Push.create('Se ha creado una nueva sala', {
          body: `${snapshot.val().name}`
        });
      }
    });
  }
  
  componentWillMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          user: user
        })
      } else {
        this.setState({
          user: null
        })
      }
    });  
  }

  handleAuth() {

    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithRedirect(provider).then((result) => {
      console.log(`{result.user.email} logged`);
    }).catch((error) => {

      console.error(`${error.code}: ${error.message}`);
    });
  }

  handleLogout() {

    firebase.auth().signOut()
    .then(() => {
      console.log('Logout succesful');
    }).catch((error) => {
      console.error(`${error.code}: ${error.message}`);
    });
  }

  handleChangeName(e) {
    let roomName = e.target.value;
    let btnNewRoom = document.getElementById('new-room');

    if(roomName !== '') {
      btnNewRoom.classList.remove('disabled');
    }
    else {
      btnNewRoom.classList.add('disabled');
    }
  }

  handleCreateRoom(roomName) {
    const roomsDB = firebase.database().ref().child('rooms');
    let newRoom = roomsDB.push();
    let rid = newRoom.key;
    let room = {
      roomId: rid,
      name: roomName
    }

    newRoom.set(room);
  }

  handleSetRoom(element) {
    this.setState({
      currentRoom: {
        id: element.id, 
        name: element.textContent 
      }
    })
  }

  renderUI() {

    if(this.state.user) {
      return(
        <div>
          <SideNav 
            rooms={this.state.rooms} 
            onSetRoom={this.handleSetRoom}/>
            
          <ChatRoom 
            user={this.state.user}
            currentRoom={this.state.currentRoom}/>

          <UsersOnline user={this.state.user}/>
        </div>
      ) 
    }
    else {
      return <NoAuth />
    }

  }

  render() {
    return (
      <div>
        <Navbar 
          user={this.state.user}
          onAuth={this.handleAuth}
          onLogout={this.handleLogout} />

        <SideNavMobile 
          rooms={this.state.rooms}
          user={this.state.user}
          onSetRoom={this.handleSetRoom}
          onAuth={this.handleAuth}
          onLogout={this.handleLogout}
        />

        <NewRoom 
          onChangeName={this.handleChangeName}
          onCreateRoom={this.handleCreateRoom}  
        />

        {this.renderUI()}

      </div>
    );
  }
}

export default App;
