import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Divider } from "@mui/material";
import 'bootstrap/dist/css/bootstrap.css';
import Course from "./Course/Course";
import TodoList from "./Course/TodoList";
import Info from "./Course/Info";
import OverallGrade from "./Course/OverallGrade";
import 'react-circular-progressbar/dist/styles.css';
import { Doughnut } from 'react-chartjs-2';

function HomePage(props) {

  const [className, setClass] = useState('Select Class')
  const [showCourse, setShowCourse] = useState(false);
  const [courseName, setCourseInfo] = useState('Select Class')
  
  const chartData = [20, 20, 15, 45];
  const showData = chartData[0] + chartData[1] + chartData[2] + "%";
  const data1 = {
      labels: ["User Interface", "Computer Graphics", "Senior Design", "Remaining Tasks"],
      datasets: [
          {
          data: chartData,
          color: "black",
          backgroundColor: ["purple", "blue", "orange", "white"]
          }
      ],
      text: showData
  };
  const options1 = {
      responsive: true,
      plugins: {
          legend: {
              display:true,
              position: 'right',
              labels: {
                title: "Courses",
                color: 'rgb(0,0,0)',
              }
          }
      },
      cutout: '70%',
      responsive: true,
      maintainAspectRatio: false,
  };
    
  return (
    <div>
      {showCourse ?
      className === "User Interface" ?
        <Course title={className} class={"ui"} setShowCourse={setShowCourse} student={props.student}/>
      :
      className === "Computer Graphics" ?
        <Course title={className} class={"computer_graphics"} setShowCourse={setShowCourse} student={props.student}/>
      :
        <Course title={className} class={"senior_design"} setShowCourse={setShowCourse} student={props.student}/>
      :
      <div className="home-content">
      <Helmet>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=yes" />
          <title>AlternaCanvas</title>
          <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css" />
          <link rel="stylesheet" href="assets/fonts/fontawesome-all.min.css" />
      </Helmet>

      <body>
        <br></br>
        <br></br>
        <br></br>
        <div className="row">
          <div className="col text-center">
              <h3>Current Term: FY 2022</h3>
              <div className="btn-group" role="group" style={{width: "800px", height: "50px", margin: "5px",padding: "5px",textalign: "center"}}>
                <button className="btn btn-primary" onClick={() => setClass('User Interface')} type="button" style={{borderradius: "10px",margin: "2px"}}>User Interface</button>
                <button className="btn btn-primary" onClick={() => setClass('Computer Graphics')} type="button" style={{borderradius: "10px",margin: "2px"}}>Computer Graphics</button>
                <button className="btn btn-primary" onClick={() => setClass('Senior Design')} type="button" style={{borderradius: "10px",margin: "2px"}}>Senior Design</button>
              </div>
          </div>
          <br></br>
          <br></br>
          <div className="col-md-12"></div>
          <div className="col-md-4">
            <br></br>
            <div className="row">
                <br></br>
                <div className="col-md-12" style={{width: "450px",height: "500px",background: "#c9c5bb",borderRadius: "10px", borderColor: "black", padding: "20px"}}>
                  <h4> Plan Dashboard </h4>
                  <h5 style={{textAlign: "center"}}>Semester Plan Progress: {showData} Complete </h5>
                  <br></br>
                  <div className="home-progress-tracker">
                    <Doughnut data={data1} options={options1} height={250}/>
                  </div>
                  <br></br>
                  <strong>User Interface: </strong> <strong style={{color: "green"}}>On Track</strong>
                  <br></br>
                  <strong>Computer Graphics: </strong> <strong style={{color: "green"}}>On Track</strong>
                  <br></br>
                  <strong>Senior Design: </strong> <strong style={{color: "green"}}>On Track</strong>
                  <br></br>
                  <strong> On track to Complete: </strong> <strong style={{color: "blue"}}> 12/10/2022 </strong>
                </div>
            </div>
          </div>
          <div className="col-md-4">
            <br></br>
            <div className="row">
                <div className="col-md-12" style={{width: "450px", height: "500px",background: "#c9c5bb",borderRadius: "10px", borderColor: "black", padding: "20px"}}>
                  <h4> Course Dashboard </h4> 
                  <Divider component="h4"/>
                  {className === "Select Class" ? 
                  <div>
                    <p id="course-content">Select Class</p>
                  </div> :
                  <div>
                    <OverallGrade student={props.student} class={className}/>
                    <Info class={className}/>
                    <button class="btn btn-primary" onClick={() => setShowCourse(true)} disabled={className==="Select Class"} style={{bottom: "0", right: "0", borderRadius: "10px",margin: "2px"}}>View Full Course</button>
                  </div>}
                </div>
            </div>
          </div>
          <div className="col-md-4">
            <br></br>
            <div className="row">
                <br></br>
                <div className="col-md-12" style={{width: "450px",height: "500px",background: "#c9c5bb",borderRadius: "10px", borderColor: "black", padding: "20px"}}>
                  <TodoList/>
                </div>
            </div>
          </div>
        </div>  
    <script src="assets/bootstrap/js/bootstrap.min.js"></script>
      </body>
    </div> 
      }
    </div>
  );
}
export default HomePage;