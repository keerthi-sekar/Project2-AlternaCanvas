import React, {useState}  from "react";
import {ListItem, List, ListItemText, Typography, Divider} from '@mui/material';
import uiData from "../course-data/ui/metadata.json"
import graphData from "../course-data/computer_graphics/metadata.json"
import desData from "../course-data/senior_design/metadata.json"
import AssignmentInfo from "./Assignment_Info";

function Assignments(props) {
    const [assignmentTitle, setTitle] = useState("Assignments")
    var assignments = [];
    if(props.class === "ui") {
        var assignments = [];
        uiData.map(item => {
            if(item.folder === "assignment") {
                var obj = {
                    title: item.title,
                    due: item.end_or_due
                }
                assignments.push(obj);
            }
        })
    }
    else if(props.class === "computer_graphics") {
        var assignments = [];
        graphData.map(item => {
            if(item.folder === "assignment") {
                var obj = {
                    title: item.title,
                    due: item.end_or_due
                }
                assignments.push(obj);
            }
        })
    }
    else {
        desData.map(item => {
            if(item.folder === "assignment") {
                var obj = {
                    title: item.title,
                    due: item.end_or_due
                }
                assignments.push(obj);
            }
        })
    }

    return(
        <div className="course-body" style={{display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "center", marginTop: "5px"}}>
            <h1>{assignmentTitle}</h1>
            {
                assignmentTitle === 'Assignments' ?
                <div style={{display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "center"}}>
                <h5> Click the title for more information. </h5>
                <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                {assignments.map((value, index) => (
                    <React.Fragment>
                    <ListItem
                        key={index}
                        onClick={() => setTitle(value.title)}
                        sx={{minWidth: '1100px'}}
                    >
                    <ListItemText
                        primary={                      
                        <Typography
                            fontWeight="bold"
                            fontSize="large"
                        >
                            {value.title}
                        </Typography>}
                        secondary={
                            <React.Fragment>
                            <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                Due: 
                            </Typography>
                            {value.due}
                            </React.Fragment>
                        }
                    />
                    </ListItem>
                    <Divider component="li"/>
                    </React.Fragment>
                ))}
                </List>
                </div>
                :
                assignmentTitle === 'Submission' ?
                <div style={{display: "flex", flexDirection: "column"}}>
                    <button className="btn btn-primary" style={{marginLeft: "5px", width: "100px"}} onClick={() => setTitle("Assignments")}>Go Back</button>
                    <br/>
                    <button className="btn btn-primary" style={{marginLeft: "5px"}} onClick={() => alert("Uploading!")}>Upload File</button>
                    <br/>
                    <textarea
                        rows='10'
                        cols='90'
                        placeholder='Text Entry Submission...'
                        style={{marginLeft: "5px"}}
                    ></textarea>
                    <br/>
                    <button className="btn btn-primary" style={{marginLeft: "800px", width: "80px"}} onClick={() => alert("Submitting!")}>Submit</button>
                </div>
                    
                :
                <div>
                <button className="btn btn-primary" style={{marginLeft: "5px"}} onClick={() => setTitle("Assignments")}>Go Back</button>
                <button className="btn btn-primary" style={{marginLeft: "5px"}} onClick={() => setTitle("Submission")}>Submit</button>
                    <AssignmentInfo assignment={assignmentTitle}/>
                </div>
            }

        </div>
        
    );

}

export default Assignments;