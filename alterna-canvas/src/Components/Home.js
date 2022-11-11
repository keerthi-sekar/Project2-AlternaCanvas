import React from "react";
import { Helmet } from "react-helmet";

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
      <div className="row">
        <div className="col text-center">
            <p></p>
            <p>FY 2022</p>
        </div>
        <div className="col-md-12 text-center"><i className="far fa-star text-primary" style={{fontsize: "91px",textalign: "center",padding: "15px"}}></i><i className="far fa-star text-primary" style={{fontsize: "91px",textalign: "center",padding: "15px"}}></i><i className="far fa-star text-primary" style={{fontsize: "91px",textalign: "center",padding: "15px"}}></i><i className="far fa-star text-primary" style={{fontsize: "91px",textalign: "center",padding: "15px"}}></i></div>
        <div className="col-md-4">
            <div className="row">
                <div className="col-md-12" style={{height: "250px",background: "#8e8c7a",borderradius: "10px"}}></div>
            </div>
            <p></p>
            <div className="row">
                <div className="col-md-12" style={{height: "250px",background: "#8e8c7a",borderradius: "10px"}}></div>
            </div>
        </div>
        <div className="col-md-4 text-start">
            <p>To Do List</p>
            <div className="btn-group" role="group" style={{margin: "5px",padding: "5px",textalign: "center"}}><button className="btn btn-primary" type="button" style={{borderradius: "10px",margin: "2px"}}>Class 1</button><button className="btn btn-primary" type="button" style={{borderradius: "10px",margin: "2px"}}>Class 2</button><button className="btn btn-primary" type="button" style={{borderradius: "10px",margin: "2px"}}>Class 3</button></div>
            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
                <li>Item 4</li>
            </ul>
        </div>
    </div>
    <script src="assets/bootstrap/js/bootstrap.min.js"></script>
      </body>
    </div> 
  );
}
export default Home;