import React, {Component}  from "react";
import FormGroup from '@mui/material/FormGroup';
import {FormControlLabel, Divider} from '@mui/material';
import Checkbox from '@mui/material/Checkbox';

function TodoList(props) {
    
  return (
    <div>
        <h4>Todo List</h4>
        <Divider component="h4"/>
        <FormGroup>
            <FormControlLabel control={<Checkbox defaultChecked />} label="Assignment 1" />
            <FormControlLabel control={<Checkbox />} label="Project 1" />
            <FormControlLabel control={<Checkbox />} label="Quiz 1" />
        </FormGroup>
    </div>
  );
}

export default TodoList;