import React, { useCallback, useContext, useEffect } from "react";
import { withRouter, Redirect } from "react-router-dom";
import app from "../context/base";
import firebase from "firebase";
import { AuthContext } from "../context/AuthState";

import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"

import "./styles/Login.css"

const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID
  ],
  callbacks: {
    // Avoid redirects after sign-in.
    signInSuccessWithAuthResult: () => false
  }
};

const Login = ({ history, pathToMove }) => {

  const { currentUser, setCurrentUser } = useContext(AuthContext);

  useEffect(() => {     
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged(
      (user) => setCurrentUser(user)
    );
    
    return () => {
      unregisterAuthObserver();
    }
  });
  

  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        if(pathToMove){
          history.push(`${pathToMove}`);
        }else{
          history.push("/plans");
        }
      } catch (error) {
        alert(error);
      }
    },
    [history, pathToMove]
  );


  if (currentUser) {
    if(pathToMove){
      const url = '' + pathToMove; 
      return <Redirect to={url} />;
    }else{
      return <Redirect to="/plans" />;
    }
  }

  return (
    <div>
      <div className="login-form">
      <div className="main-div">
        <div className="panel">
          <h2>Log In to Your Account! </h2>
          <p>Please enter your email and password</p>
        </div>
        <form onSubmit={handleLogin} id="Login">
          <div className="form-group">
            <input name="email" type="email" className="form-control" id="inputEmail" placeholder="Email Address" />
          </div>
          <div className="form-group">
            <input name="password" type="password" className="form-control" id="inputPassword" placeholder="Password" />
          </div>
          <button type="submit" class="btn btn-primary">Log in</button>
        </form>
        <h4 style={{textAlign: "center", marginTop: "10px"}} >OR</h4>
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>
      </div>
      </div>
    </div>
  );
};

export default withRouter(Login);
