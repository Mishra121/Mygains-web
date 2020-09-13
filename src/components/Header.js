import React, { useContext } from 'react';
import app from "../context/base";
import { AuthContext } from "../context/AuthState";
import {Link} from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
// import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    navDiv: {
      marginBottom: 60
    } 
  }));

const Header = () => {

    const { currentUser } = useContext(AuthContext);

    const classes = useStyles();
  
    return (
    <div className={classes.navDiv}>
    <nav className="d-flex justify-content-between navtop navbar navbar-expand-lg navbar fixed-top">
      <Link className="navbar-brand" to="/">MyGains</Link>
      <ul className="navbar-nav">
        <li className="nav-item active">
          <Link className="nav-link" to="/plans">Plans<span className="sr-only">(current)</span></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/shop">Shop</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/blogs">Stories</Link>
        </li>
        {
          !!currentUser ? (
            <li>
              <Button color="inherit" onClick={() => app.auth().signOut()}>Logout</Button>
            </li>
          ):
          (
            <>
            <li className="nav-item">
              <Link to="/login">
                <Button color="inherit">LogIn</Button>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/signup">
              <Button color="inherit">SignUp</Button>
              </Link>
            </li>
            </>
          )
        }
      </ul>
    </nav>
    </div>
  );
}

export default Header;


