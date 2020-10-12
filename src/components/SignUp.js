import React, { useCallback } from "react";
import { withRouter } from "react-router";
import app from "../context/base";

import "./styles/Signup.css"

const SignUp = ({ history }) => {
  const handleSignUp = useCallback(async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await app
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
      history.push("/");
    } catch (error) {
      alert(error);
    }
  }, [history]);

  return (
    <div>
      <div className="signup-form">
      <div className="main-div">
        <div className="panel">
          <h2>Sign Up and Start Exploring!  </h2>
          <p>Please enter your email and password</p>
        </div>
        <form onSubmit={handleSignUp} id="Signup">
          <div className="form-group">
            <input name="email" type="email" className="form-control" id="inputEmail" placeholder="Email Address" />
          </div>
          <div className="form-group">
            <input name="password" type="password" className="form-control" id="inputPassword" placeholder="Password" />
          </div>
          <button type="submit" class="btn btn-primary">Sign Up</button>
        </form>
      </div>
      </div>
    </div>
  );
};

export default withRouter(SignUp);
