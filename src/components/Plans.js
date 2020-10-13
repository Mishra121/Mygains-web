import React, { Component } from 'react'
import DietPlan from './Plans/DietPlan'
import WorkPlan from './Plans/WorkPlan'

export default class Plans extends Component {
    render() {
        return (
            <div className="container">
                <DietPlan />
                <WorkPlan />
            </div>
        )
    }
}
