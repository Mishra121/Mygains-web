import React from 'react'

import Fade from 'react-reveal/Fade'
import Button from '@material-ui/core/Button';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';

import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';


const useStyles = makeStyles((theme) => ({
    meal_card: {
        margin: "auto auto",
        width: "40rem",
        [theme.breakpoints.down('md')]: {
            width: "18rem",   
        }
    }
}));

export default function CustomPlanView(props) {

    const classes = useStyles(); 
   const plan = props.plan;

    return (
        <div>
            <h3>Meal Plan according to your details...</h3>
            <hr/>
            {
                (props.timeVar === 'day') ? (
                    <>
                        {
                            plan.meals.map((meal) => (
                                <Fade key={meal.id} left>
                                <div className={clsx(classes.meal_card, 'card')} >
                                    <div className="card-body">
                                        <h5 className="card-title">{meal.title}</h5>
                                        <p>
                                            <strong>Servings</strong>: {meal.servings}
                                            <br/>
                                            Go to Source for more details  <a target="_blank" rel="noopener noreferrer" href={meal.sourceUrl}><Button variant="outlined" color="primary" ><OpenInNewIcon></OpenInNewIcon></Button></a>
                                        </p>
                                    </div>
                                </div>
                                <br/>
                                </Fade> 
                            ))
                        }

                        {
                            <Fade left>
                                <div className={clsx(classes.meal_card, 'card')} >
                                <div className="card-body">
                                    <h5>Nutrients</h5>
                                    <hr/>
                                    <p><strong>carbohydrates: </strong>{plan.nutrients.carbohydrates}</p>
                                    <p><strong>fat: </strong>{plan.nutrients.fat}</p>
                                    <p><strong>protein: </strong>{plan.nutrients.protein}</p>
                                </div>
                                </div>
                            </Fade>
                        }
                    </>
                ) : (
                    <>
                        <div>
                            <h4>Day 1.</h4>
                            {
                                plan.week.monday.meals.map((meal) => (
                                    <Fade key={meal.id} left>
                                    <div className={clsx(classes.meal_card, 'card')} >
                                        <div className="card-body">
                                            <h5 className="card-title">{meal.title}</h5>
                                            <p>
                                                <strong>Servings</strong>: {meal.servings}
                                                <br/>
                                                Go to Source for more details  <a target="_blank" rel="noopener noreferrer" href={meal.sourceUrl}><Button variant="outlined" color="primary" ><OpenInNewIcon></OpenInNewIcon></Button></a>
                                            </p>
                                        </div>
                                    </div>
                                    </Fade>
                                ))
                            }
                        </div>
                        <br/>
                        <hr/>
                        <div>
                            <h4>Day 2.</h4>
                            {
                                plan.week.tuesday.meals.map((meal) => (
                                    <Fade key={meal.id} left>
                                    <div className={clsx(classes.meal_card, 'card')} >
                                        <div className="card-body">
                                            <h5 className="card-title">{meal.title}</h5>
                                            <p>
                                                <strong>Servings</strong>: {meal.servings}
                                                <br/>
                                                Go to Source for more details  <a target="_blank" rel="noopener noreferrer" href={meal.sourceUrl}><Button variant="outlined" color="primary" ><OpenInNewIcon></OpenInNewIcon></Button></a>
                                            </p>
                                        </div>
                                    </div>
                                    </Fade>
                                ))
                            }
                        </div>
                        <br/>
                        <hr/>
                        <div>
                            <h4>Day 3.</h4>
                            {
                                plan.week.wednesday.meals.map((meal) => (
                                    <Fade key={meal.id} left>
                                    <div className={clsx(classes.meal_card, 'card')} >
                                        <div className="card-body">
                                            <h5 className="card-title">{meal.title}</h5>
                                            <p>
                                                <strong>Servings</strong>: {meal.servings}
                                                <br/>
                                                Go to Source for more details  <a target="_blank" rel="noopener noreferrer" href={meal.sourceUrl}><Button variant="outlined" color="primary" ><OpenInNewIcon></OpenInNewIcon></Button></a>
                                            </p>
                                        </div>
                                    </div>
                                    </Fade>
                                ))
                            }
                        </div>
                        <br/>
                        <hr/>
                        <div>
                            <h4>Day 4.</h4>
                            {
                                plan.week.thursday.meals.map((meal) => (
                                    <Fade key={meal.id} left>
                                    <div className={clsx(classes.meal_card, 'card')} >
                                        <div className="card-body">
                                            <h5 className="card-title">{meal.title}</h5>
                                            <p>
                                                <strong>Servings</strong>: {meal.servings}
                                                <br/>
                                                Go to Source for more details  <a target="_blank" rel="noopener noreferrer" href={meal.sourceUrl}><Button variant="outlined" color="primary" ><OpenInNewIcon></OpenInNewIcon></Button></a>
                                            </p>
                                        </div>
                                    </div>
                                    </Fade>
                                ))
                            }
                        </div>
                        <br/>
                        <hr/>
                        <div>
                            <h4>Day 5.</h4>
                            {
                                plan.week.friday.meals.map((meal) => (
                                    <Fade key={meal.id} left>
                                    <div className={clsx(classes.meal_card, 'card')} >
                                        <div className="card-body">
                                            <h5 className="card-title">{meal.title}</h5>
                                            <p>
                                                <strong>Servings</strong>: {meal.servings}
                                                <br/>
                                                Go to Source for more details  <a rel="noopener noreferrer" target="_blank" href={meal.sourceUrl}><Button variant="outlined" color="primary" ><OpenInNewIcon></OpenInNewIcon></Button></a>
                                            </p>
                                        </div>
                                    </div>
                                    </Fade>
                                ))
                            }
                        </div>
                        <br/>
                        <hr/>
                        <div>
                            <h4>Day 6.</h4>
                            {
                                plan.week.saturday.meals.map((meal) => (
                                    <Fade key={meal.id} left>
                                    <div className={clsx(classes.meal_card, 'card')} >
                                        <div className="card-body">
                                            <h5 className="card-title">{meal.title}</h5>
                                            <p>
                                                <strong>Servings</strong>: {meal.servings}
                                                <br/>
                                                Go to Source for more details  <a target="_blank" rel="noopener noreferrer" href={meal.sourceUrl}><Button variant="outlined" color="primary" ><OpenInNewIcon></OpenInNewIcon></Button></a>
                                            </p>
                                        </div>
                                    </div>
                                    </Fade>
                                ))
                            }
                        </div>
                        <br/>
                        <hr/>
                        <div>
                            <h4>Day 7.</h4>
                            {
                                plan.week.sunday.meals.map((meal) => (
                                    <Fade key={meal.id} left>
                                    <div className={clsx(classes.meal_card, 'card')} >
                                        <div className="card-body">
                                            <h5 className="card-title">{meal.title}</h5>
                                            <p>
                                                <strong>Servings</strong>: {meal.servings}
                                                <br/>
                                                Go to Source for more details  <a target="_blank" rel="noopener noreferrer" href={meal.sourceUrl}><Button variant="outlined" color="primary" ><OpenInNewIcon></OpenInNewIcon></Button></a>
                                            </p>
                                        </div>
                                    </div>
                                    </Fade>
                                ))
                            }
                        </div>
                        <br/>
                        <hr/>
                    </>
                )
            }
        </div>
    )
}