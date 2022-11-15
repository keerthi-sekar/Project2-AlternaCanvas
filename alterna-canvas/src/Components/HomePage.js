import React, { useState, useEffect } from "react";
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
  const [courseNum, setCourseNum] = useState(" ")
  const [uiPercent, setUiPercent] = useState(0)
  const [graphPercent, setGraphPercent] = useState(0)
  const [desPercent, setDesPercent] = useState(0)
  const [ECD, setECD] = useState(props.student === "Tom" ? "12/10/2022" : props.student === "Anna" ? "12/07/2022" : "12/08/2022")

  useEffect(() => {
      var uiProgressData = props.student === "Tom" ? [ 20, 50, 30] : props.student === "Anna" ? [10, 30, 20, 40] : [10, 50, 20, 20];
      setUiPercent(100 -  uiProgressData[uiProgressData.length - 1])
      var graphProgressData = props.student === "Tom" ? [60, 40] : props.student === "Anna" ? [20, 20, 40, 20] : [10, 10, 80];
      setGraphPercent(100 -  graphProgressData[graphProgressData.length - 1])
      var desProgressData = props.student === "Tom" ? [50, 10, 15, 25] : props.student === "Anna" ? [25, 25, 50] : [65, 35];
      setDesPercent(100 -  desProgressData[desProgressData.length - 1])
      setECD((props.student === "Tom" ? "12/10/2022" : props.student === "Anna" ? "12/07/2022" : "12/08/2022"))
  },[uiPercent, graphPercent, desPercent, ECD, props.student])

  const totalProg = (Math.ceil(((uiPercent + graphPercent + desPercent) / 300) * 100))
  const remainData = 100 - (Math.ceil(((uiPercent + graphPercent + desPercent) / 300) * 100))

  const chartData = [totalProg, remainData];
  const data1 = {
      labels: ["Completed", "Remaining"],
      datasets: [
          {
          data: chartData,
          color: "black",
          backgroundColor: ["#1976d2","white"]
          }
      ],
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
      <br></br>
      <br></br>
      {showCourse ?
      className === "User Interface" ?
        <Course title={className} class={"ui"} setShowCourse={setShowCourse} student={props.student} percent={uiPercent}/>
      :
      className === "Computer Graphics" ?
        <Course title={className} class={"computer_graphics"} setShowCourse={setShowCourse} student={props.student} percent={graphPercent}/>
      :
        <Course title={className} class={"senior_design"} setShowCourse={setShowCourse} student={props.student} percent={desPercent}/>
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
        <div className="row">
          <div className="col text-center">
              <h2>Current Term: FY 2022</h2>
              <p><strong>August 22, 2022 - December 10, 2022</strong></p>
              <div className="btn-group" role="group" style={{width: "800px", height: "50px", margin: "5px",padding: "5px",textalign: "center"}}>
                <button className="btn btn-primary" onClick={() => {setClass('User Interface'); setCourseNum('5067')}} type="button" style={{borderradius: "10px",margin: "2px"}}>User Interface</button>
                <button className="btn btn-primary" onClick={() => {setClass('Computer Graphics'); setCourseNum('5124')}} type="button" style={{borderradius: "10px",margin: "2px"}}>Computer Graphics</button>
                <button className="btn btn-primary" onClick={() => {setClass('Senior Design'); setCourseNum('5001')}} type="button" style={{borderradius: "10px",margin: "2px"}}>Senior Design</button>
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
                  <Divider component="h4"/>
                  <br></br>
                  <h5 style={{textAlign: "center"}}><strong>Overall: {Math.ceil(((uiPercent + graphPercent + desPercent) / 300) * 100)}% Complete</strong></h5>
                  <div style={{textAlign: "center"}}>
                    <strong> Estimation Date of Completion: </strong> <strong> {ECD} </strong>
                  </div>
                  <br></br>
                  <div className="home-progress-tracker">
                    <Doughnut data={data1} options={options1} height={250}/>
                  </div>
                  <div style={{textAlign: "right"}}>
                    <strong>User Interface: </strong> <strong style={{color: "green"}}>On Track</strong>
                    <br></br>
                    <strong>Computer Graphics: </strong> <strong style={{color: "green"}}>On Track</strong>
                    <br></br>
                    <strong>Senior Design: </strong> <strong style={{color: "green"}}>On Track</strong>
                  </div>
                </div>
            </div>
          </div>
          <div className="col-md-4">
            <br></br>
            <div className="row">
                <div className="col-md-12" style={{width: "450px", height: "500px",background: "#c9c5bb",borderRadius: "10px", borderColor: "black", padding: "20px"}}>
                  <h4><strong>{className}: CS {courseNum}</strong> </h4>
                  <Divider component="h4"/>
                  {className === "Select Class" ? 
                  <div>
                    <p id="course-content">Select Class</p> 
                  </div> :
                  <div>
                    <br></br>
                    <OverallGrade student={props.student} class={className}/>
                    <br></br>
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
                  <TodoList title={className} student={props.student}/>
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