import React, { Component } from 'react'
import Fade from "react-reveal/Fade";

import {Link} from 'react-router-dom'

import { withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
// import Button from '@material-ui/core/Button';
// import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
// import Hidden from '@material-ui/core/Hidden';


const useStyles = theme => ({
    blog_card: {
        margin: "auto auto",
        width: "40rem",
        [theme.breakpoints.down('md')]: {
            width: "18rem",   
        },
        "& a": {
            textDecoration: "none",
            color: "#f57b25",
        },
    },
    lgUpBtn: {
        marginTop: "10px",
        marginBottom: "20px",
        marginLeft: "100px",
    },
    mdUpBtn: {
        margin: "5px 0",
        marginLeft: "20px"
    }
});

class Blogs extends Component {
    render() {
        
        const { classes } = this.props;

        return (
            <div>
                <div style={{textAlign: "center"}}>
                    <h3 style={{display: "inline"}}>Recent Posts..</h3>
                    {/* <Hidden mdDown>
                        <Button className={classes.lgUpBtn} variant="contained" color="primary" >Create Post <AddCircleOutlineIcon></AddCircleOutlineIcon> </Button>
                    </Hidden> */}
                </div>
                
                <br/>
                <Fade left>
                    <div className={clsx(classes.blog_card, 'card')} >
                        <div>

                        </div>
                        <div className="card-body">
                            <Link to="/blogs/1">   
                            <h5 className="card-title">
                                The relationship between physical and mental health
                            </h5>
                            </Link>
                            <hr/>
                            <p>
                            Your physical health is linked with your mental health too. Regular exercise helps you keep your physical health shape...
                            </p>
                        </div>
                    </div>
                    <br/>
                </Fade>

                <Fade left>
                    <div className={clsx(classes.blog_card, 'card')} >
                        <div>

                        </div>
                        <div className="card-body">
                            <Link to="/blogs/2">  
                            <h5 className="card-title">
                                How to choose diet plans for your goals ?
                            </h5>
                            </Link>
                            <hr/>
                            <p>
                            With so many potential diet plans to try, finding the right one for you might seem impossible. Rather than starting your search by evaluating diet plans themselves...
                            </p>
                        </div>
                    </div>
                    <br/>
                </Fade>

                <Fade left>
                    <div className={clsx(classes.blog_card, 'card')} >
                        <div>

                        </div>
                        <div className="card-body">
                            <Link to="/blogs/3">
                            <h5 className="card-title">
                            Story of a woman who became fit by 50.
                            </h5>
                            </Link>
                            <hr/>
                            <p>
                            At 170 pounds, the scale became stuck. She signed up with a personal trainer and started weigh training. &quot;I was terrified,&quot; she admits. But once she started, she found that her mission changed...
                            </p>
                        </div>
                    </div>
                    <br/>
                </Fade>     

                {/* <Hidden mdUp>
                    <Button className={classes.mdUpBtn} variant="contained" color="primary" >Create Post <AddCircleOutlineIcon></AddCircleOutlineIcon> </Button>
                </Hidden> */}
            </div>
        )
    }
}

export default withStyles(useStyles)(Blogs)
