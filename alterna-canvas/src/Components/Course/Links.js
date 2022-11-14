import React from "react";

function Links(props) {
    
    return(
        <div className="course-inner">
            <p><a href={props.link}>Visit {props.name}!</a></p>
        </div>
        
    );

}

export default Links;