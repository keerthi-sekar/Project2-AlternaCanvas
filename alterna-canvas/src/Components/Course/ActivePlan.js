import React, {useState}  from "react";
import {FormControlLabel, Checkbox } from '@mui/material';
import ProgressBar from "./ProgressBar";


function ActivePlan(props) {
    const [percent, setPercent] = useState(0);

    function handleCheck(e) {
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
                    <FormControlLabel control={<Checkbox onChange={handleCheck}/>} label={props.task1} />
                    <text><strong>Due:</strong> {props.task1Due}</text>
                </div>
                <div>
                    <FormControlLabel control={<Checkbox onChange={handleCheck}/>} label={props.task2} />
                    <text><strong>Due:</strong> {props.task2Due}</text>
                </div>
                <div>
                    <FormControlLabel control={<Checkbox onChange={handleCheck}/>} label={props.task3} />
                    <text><strong>Due:</strong> {props.task3Due}</text>
                </div>
            </div>
            <ProgressBar completed={Math.ceil(percent)} />
        </div>
    );

}

export default ActivePlan;