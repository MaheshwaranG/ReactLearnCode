import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {firebase, googleAuthProvider} from './firebase/firebase'


class App extends Component {
  state = {
    uid : ''
  }

  login = () => {
    firebase.auth().signInWithPopup(googleAuthProvider).then((result) => {
      this.setState({
        uid: result.user.uid,
        error : "Login Success"
      })
    }).catch(() => {
      this.setState({
        uid: '',
        error: "Error At login"
      })
    })
  }

  logout = () => {

    firebase.auth().signOut().then(() => {
      this.setState({
        uid : '',
        error : "Logout Success"
      })
    })

  }

  componentWillMount(){
    firebase.auth().onAuthStateChanged((user)=>{
      if(user){
          console.log("UserLoggedin");
          // console.log(user);
          this.setState({
            uid: user.uid
          })
      }
      else{
          console.log("UserLoggedOut");
      }
    })
  }
  render() {
    return (
      <div className="App">
        
        {
          this.state.uid ? 
          <div> User Logged In <button onClick={this.logout}>Google Logout</button> </div> :
          <div> User Not Logged in <button onClick={this.login}>Google Login</button> </div>
        }
        {
          this.state.error && <div>  {this.state.error} </div>
        }
      </div>
    );
  }
}



export default App;
