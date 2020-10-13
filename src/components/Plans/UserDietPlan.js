import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';

import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

import CustomPlanView from './CustomPlanView';

import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 120,
  },
  centerBox: {
    textAlign: "center",
    boxShadow: "10px 10px 5px grey",
    backgroundColor: "#fff",
    paddingTop: "20px",
    paddingBottom: "20px",
    [theme.breakpoints.up('md')]: {
      width: "75%",
      margin: "0 auto",
      marginTop: "180px", 
      marginBottom: "50px"
    },
    [theme.breakpoints.down('md')]: {
      marginTop: "140px",
      paddingBottom: "80px"
    }
  },
  currentQuestionDiv: {
    marginTop: "40px",
    [theme.breakpoints.down('md')]: {
      marginTop: "70px"
    },
    "& h4": {
      marginBottom: "30px"
    }
  },
  buttonDiv: {
    marginTop:"30px",
    marginBottom: "30px",
    "& .firstBtn": {
      marginRight: "20px"
    }
  },
  centerLoader: {
    marginLeft: "48%",
    marginTop: "35vh",
    marginBottom: "50vh"
  }
}));

export default function UserDietPlan() {

    const classes = useStyles();

    const [questionNum, setquestionNum] = useState(1);

    const [timeFrame, settimeFrame] = useState("day");
    const [targetCalories, settargetCalories] = useState(2000);
    const [diet, setdiet] = useState("");

    // Response States
    const [plan, setplan] = useState(null);
    const [loading, setLoading] = useState(false);


    const handletimeFrame = (event) => {
      settimeFrame(event.target.value)
    }

    const handletargetCalories = (event) => {
      settargetCalories(event.target.value)
    }

    const handlediet = (event) => {
      setdiet(event.target.value)
    }

    const submitHandle = () => {
      setLoading(true);
      if(diet === ""){
        axios.get('https://api.spoonacular.com/mealplanner/generate?apiKey=391ee61f811f4a62867ce53c4cf12a65', {
          params: {
            timeFrame,
            targetCalories
          }
        })
        .then(function (response) {
          console.log(response);
          setplan(response.data);
          setLoading(false);
        })
        .catch(function (error) {
          console.log(error);
          alert("Please try after some time..");
          setLoading(false);
        })
      } else {
        axios.get('https://api.spoonacular.com/mealplanner/generate?apiKey=391ee61f811f4a62867ce53c4cf12a65', {
          params: {
            timeFrame,
            targetCalories,
            diet
          }
        })
        .then(function (response) {
          console.log(response);
          setplan(response.data);
          setLoading(false);
        })
        .catch(function (error) {
          console.log(error);
          alert("Please try after some time..");
          setLoading(false);
        })
      }
    }

    const currentQuestion = () => {
      if(questionNum === 1){
        return (
            <>
              <h4>Meal plan for day or week?</h4>
              <Select
                id="timeFrame"
                value={timeFrame}
                onChange={handletimeFrame}
                className={classes.formControl}
                variant="outlined"
              >
                <MenuItem value={"day"}>Day</MenuItem>
                <MenuItem value={"week"}>Week</MenuItem>
              </Select>
              <div className={classes.buttonDiv}>   
                <Button className="firstBtn" variant="contained" color="primary" onClick={() => setquestionNum(2)}>
                  Next
                </Button>
              </div>
            </>
        )
      }
      else if(questionNum === 2){
        return (
          <>
              <h4>Calorie intake</h4><p>(Recommended  woman-2000 and man-2500 to mantain weight)</p>
              <TextField
                id="targetCalories"
                value={targetCalories}
                onChange={handletargetCalories}
                type="number"
                variant="outlined"
                className={classes.formControl}
              />

              <div className={classes.buttonDiv}>
                <Button className="firstBtn" variant="contained" color="secondary" onClick={() => setquestionNum(1)}>
                  Back
                </Button>
                <Button variant="contained" color="primary" onClick={() => setquestionNum(3)}>
                  Next
                </Button>
              </div>       
          </>
        )
      }
      else if(questionNum === 3){
        return (
          <>
          <h4>Any diet preferences?</h4>
          <Select
            id="diet"
            value={diet}
            onChange={handlediet}
            className={classes.formControl}
            variant="outlined"
          >
            <MenuItem value={""}>No preference</MenuItem>
            <MenuItem value={"vegetarian"}>Vegetarian</MenuItem>
            <MenuItem value={"glutenfree"}>Gluten Free</MenuItem>
            <MenuItem value={"ketogenic"}>Ketogenic</MenuItem>
            <MenuItem value={"vegan"}>Vegan</MenuItem>
          </Select>
          <div className={classes.buttonDiv}>
            <Button className="firstBtn" variant="contained" color="secondary" onClick={() => setquestionNum(2)}>
              Back
            </Button>
            <Button variant="contained" color="primary" onClick={submitHandle}>
              Submit
            </Button>              
          </div>
          </>
        )
      }
    }

    return (
        <div className="container">
        <div className="User-Diet-Plan">

          {
            (plan !== null)? (
              <>
                {
                  <CustomPlanView timeVar={timeFrame} plan={plan}/>
                }
              </>
            ): (
              <>
              {
                (loading === true)?(
                  <div
                  className={classes.centerLoader}
                  >
                    <CircularProgress size={55}/>
                  </div>
                ):
                (
                  <div  className={classes.centerBox}>
                    <h3>Some quick questions to generate that awesome meal plan ..</h3>
                    <hr/>
                  
                    <form>
                      <div className={classes.currentQuestionDiv}>
                      {currentQuestion()}
                      </div>
                    </form>
                  </div>
                )
              }
              </>
            )
          }


        </div>
        </div>
    )
}
