import React, { useCallback, useContext, useEffect } from "react";
import { withRouter, Redirect } from "react-router";
import app from "../context/base";
import firebase from "firebase";
import { AuthContext } from "../context/AuthState";

import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"

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

const Login = ({ history }) => {

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
        history.push("/plans");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );


  if (currentUser) {
    return <Redirect to="/plans" />;
  }

  return (
    <div>
      <h1>Log in</h1>
      <form onSubmit={handleLogin}>
        <label>
          Email
          <input name="email" type="email" placeholder="Email" />
        </label>
        <label>
          Password
          <input name="password" type="password" placeholder="Password" />
        </label>
        <button type="submit">Log in</button>
      </form>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>
    </div>
  );
};

export default withRouter(Login);
