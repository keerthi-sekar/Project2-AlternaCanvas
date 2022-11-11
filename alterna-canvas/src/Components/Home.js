import React from "react";
import { Helmet } from "react-helmet";

function Home() {
  return (
    <div className="home-content">
      <Helmet>
          <meta charset="utf-8" />
          <title>AlternaCanvas</title>
          <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css" />
          <link rel="stylesheet" href="assets/fonts/fontawesome-all.min.css" />
      </Helmet>

      <body style={{background: "#a0db8e"}}>
      <div className="container">
          <div className="row">
              <div className="col-md-4 text-center" style={{height: "500px" , background: "#a0db8e"}}>
                  <p className="lead"><strong>Welcome to Alterna-Canvas!</strong></p>
                  <div className="row">
                      <div className="col"><i className="far fa-user text-center" style={{fontsize: "44px", padding: "10px", width: "58px"}}></i>
                          <p>User Name</p>
                      </div>
                  </div>
                  <div className="row">
                      <div className="col-auto col-lg-3 text-center align-self-baseline" style={{transform: "translate(25px)"}}>
                          <p className="lead text-center" style={{transform: "translate(25px)"}}>Tools</p>
                      </div>
                      <div className="col-md-12 col-lg-5 text-center align-self-center" style={{height: "350px" ,transform: "translate(25px)"}}>
                          <p></p><i className="far fa-calendar" style={{fontsize: "52px"}}></i>
                          <p></p><i className="far fa-bell" style={{fontsize: "52px"}}></i>
                          <p></p><i className="fas fa-home" style={{fontsize: "52px"}}></i>
                          <p></p><i className="fas fa-trophy" style={{fontsize: "52px"}}></i>
                          <p></p><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" style={{fontsize: "52px"}}>
                              <path d="M6 6C6 5.44772 6.44772 5 7 5H17C17.5523 5 18 5.44772 18 6C18 6.55228 17.5523 7 17 7H7C6.44771 7 6 6.55228 6 6Z" fill="currentColor"></path>
                              <path d="M6 10C6 9.44771 6.44772 9 7 9H17C17.5523 9 18 9.44771 18 10C18 10.5523 17.5523 11 17 11H7C6.44771 11 6 10.5523 6 10Z" fill="currentColor"></path>
                              <path d="M7 13C6.44772 13 6 13.4477 6 14C6 14.5523 6.44771 15 7 15H17C17.5523 15 18 14.5523 18 14C18 13.4477 17.5523 13 17 13H7Z" fill="currentColor"></path>
                              <path d="M6 18C6 17.4477 6.44772 17 7 17H11C11.5523 17 12 17.4477 12 18C12 18.5523 11.5523 19 11 19H7C6.44772 19 6 18.5523 6 18Z" fill="currentColor"></path>
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M2 4C2 2.34315 3.34315 1 5 1H19C20.6569 1 22 2.34315 22 4V20C22 21.6569 20.6569 23 19 23H5C3.34315 23 2 21.6569 2 20V4ZM5 3H19C19.5523 3 20 3.44771 20 4V20C20 20.5523 19.5523 21 19 21H5C4.44772 21 4 20.5523 4 20V4C4 3.44772 4.44771 3 5 3Z" fill="currentColor"></path>
                          </svg>
                      </div>
                  </div>
              </div>
              <div className="col-md-4">
                  <div className="row">
                      <div className="col-md-12" style={{height: "250px", background: "#8e8c7a", borderradius: "10px"}}></div>
                  </div>
                  <p></p>
                  <div className="row">
                      <div className="col-md-12" style={{height: "250px", background: "#8e8c7a", borderradius: "10px"}}></div>
                  </div>
              </div>
              <div className="col-md-4 text-start" style={{background: "#a0db8e"}}>
                  <p>To Do List</p>
                  <div className="btn-group" role="group" style={{margin: "5px",padding: "5px",textalign: "center",transform: "translate(12px)"}}><button className="btn btn-primary" type="button" style={{borderradius: "10px",margin: "2px"}}>Class 1</button><button class="btn btn-primary" type="button" style={{borderradius: "10px",margin: "2px"}}>Class 2</button><button className="btn btn-primary" type="button" style={{borderradius: "10px",margin: "2px"}}>Class 3</button></div>
                  <ul>
                      <li>Item 1</li>
                      <li>Item 2</li>
                      <li>Item 3</li>
                      <li>Item 4</li>
                  </ul>
              </div>
          </div>
          <div className="row" style={{background: "#a0db8e"}}>
              <div className="col text-center">
                  <p></p>
                  <p>FY 2022</p>
              </div>
              <div className="col-md-12 text-center"><i className="far fa-star text-primary" style={{fontsize: "91px",textalign: "center",padding: "15px",transform: "translate(0px)"}}></i><i className="far fa-star text-primary" style={{fontsize: "91px",textalign: "center",padding: "15px",transform: "translate(0px)"}}></i><i className="far fa-star text-primary" style={{fontsize: "91px",textalign: "center",padding: "15px",transform: "translate(0px)"}}></i></div>
          </div>
          <script src="assets/bootstrap/js/bootstrap.min.js"></script>
      </div> 
    </body>
    </div> 
  );
}
export default Home;