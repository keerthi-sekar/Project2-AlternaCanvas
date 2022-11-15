import React, {Component}  from "react";
import asn1 from "../course-data/ui/assignments/assignment_01.html";
import asn2 from "../course-data/ui/assignments/assignment_02.html";
import asn3 from "../course-data/ui/assignments/assignment_03.html";
import asn4 from "../course-data/ui/assignments/assignment_04.html";
import asn5 from "../course-data/ui/assignments/assignment_05.html";
import asn6 from "../course-data/ui/assignments/06.html";
import asn7 from "../course-data/ui/assignments/07.html";
import asn8 from "../course-data/ui/assignments/08.html";

import desAsn1 from "../course-data/senior_design/assignments/assignment_01.html";
import desAsn2 from "../course-data/senior_design/assignments/assignment_02.html";
import desAsn3 from "../course-data/senior_design/assignments/assignment_03.html";
import desAsn4 from "../course-data/senior_design/assignments/assignment_04.html";
import desAsn5 from "../course-data/senior_design/assignments/assignment_05.html";

import graphAsn1 from "../course-data/computer_graphics/assignments/assignment_01.html";
import graphAsn2 from "../course-data/computer_graphics/assignments/assignment_02.html";
import graphAsn3 from "../course-data/computer_graphics/assignments/assignment_03.html";
import graphAsn4 from "../course-data/computer_graphics/assignments/assignment_04.html";
import graphAsn5 from "../course-data/computer_graphics/assignments/assignment_05.html";
import graphAsn6 from "../course-data/computer_graphics/assignments/assignment_06.html";
import graphAsn7 from "../course-data/computer_graphics/assignments/assignment_07.html";
import graphAsn8 from "../course-data/computer_graphics/assignments/assignment_08.html";

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
                props.assignment === 'Project 1 documentation' ?
                    <div className="course-inner" dangerouslySetInnerHTML={ {__html: asn8} } />
                :
                props.assignment === 'First assignment' ?
                <div className="course-inner" dangerouslySetInnerHTML={ {__html: desAsn1} } />
                :
                props.assignment === 'User profiles' ?
                <div className="course-inner" dangerouslySetInnerHTML={ {__html: desAsn2} } />
                :
                props.assignment === 'Tasks' ?
                <div className="course-inner" dangerouslySetInnerHTML={ {__html: desAsn3} } />
                :
                props.assignment === 'Timeline' ?
                <div className="course-inner" dangerouslySetInnerHTML={ {__html: desAsn4} } />
                :
                props.assignment === 'Project status update' ?
                <div className="course-inner" dangerouslySetInnerHTML={ {__html: desAsn5} } />
                :
                props.assignment === 'first assignment' ?
                <div className="course-inner" dangerouslySetInnerHTML={ {__html: graphAsn1} } />
                :
                props.assignment === 'Linear algebra review' ?
                <div className="course-inner" dangerouslySetInnerHTML={ {__html: graphAsn2} } />
                :
                props.assignment === 'Rasterization exercise' ?
                <div className="course-inner" dangerouslySetInnerHTML={ {__html: graphAsn3} } />
                :
                props.assignment === 'Transformations exercise' ?
                <div className="course-inner" dangerouslySetInnerHTML={ {__html: graphAsn4} } />
                :
                props.assignment === 'Projection exercises' ?
                <div className="course-inner" dangerouslySetInnerHTML={ {__html: graphAsn5} } />
                :
                props.assignment === 'Texture mapping exercises' ?
                <div className="course-inner" dangerouslySetInnerHTML={ {__html: graphAsn6} } />
                :
                props.assignment === 'Color' ?
                <div className="course-inner" dangerouslySetInnerHTML={ {__html: graphAsn7} } />
                :
                <div className="course-inner" dangerouslySetInnerHTML={ {__html: graphAsn8} } />
            }
        </div>
        
    );

}

export default AssignmentInfo;