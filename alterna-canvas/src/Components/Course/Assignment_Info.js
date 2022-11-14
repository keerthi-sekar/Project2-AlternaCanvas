import React, {Component}  from "react";
import asn1 from "../course-data/ui/assignments/assignment_01.html";
import asn2 from "../course-data/ui/assignments/assignment_02.html";
import asn3 from "../course-data/ui/assignments/assignment_03.html";
import asn4 from "../course-data/ui/assignments/assignment_04.html";
import asn5 from "../course-data/ui/assignments/assignment_05.html";
import asn6 from "../course-data/ui/assignments/06.html";
import asn7 from "../course-data/ui/assignments/07.html";
import asn8 from "../course-data/ui/assignments/08.html";

function AssignmentInfo(props) {


    return(
        <div>
            {
                props.assignment === 'Getting to know you' ?
                    <div className="course-inner" dangerouslySetInnerHTML={ {__html: asn1} } />
                :
                props.assignment === 'Sketching practice' ?
                    <div className="course-inner" dangerouslySetInnerHTML={ {__html: asn2} } />
                :
                props.assignment === 'Project 1 check in' ?
                    <div className="course-inner" dangerouslySetInnerHTML={ {__html: asn3} } />
                :
                props.assignment === 'Html and CSS practice' ?
                    <div className="course-inner" dangerouslySetInnerHTML={ {__html: asn4} } />
                :
                props.assignment === 'Javascript practice' ?
                    <div className="course-inner" dangerouslySetInnerHTML={ {__html: asn5} } />
                :
                props.assignment === 'Which smart object project 1' ?
                    <div className="course-inner" dangerouslySetInnerHTML={ {__html: asn6} } />
                :
                props.assignment === 'Project 1 implementation' ?
                    <div className="course-inner" dangerouslySetInnerHTML={ {__html: asn7} } />
                :
                    <div className="course-inner" dangerouslySetInnerHTML={ {__html: asn8} } />
            }
        </div>
        
    );

}

export default AssignmentInfo;