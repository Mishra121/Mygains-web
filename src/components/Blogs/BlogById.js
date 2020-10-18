import React, { Component } from 'react'

import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';

import { Redirect } from "react-router-dom";


const useStyles = theme => ({
    containerDiv: {
        marginTop: "120px",
        marginBottom: "50px",
        width: "86%",
        marginLeft: "90px",
        [theme.breakpoints.down('md')]: {
            width: "22rem",   
            marginLeft: "0",
        },
        "& img": {
            height: "46vh",
            [theme.breakpoints.down('md')]: {
                height: "30vh",
            }
        }

    },
    content: {
        width: "90%",
        margin: "0 auto",
        "& h2": {
            marginTop: "20px",
            [theme.breakpoints.down('md')]: {
                fontSize: "1.5rem"
            }
        },
        "& p": {
            marginTop: "20px",
            marginBottom: "20px"
        }
    }
});

class BlogById extends Component {



    render() {

        const { classes } = this.props;
        const queryString = window.location.href;
        const id = parseInt(
            queryString.substring(queryString.lastIndexOf('/') + 1)
        );
        // console.log(id);

        const dummyPosts = [
            {
                post_No: 1,
                post_image_url: 'https://ik.imagekit.io/hhv1zj3kjt/images__23__HvMj8LziL.png',
                post_heading : 'The relationship between physical and mental health',
                post_body: `
                    Your physical health is linked with your mental health too. Regular exercise helps you
                    keep your physical health shape. It is also necessary for proper functioning of different
                    body organs and your mental wellness. In today's fast paced world tackling and
                    maintaining physical as well as mental health has become an array of significance. Like
                    Yin and Yang, a balance between mental and physical health is equally important. It's
                    often found that people with serious mental conditions are at an elevated risk of
                    experiencing chronic physical conditions and vice versa.
                    
                    Link between mental and physical health you need to know:
                    1. Poor mental health determinants like stress, depression, anxiety, anger are directly
                    related to our immune system, fatigue and poor heart health which then invite physical
                    illness.
                    2. Physical conditions- chronic or acute cause discomfort in the body which then leads to
                    stress, irritability, anger, anxiety, affecting our mental health. If the condition is chronic, it
                    might lead to depression as well. As a result, it's very important we work towards a better
                    lifestyle which keeps our physical and mental health, both in check.
                `
            },
            {
                post_No: 2,
                post_image_url: 'https://ik.imagekit.io/hhv1zj3kjt/images__24__e2TkyCwXo.png',
                post_heading : 'How to choose diet plans for your goals ?',
                post_body: `
                    With so many potential diet plans to try, finding the right one for you might seem
                    impossible. Rather than starting your search by evaluating diet plans themselves, you
                    can begin by considering your personal fitness or weight-loss goals instead. Find out
                    how to match your personal goals and lifestyle to a diet plan and learn how to
                    customize diet plans to meet your objectives.

                    Think About Your Personal Goals :
                    Whether you want to burn fat, build muscle, or develop healthier eating habits, creating
                    a diet plan should be all about meeting your specific goals. Before you even start
                    thinking about specific diet plans, take some time to consider your personal goals and
                    what you want to get out of committing to a meal plan.

                    Weight Loss: If you’re set on losing weight and burning fat, think about how much weight you
                    want to lose and where you’re most concerned about burning fat. With a firm goal in mind and
                    a detailed meal plan, you could lose anywhere from a few pounds to a larger percentage of
                    your body weight.

                    Building Muscle: If you’re more concerned about gaining weight and building lean mass, think
                    about your target weight. With that in mind, you’ll want to combine a challenging workout plan
                    with a diet plan that ensures you consume the right nutrients at the most effective times.

                    Weight Maintenance: Not every diet plan has to involve substantial gains or losses. If you want
                    to sustain your current weight, you’ll need a meal plan that takes into account your
                    maintenance calories and your current energy needs.
                `
            },
            {
                post_No: 3,
                post_image_url: 'https://ik.imagekit.io/hhv1zj3kjt/images__22__aOZQwVlXS.png',
                post_heading : 'Story of a woman who became fit by 50',
                post_body: `
                    When she was 46 years old, she set a goal: to be her absolute fittest by her 50th
                    birthday. "I knew I would have to lose about 100 pounds!" she says. "So I started
                    setting smaller goals, like giving up fast food or going for a walk." Taking it slowly,
                    she lost the first 55 pounds.

                    At 170 pounds, the scale became stuck. She signed up with a personal trainer and
                    started weigh training. "I was terrified," she admits. But once she started, she found
                    that her mission changed. No longer focusing on losing weight by the time she turned
                    50, she transformed her mindset: "My goals became strength-related," she explains,
                    who now includes home training sessions in her routine. Equipped with weights, a
                    bench, resistance bands and medicine balls, she replicates gym exercises. And when it
                    comes to getting results, home reps count as much as gym reps.
                    Weighing in at 124 pounds, she reached her goal two years early. She turned 50 this
                    year and happily reported that she has maintained her fit lifestyle. "I am now aiming
                    for fit at 60!" she says. "I have not lost my motivation."
                `
            },

        ]

        const postIndex = dummyPosts.findIndex((post) => {
            return post.post_No === id;
        })

        // console.log("Id .."+ postIndex)

        return (
            <div className="container"> 
            {
                (postIndex !== -1) ? (
                    <div className={clsx(classes.containerDiv, 'card')}>
                        <img src= {dummyPosts[postIndex].post_image_url}
                            alt={dummyPosts[postIndex].post_heading}
                        />

                        <div className={classes.content} >
                            <h2>{dummyPosts[postIndex].post_heading}</h2>
                            <hr/>
                            <p>
                                {
                                    dummyPosts[postIndex].post_body.split("\n").map(function(item) {
                                        return(
                                            <span>
                                                {item}
                                                <br/>
                                            </span>
                                        )
                                    })
                                }
                            </p>
                        </div>
                    </div>
                ): (
                    <Redirect to="/not-found" />
                )
            }
            </div>
        )
    }
}

export default withStyles(useStyles)(BlogById)