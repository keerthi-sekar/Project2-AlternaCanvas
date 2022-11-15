import React, {useState}  from "react";
import {FormControlLabel, Checkbox } from '@mui/material';
import ProgressBar from "./ProgressBar";


function ActivePlan(props) {
    const [percent, setPercent] = useState(0);
    const [check1, setcheck1] = useState(false);
    const [check2, setcheck2] = useState(false);
    const [check3, setcheck3] = useState(false);

    function handleCheck(e) {
        console.log(e)
        if(e.target.checked) {
            setPercent(percent + 33.3)
        }
        else {
            setPercent(percent - 33.3)
        }
    }
    
    return(
        <div className="plan">
            <h4>{props.title}</h4>
            <div>
                <label><strong>List of Tasks:</strong></label>
                <div>
                    <FormControlLabel control={<Checkbox onChange={(e) => {handleCheck(e); setcheck1(!check1)}} />} label={props.task1} />
                    <text><strong>Due:</strong> {props.task1Due}</text>
                    {props.task1Start < "2022-10-13" && !check1 ?
                        <text style={{marginLeft: "10px"}}><strong style={{color: "red"}}>Behind</strong></text> :
                        <text style={{marginLeft: "10px"}}><strong style={{color: "green"}}>On Track</strong></text>
                    }
                </div>
                <div>
                    <FormControlLabel control={<Checkbox onChange={(e) => {handleCheck(e); setcheck2(!check1)}}/>} label={props.task2} />
                    <text><strong>Due:</strong> {props.task2Due}</text>
                    {props.task2Start < "2022-10-13" && !check2 ?
                        <text style={{marginLeft: "10px"}}><strong style={{color: "red"}}>Behind</strong></text> :
                        <text style={{marginLeft: "10px"}}><strong style={{color: "green"}}>On Track</strong></text>
                    }
                </div>
                <div>
                    <FormControlLabel control={<Checkbox onChange={(e) => {handleCheck(e); setcheck3(!check1)}}/>} label={props.task3} />
                    <text><strong>Due:</strong> {props.task3Due}</text>
                    {props.task3Start < "2022-10-13" && !check3 ?
                        <text style={{marginLeft: "10px"}}><strong style={{color: "red"}}>Behind</strong></text> :
                        <text style={{marginLeft: "10px"}}><strong style={{color: "green"}}>On Track</strong></text>
                    }
                </div>
            </div>
            <ProgressBar completed={Math.ceil(percent)} />
        </div>
    );

}

export default ActivePlan;