import React from "react";
import { Helmet } from "react-helmet";
import 'bootstrap/dist/css/bootstrap.css';

function Home() {
  
  var courseText = document.getElementById('course-content');

  function ClassClick(classIndex)
  {
    switch(classIndex) {
      case 1:
        return courseText.textContent = "Course: Class 1";
      case 2:
        return courseText.textContent = "Course: Class 2";
      case 3:
        return courseText.textContent = "Course: Class 3";
      default:
        return courseText.textContent = "Course: Please Select";
    }
  }

  return (
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
                <button className="btn btn-primary" onClick={ClassClick(1)} type="button" style={{borderradius: "10px",margin: "2px"}}>Class 1</button>
                <button className="btn btn-primary" onClick={ClassClick(2)} type="button" style={{borderradius: "10px",margin: "2px"}}>Class 2</button>
                <button className="btn btn-primary" onClick={ClassClick(3)} type="button" style={{borderradius: "10px",margin: "2px"}}>Class 3</button>
              </div>
          </div>
          <br></br>
          <br></br>
          <div className="col-md-12"></div>
          <div className="col-md-4">
            <br></br>
            <div className="row">
                <br></br>
                <div className="col-md-12" style={{width: "450px",height: "500px",background: "#d6d3ba",borderRadius: "10px", borderColor: "black"}}>
                  <h4> Plan Dashboard </h4>
                </div>
            </div>
          </div>
          <div className="col-md-4">
            <br></br>
            <div className="row">
                <div className="col-md-12" style={{width: "450px", height: "500px",background: "#d6d3ba",borderRadius: "10px", borderColor: "black"}}>
                  <h4> Course Dashboard </h4> 
                  <div>
                    <p id="course-content"> Course Content </p>
                  </div>
                  <button class="btn btn-primary" style={{bottom: "0", right: "0", borderRadius: "10px",margin: "2px"}}>View Full Course</button>
                </div>
            </div>
          </div>
          <div className="col-md-4">
            <br></br>
            <div className="row">
                <br></br>
                <div className="col-md-12" style={{width: "450px",height: "500px",background: "#d6d3ba",borderRadius: "10px", borderColor: "black"}}>
                  <h4> To Do List </h4>
                  <p id="list-content"> To Do List Content </p>
                </div>
            </div>
          </div>
        </div>  
    <script src="assets/bootstrap/js/bootstrap.min.js"></script>
      </body>
    </div> 
  );
}
export default Home;