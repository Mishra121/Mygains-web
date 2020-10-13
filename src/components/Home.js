import React, { Component } from 'react'

import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

import "./styles/Home.css"

export default class Home extends Component {

    render() {

        const Banner = "https://firebasestorage.googleapis.com/v0/b/mygains-india.appspot.com/o/mygainsimg%2Fchase-kinney-FMQBLyhD2HU-unsplash.jpg?alt=media&token=62709fc5-ebbc-4fdc-afe8-d37bb871395e";

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
                    <img src="https://firebasestorage.googleapis.com/v0/b/mygains-india.appspot.com/o/mygainsimg%2Fkrisztian-tabori-uHAdwgwxGiY-unsplash.jpg?alt=media&token=238226ce-dae7-4e34-8154-b8ecc169dd5e" alt="" />
                    <div>
                        <h2>Meal Plans</h2>
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
                    <img src="https://firebasestorage.googleapis.com/v0/b/mygains-india.appspot.com/o/mygainsimg%2Fjess-bailey-ycTvvg1mPU4-unsplash.jpg?alt=media&token=9a1387d8-d3ab-41f1-81d5-a8967f3eb485" alt="" />
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
