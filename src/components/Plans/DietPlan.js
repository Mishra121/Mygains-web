import React, {useState, useRef} from 'react'
import {Link} from 'react-router-dom'
import "../styles/DietPlan.css"

import Fade from 'react-reveal/Fade'
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
    },
    margin_down_ref: {
        marginBottom: "30px",
        [theme.breakpoints.down('md')]: {
            textAlign: "center",   
            marginLeft: "20px;",
            marginTop: "20px" ,
        },
        [theme.breakpoints.up('md')]: {
            marginTop: "30px"  
        }
    }
}));

export default function DietPlan() {

    const classes = useStyles();
    const myDivToFocus = useRef(null);

    const [showWeightLoss, setshowWeightLoss] = useState(false);
    const [showMassGain, setshowMassGain] = useState(false);

    let weightLossOptions = [
        {
            s_no: 1,
            image_url: '/images/weight-loss/vegetarian-weight-loss.png',
            diet_text : 'Vegetarian Diet Plan',
            download_url: '/pdf/weight-loss/vegetarian-weight-loss.pdf'
        },
        {
            s_no: 2,
            image_url: '/images/weight-loss/non-vegetarian-weight-loss.png',
            diet_text : 'Non-Vegetarian Diet Plan',
            download_url: '/pdf/weight-loss/non-vegetarian-weight-loss.pdf'
        },
        {
            s_no: 3,
            image_url: '/images/weight-loss/vegan-weight-loss.png',
            diet_text : 'Vegan Diet Plan',
            download_url: '/pdf/weight-loss/vegan-weight-loss.pdf'
        }
    ]

    let massGainOptions = [
        {
            s_no: 1,
            image_url: '/images/weight-gain/vegetarian-weight-gain.png',
            diet_text : 'Vegetarian Diet Plan',
            download_url: '/pdf/weight-gain/vegetarian-weight-gain.pdf'
        },
        {
            s_no: 2,
            image_url: '/images/weight-gain/non-vegetarian-weight-gain.png',
            diet_text : 'Non-Vgetarian Diet Plan',
            download_url: '/pdf/weight-gain/non-vegetarian-weight-gain.pdf'
        },
        {
            s_no: 3,
            image_url: '/images/weight-gain/vegan-weight-gain.png',
            diet_text : 'Vegan Diet Plan',
            download_url: '/pdf/weight-gain/vegan-weight-gain.pdf'
        }
    ]

    function weightLossComp () {
        return (
            weightLossOptions.map((diet)=> (
                <Fade key={diet.s_no} left>
                <div className={clsx(classes.workout_card, 'card')} style={{width: "18rem"}}>
                    <img  style={{maxHeight: "250px"}} className="card-img-top" src={diet.image_url} alt={diet.diet_text} />
                    <div className="card-body">
                        <h5 className="card-title">{diet.diet_text}</h5>
                        <Link style={{textDecoration: 'none'}} to={diet.download_url} target="_blank" download>
                            <Button variant="outlined" color="primary">
                                Download 
                            </Button>
                        </Link>
                    </div>
                </div>
                </Fade>                        
            ))
        )
    } 

    function massGainComp () {
        return (
            massGainOptions.map((diet)=> (
                <Fade key={diet.s_no} left>
                <div className={clsx(classes.workout_card, 'card')} style={{width: "18rem"}}>
                    <img style={{maxHeight: "250px"}} className="card-img-top" src={diet.image_url} alt={diet.diet_text}/>
                    <div className="card-body">
                        <h5 className="card-title">{diet.diet_text}</h5>
                        <Link style={{textDecoration: 'none'}} to={diet.download_url} target="_blank" download>
                            <Button variant="outlined" color="primary">
                                Download
                            </Button>
                        </Link> 
                    </div>
                </div>
                </Fade>                        
            ))
        )
    }

    function handleClick() {
        if(myDivToFocus.current){
            myDivToFocus.current.scrollIntoView({
                behavior: "smooth",
            })
        }
    }



    return (
        <div className="diet-plan-div">
            <h3 className={classes.margin_down}>Diet Plans</h3>

            <div className="row">
                <div  className={clsx(classes.workout_card, 'card')} style={{width: "18rem"}}>
                    <div className="card-body">
                        <h5 className="card-title">Pre Planned Plans</h5>
                        <p className="card-text">Select from the already available plans without any further customization.</p>
                        <Button variant="outlined" color="primary" onClick={() => {setshowWeightLoss(true); setshowMassGain(false); handleClick();}} >Weight Loss</Button>
                        <Button style={{marginLeft: "10px"}} variant="outlined" color="primary" onClick={() => {setshowWeightLoss(false); setshowMassGain(true); handleClick(); }} >Mass Gain</Button>
                    </div>
                </div>

                <div  className={clsx(classes.workout_card, 'card')} style={{width: "18rem"}}>
                    <img className="card-img-top" src="..." alt="" />
                    <div className="card-body">
                        <h5 className="card-title">Custom Meal Planner</h5>
                        <p className="card-text">Give some information and generate plan according to your needs.</p>
                        <Link style={{textDecoration: 'none'}} to="/user-defined-plan"><Button variant="outlined" color="primary" >Get Custom Plan</Button></Link>
                    </div>
                </div>
            </div>

            <div className="row" ref={myDivToFocus}> 
                {
                    !!showWeightLoss && 
                        <>
                        <h4 className={classes.margin_down_ref}>Weight Loss Diet Plans</h4>
                        <div className="row">
                            {weightLossComp()}    
                        </div>
                        </>
                }
                <br/>
                {
                    !!showMassGain &&
                    <>
                    <h4 className={classes.margin_down_ref}>Mass Gain Diet Plans</h4>
                    <div className="row">
                        {massGainComp()}
                    </div>
                    </>
                }
            </div>

            <br />
            <hr/>
        </div>
    )
}
