import React, { useContext } from 'react';
import app from "../context/base";
import { AuthContext } from "../context/AuthState";
import {Link} from 'react-router-dom';

import logoicon from './images/mygains.png';
import "./styles/Header.css"

import { makeStyles } from '@material-ui/core/styles';
// import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
// import LocalMallIcon from '@material-ui/icons/LocalMall';
import LibraryBooksOutlinedIcon from '@material-ui/icons/LibraryBooksOutlined';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import Hidden from '@material-ui/core/Hidden';
import MenuIcon from '@material-ui/icons/Menu';
import Divider from '@material-ui/core/Divider';


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
    },
    list: {
      width: 250,
    },
    fullList: {
      width: 'auto',
    },
  }));

const Header = () => {

    const { currentUser } = useContext(AuthContext);

    const classes = useStyles();

    const [state, setState] = React.useState({
      right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }
  
      setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
      <div
        className={clsx(classes.list, {
          [classes.fullList]: anchor === 'top' || anchor === 'bottom',
        })}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <List>
            <ListItem button component={Link} to="/plans">
              <ListItemIcon><DescriptionOutlinedIcon></DescriptionOutlinedIcon></ListItemIcon>
              <ListItemText primary={"Plans"}  />
            </ListItem>
            <ListItem button component={Link} to="/blogs">
              <ListItemIcon><LibraryBooksOutlinedIcon></LibraryBooksOutlinedIcon></ListItemIcon>
              <ListItemText primary={"Articles"}  />
            </ListItem>
        </List>
        <Divider></Divider>
        <List>
        {
          !!currentUser ? (
            <ListItem button onClick={() => app.auth().signOut()}>
              <ListItemIcon><ExitToAppOutlinedIcon></ExitToAppOutlinedIcon></ListItemIcon>
              <ListItemText primary={"Logout"} />
            </ListItem>
          ):
          (
            <>
            <ListItem button component={Link} to="/login">
              <ListItemIcon><PermIdentityIcon></PermIdentityIcon></ListItemIcon>
              <ListItemText primary={"LogIn"} />
            </ListItem>
            <ListItem button component={Link} to="/signup">
              <ListItemIcon><PersonAddIcon></PersonAddIcon></ListItemIcon>
              <ListItemText primary={"SignUp"} />
            </ListItem>
            </>
          )
        }
        </List>
      </div>
    );
  
  
    return (
    <div className={classes.navDiv}>
    {/* Large Screen Nav */}
    <nav className="d-flex justify-content-between navtop navbar navbar-expand-lg navbar fixed-top">
      <Link className="navbar-brand" to="/">
        <img 
          src={logoicon} alt="MyGains" 
          style={{width: "150px", height: "45px"}}
        />
      </Link>
      <Hidden mdDown>
      <ul className="navbar-nav">
        <li className="nav-item active">
          <Link className="nav-link" to="/plans">Plans<span className="sr-only">(current)</span></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/blogs">Articles</Link>
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
      </Hidden>
      <Hidden mdUp>
        <MenuIcon  onClick={toggleDrawer('right', true)}>
        </MenuIcon>
      </Hidden>
    </nav>
    {/* Small Screen Drawer */}
    <div>
      <Drawer anchor={'right'} open={state['right']} onClose={toggleDrawer('right', false)}>
        {list('right')}
      </Drawer>
    </div>
    </div>
  );
}

export default Header;


