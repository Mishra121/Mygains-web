import React from 'react';
import {Link} from 'react-router-dom'

import "./styles/NotFound.css"

const NotFound = () => {
    return (
    <div className="container">
        <div className="row">
        <div className="error-template">
            <h1>Oops!</h1>
            <h2>404 Not Found</h2>
            <div className="error-details">
                Sorry, an error has occured, Requested page not found!
                <br/>
            </div>
            <div className="error-actions">
                <Link to="/" className="btn btn-warning">
                    Take Me Home 
                </Link>
                <a href="mailto:mygains20@gmail.com" className="btn btn-default">
                    Contact Support 
                </a>
            </div>
        </div>
        </div>
    </div>
    );
}

export default NotFound;
