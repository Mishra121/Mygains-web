import React from 'react'
import Fade from "react-reveal/Fade";

import {Link} from 'react-router-dom'
import clsx from 'clsx';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
    workout_card: {
        marginRight: "60px",
        [theme.breakpoints.down('md')]: {
            margin: "auto auto",
            marginBottom: "20px",    
        },
        textAlign: "center"
    },
    margin_down: {
        marginBottom: "30px",
        [theme.breakpoints.down('md')]: {
            textAlign: "center",   
        }
    }
}));

export default function WorkPlan() {

    const classes = useStyles();

    let workOutDetails = [
        {
            s_no: 1,
            w_image_url: 'https://firebasestorage.googleapis.com/v0/b/mygains-india.appspot.com/o/mygainsimg%2Fupperbody.png?alt=media&token=597a76f4-b035-4bae-8f00-66754323fc96',
            w_text : 'Upper Body Workout',
            w_to: '/pdf/workout/upperbody.pdf'
        },
        {
            s_no: 2,
            w_image_url: 'https://firebasestorage.googleapis.com/v0/b/mygains-india.appspot.com/o/mygainsimg%2Flowerbody.png?alt=media&token=2ab2511b-840b-405f-b1b5-060112f66940',
            w_text : 'Lower Body Workout',
            w_to: '/pdf/workout/lowerbody.pdf'
        },
        {
            s_no: 3,
            w_image_url: 'https://firebasestorage.googleapis.com/v0/b/mygains-india.appspot.com/o/mygainsimg%2Ffullbody.png?alt=media&token=a93a3cf7-addd-4dc3-8b78-a83ee48f459d',
            w_text : 'Full Body Workout',
            w_to: '/pdf/workout/fullbody.pdf'
        }
    ] 

    return (
        <div>
            <h3 className={classes.margin_down}>Workout Plans</h3>

            <div className="row">
                {
                    workOutDetails.map((workout) => (
                        <Fade key={workout.s_no} left>
                        <div  className={clsx(classes.workout_card, 'card')} style={{width: "18rem"}}>
                            <img style={{maxHeight: "250px"}} className="card-img-top" src={workout.w_image_url} alt={workout.w_text} />
                            <div className="card-body">
                                <h5 className="card-title">{workout.w_text}</h5>
                                <Link style={{textDecoration: 'none'}}  to={workout.w_to} target="_blank" download>
                                    <Button variant="outlined" color="primary">
                                        Download  
                                    </Button>
                                </Link>
                            </div>
                        </div>
                        </Fade>
                    ))
                }
            </div>
        </div>
    )
}
