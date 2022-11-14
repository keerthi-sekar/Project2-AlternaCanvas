import React, {useState}  from "react";
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import {ListItem, List, ListItemText, Typography, Divider} from '@mui/material';
import './Calendar.css'


var assns = [
  {
    id: "ui",
    title: 'Getting to know you',
    start:'2022-08-29',   
  },
  {
    id: "ui",
    title: 'Sketching Practice',
    start:'2022-09-16',
  },
  {
    id: "ui",
    title: 'Which smart object',
    start:'2022-09-23',
    backgroundColor:"#800080"
  },
  {
    id: "ui",
    title: 'HTML & CSS Practice',
    start:'2022-09-23',
    backgroundColor:"#800080"
  },
  {
    id: "ui",
    title: 'Project 1 Check-in',
    start:'2022-09-26',
    backgroundColor:"#800080"
  },
  {
    id: "ui",
    title: 'JavaScript Practice',
    start:'2022-09-30',
    backgroundColor:"#800080"
  },
  {
    id: "ui",
    title: 'Project 1 Implementation',
    start:'2022-10-14',
    backgroundColor:"#800080"
  },
  {
    id: "ui",
    title: 'Project 1 Documentation',
    start:'2022-10-16',
    backgroundColor:"#800080" 
  },
  {
    id: "graph",
    title: 'First Assignment',
    start:'2022-08-29'
  },
  {
    id: "graph",
    title: 'Linear Algebra Review',
    start:'2022-09-09'
  },
  {
    id: "graph",
    title: 'Rasterization Exercise',
    start:'2022-09-26',
    backgroundColor:"#0000FF"
  },
  {
    id: "graph",
    title: 'Transformations Exercise',
    start:'2022-09-23',
    backgroundColor:"#0000FF"
  },
  {
    id: "graph",
    title: 'Projection Exercises',
    start:'2022-09-30',
    backgroundColor:"#0000FF"
  },
  {
    id: "graph",
    title: 'Texture Mapping Exercises',
    start:'2022-10-05',
    backgroundColor:"#0000FF"
  },
  {
    id: "graph",
    title: 'Color',
    start:'2022-10-14',
    backgroundColor:"#0000FF"
  },
  {
    id: "graph",
    title: 'Light & Shadow',
    start:'2022-10-26',
    backgroundColor:"#0000FF"
  },
  {
    id: 'des',
    title: 'First Assignments',
    start:'2022-08-29'
  },
  {
    id: 'des',
    title: 'User Profiles',
    start:'2022-08-29'
  },
  {
    id: 'des',
    title: 'Tasks',
    start:'2022-08-29'
  },
  {
    id: 'des',
    title: 'Timeline',
    start:'2022-08-29'
  },
  {
    id: 'des',
    title: 'Project Status Update #1',
    start:'2022-08-29'
  },
  {
    id: 'des',
    title: 'Project Status Update #2',
    start:'2022-08-29'
  }

];
var today= '2022-09-16'

function MyCalendar() {
  return (   
    <div className="Appx">
      
      <div className="grid-item">
        <FullCalendar 
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialDate={"2022-09-19"}
          initialView="dayGridMonth"
          headerToolbar = {{
            start:'dayGridMonth,timeGridWeek,timeGridDay',
            center: 'title',
            end: 'prev,next today'
          }}
          selectable= {true}
          dateClick={(e) => console.log(e.dateStr)}
          events={assns}
          
          customButtons = {{
            sync:{
              text: 'Sync Calendar',
              click: () =>console.log('syncing to phone...')
            }
          }}
          footerToolbar = {{
            start:'sync'
          }}
          eventBorderColor= '#919191'
          eventBackgroundColor= '#919191'
          height = {600}
        />
      </div>
      <div className="grid-item" id="gi1">
        <h1>Filtr</h1>
        {/* <input type="checkbox" id="class1" onClick={classToggle()} defaultChecked/>
        <label for="class1">Class 1</label><br/> */}
        <input type="checkbox" id="class2" defaultChecked/>
        <label for="class2">Class 2</label><br/>
        <input type="checkbox" id="class3" defaultChecked/>
        <label for="class3">Class 3</label><br/>
        <input type="checkbox" id="myEvents" defaultChecked/>
        <label for="myEvents">Your Events</label><br/>
        <input type="checkbox" id="myNotes" defaultChecked/>
        <label for="myNotes">Your Notes</label><br/>

      </div>
     
    </div>
  );
}
export default MyCalendar;