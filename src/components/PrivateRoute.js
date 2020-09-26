import React, { useContext } from "react";
import { Route } from "react-router-dom";
import { AuthContext } from "../context/AuthState"; 

import Login from './LogIn'

const PrivateRoute = ({ component: RouteComponent, path, ...rest }) => {
  const {currentUser} = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={routeProps =>
        !!currentUser ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Login pathToMove={path}/>
        )
      }
    />
  );
};


export default PrivateRoute