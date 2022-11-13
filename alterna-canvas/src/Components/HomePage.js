import React, { useState } from "react";
import { Helmet } from "react-helmet";
import 'bootstrap/dist/css/bootstrap.css';
import Course from "./Course";
import TodoList from "./TodoList";
import Info from "./Info";

function HomePage() {

  const [className, setClass] = useState('Select Class')
  const [showCourse, setShowCourse] = useState(false);

  return (
    <div>
      {showCourse ?
      className === "User Interface" ?
        <Course title={className} class={"ui"} setShowCourse={setShowCourse}/>
      :
      className === "Computer Graphics" ?
        <Course title={className} class={"computer_graphics"} setShowCourse={setShowCourse}/>
      :
        <Course title={className} class={"senior_design"} setShowCourse={setShowCourse}/>
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
              <p></p>
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
                <div className="col-md-12" style={{width: "450px",height: "500px",background: "#d6d3ba",borderRadius: "10px", borderColor: "black", padding: "20px"}}>
                  <h4> Plan Dashboard </h4>
                </div>
            </div>
          </div>
          <div className="col-md-4">
            <br></br>
            <div className="row">
                <div className="col-md-12" style={{width: "450px", height: "500px",background: "#d6d3ba",borderRadius: "10px", borderColor: "black", padding: "20px"}}>
                  <h4> Course Dashboard </h4> 
                  <div>
                    <p id="course-content"> Course Content: {className} </p>
                  </div>
                  {/* <Info class={className}/> */}
                  <button class="btn btn-primary" onClick={() => setShowCourse(true)} disabled={className==="Select Class"} style={{bottom: "0", right: "0", borderRadius: "10px",margin: "2px"}}>View Full Course</button>
                </div>
            </div>
          </div>
          <div className="col-md-4">
            <br></br>
            <div className="row">
                <br></br>
                <div className="col-md-12" style={{width: "450px",height: "500px",background: "#d6d3ba",borderRadius: "10px", borderColor: "black", padding: "20px"}}>
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