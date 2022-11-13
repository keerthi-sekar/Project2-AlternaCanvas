import React from "react";
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import './Calendar.css'

function MyCalendar() {
  
  

  return (   
    <div className="App">
      <div className="grid-item">
        <FullCalendar 
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          headerToolbar = {{
            start:'dayGridMonth,timeGridWeek,timeGridDay',
            center: 'title',
            end: 'prev,next today'
          }}

          customButtons = {{
            sync:{
              text: 'Sync Calendar',
              click: () =>console.log('syncing to phone...')
            }
          }}
          footerToolbar = {{
            start:'sync'
          }}

          height = {600}
        />
      </div>
      <div className="grid-item" id="gi1">
        <h1>Filter</h1>
        <input type="checkbox" id="class1" checked/>
        <label for="class1">Class 1</label><br/>
        <input type="checkbox" id="class2" checked/>
        <label for="class2">Class 1</label><br/>
        <input type="checkbox" id="class3" checked/>
        <label for="class3">Class 1</label><br/>
        <input type="checkbox" id="myEvents" checked/>
        <label for="myEvents">Your Events</label><br/>
        <input type="checkbox" id="myNotes" checked/>
        <label for="myNotes">Your Notes</label><br/>

      </div>
     
    </div>
  );
}
export default MyCalendar;