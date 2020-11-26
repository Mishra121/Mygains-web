import React, { Component } from 'react'

import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

import "./styles/Home.css"

export default class Home extends Component {

    render() {

        const Banner = "https://ik.imagekit.io/hhv1zj3kjt/tr:h-400/chase-kinney-FMQBLyhD2HU-unsplash_tjH562pIc.jpg";

        return (
            <>
                <div className="banner-div" 
                    style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${Banner})`}}
                >
                    <div className="banner-text">   
                        <h2>Health is wealth keep it healthy</h2>
                        
                        <p>
                            Better Health, Brighter Future.
                        </p>
                    </div>
                </div>

                <div className="welcome-header">   
                    <h2>Welcome to MyGains</h2>
                    <p>
                        Your gateway to the community with latest fitness plans and stories. Daily motivation and much more.
                    </p>
                </div>    

                <div className="feature-plans">
                    <img src="https://ik.imagekit.io/hhv1zj3kjt/tr:w-400,h-300/krisztian-tabori-uHAdwgwxGiY-unsplash_h6xHKi6lw.jpg" alt="" />
                    <div>
                        <h2>Meal and Workout Plans</h2>
                        <p>
                            Our  meal plans are designed  to help you lose weight, eat more fiber, go vegan and more. Browse dozens of meal plans to find one that's right for you. Or you can even use the custom meal planner service 
                        </p>
                        <Link to="/plans">
                            <Button variant="outlined" color="primary">
                                Checkout All Plans  
                            </Button>
                        </Link>
                    </div>
                </div>

                <div className="feature-plans">
                    <img src="https://ik.imagekit.io/hhv1zj3kjt/tr:w-400,h-300/northfolk-b_Qt9f2egBM-unsplash_b_jNelM-Q.jpg" alt="" />
                    <div>
                        <h2>Articles and Facts</h2>
                        <p>
                            health and fitness related information and user stories for keeping you motivated and connected to the fitness journey. Checkout the latest posts.. 
                        </p>
                        <Link to="/blogs">
                            <Button variant="outlined" color="primary">
                                Articles  
                            </Button>
                        </Link>
                    </div>
                </div>
            </>
        )
    }
}
