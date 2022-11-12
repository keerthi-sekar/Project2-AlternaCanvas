import React from "react";
import { Helmet } from "react-helmet";
import 'bootstrap/dist/css/bootstrap.css';

function Home() {
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
              <p>FY 2022</p>
              <div className="btn-group" role="group" style={{width: "800px", height: "50px", margin: "5px",padding: "5px",textalign: "center"}}><button className="btn btn-primary" type="button" style={{borderradius: "10px",margin: "2px"}}>Class 1</button><button className="btn btn-primary" type="button" style={{borderradius: "10px",margin: "2px"}}>Class 2</button><button className="btn btn-primary" type="button" style={{borderradius: "10px",margin: "2px"}}>Class 3</button></div>
          </div>
          <br></br>
          <br></br>
          <div className="col-md-12"></div>
          <div className="col-md-4">
            <br></br>
            <br></br>
            <div className="row">
                <div className="col-md-12" style={{width: "450px", height: "500px",background: "#8e8c7a",borderRadius: "10px", borderColor: "black"}}>
                  <h4> Course Dashboard </h4>
                </div>
            </div>
          </div>
          <div className="col-md-4">
            <br></br>
            <br></br>
            <div className="row">
                <br></br>
                <br></br>
                <div className="col-md-12" style={{width: "450px",height: "500px",background: "#8e8c7a",borderRadius: "10px", borderColor: "black"}}>
                  <h4> Plan Dashboard </h4>
                </div>
            </div>
          </div>
          <div className="col-md-4">
            <br></br>
            <br></br>
            <div className="row">
                <br></br>
                <br></br>
                <div className="col-md-12" style={{width: "450px",height: "500px",background: "#8e8c7a",borderRadius: "10px", borderColor: "black"}}>
                  <h4> To Do List </h4>
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