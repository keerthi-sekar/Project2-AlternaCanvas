import React, {Component, useState, useEffect}  from "react";
import FormGroup from '@mui/material/FormGroup';
import {FormControlLabel, Divider} from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import uiData from "../course-data/ui/metadata.json"
import graphData from "../course-data/computer_graphics/metadata.json"
import desData from "../course-data/senior_design/metadata.json"

function TodoList(props) {
  console.log(props.class)
  var assignments = [];
  if(props.class === "ui") {
      var assignments = [];
      uiData.map(item => {
          if(item.folder === "assignment") {
              var obj = {
                  title: item.title,
                  due: item.end_or_due,
                  combined: item.title + ": " + item.end_or_due,
              }
              assignments.push(obj);
          }
      })
  }
  else if(props.class === "computer_graphics") {
      var assignments = [];
      graphData.map(item => {
          if(item.folder === "assignment") {
              var obj = {
                  title: item.title,
                  due: item.end_or_due,
                  combined: item.title + ": " + item.end_or_due,
              }
              assignments.push(obj);
          }
      })
  }
  else {
      desData.map(item => {
          if(item.folder === "assignment") {
              var obj = {
                  title: item.title,
                  due: item.end_or_due,
                  combined: item.title + ": " + item.end_or_due,
              }
              assignments.push(obj);
          }
      })
  }

  return (
    <div>
        <h4>Todo List</h4>
        <Divider component="h4"/>
        <FormGroup>
          {assignments.map((value, index) => (
            <FormControlLabel control={<Checkbox />} label={value.combined} />
          ))}
        </FormGroup>
    </div>
  );
}

export default TodoList;