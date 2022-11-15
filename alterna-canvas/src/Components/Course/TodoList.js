import React, {Component, useState, useEffect}  from "react";
import FormGroup from '@mui/material/FormGroup';
import {FormControlLabel, Divider} from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import uiData from "../course-data/ui/metadata.json"
import graphData from "../course-data/computer_graphics/metadata.json"
import desData from "../course-data/senior_design/metadata.json"
import annaData from "../student-data/anna-chambers.json"
import keerthiData from "../student-data/keerthi-sekar.json"
import tomData from "../student-data/tom-meyers.json"

function TodoList(props) {
  var assignments = [];
  var grades = [];
  
  if(props.title === "User Interface") {
      grades = props.student === "Anna" ? annaData.course[2].assignments : props.student === "Keerthi" ? keerthiData.course[2].assignments : tomData.course[2].assignments;
      var assignments = [];
      var index = 0;
      uiData.map(item => {
          if(item.folder === "assignment") {
              var obj = {
                  title: item.title,
                  due: item.end_or_due,
                  combined: item.title + ": " + item.end_or_due,
                  checked: grades[index].status === "complete",
              }
              assignments.push(obj);
              index++;
          }
      })
  }
  else if(props.title === "Computer Graphics") {
    grades = props.student === "Anna" ? annaData.course[0].assignments : props.student === "Keerthi" ? keerthiData.course[0].assignments : tomData.course[0].assignments;
      var assignments = [];
      var index = 0;
      graphData.map(item => {
          if(item.folder === "assignment") {
              var obj = {
                  title: item.title,
                  due: item.end_or_due,
                  combined: item.title + ": " + item.end_or_due,
                  checked: grades[index].status === "complete",
              }
              assignments.push(obj);
              index++;
          }
      })
  }
  else if(props.title === "Senior Design"){
    grades = props.student === "Anna" ? annaData.course[1].assignments : props.student === "Keerthi" ? keerthiData.course[1].assignments : tomData.course[1].assignments;
      var index = 0;
      desData.map(item => {
          if(item.folder === "assignment") {
              var obj = {
                  title: item.title,
                  due: item.end_or_due,
                  combined: item.title + ": " + item.end_or_due,
                  checked: grades[index].status === "complete",
              }
              assignments.push(obj);
              index++;
          }
      })
  }

  return (
    <div>
        <h4>Todo List</h4>
        <Divider component="h4"/>
        <FormGroup>
          {assignments.map((value, index) => (
            <FormControlLabel control={<Checkbox defaultChecked={value.checked}/>} label={value.combined} />
          ))}
        </FormGroup>
    </div>
  );
}

export default TodoList;