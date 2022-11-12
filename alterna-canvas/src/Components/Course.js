import React, {useState}  from "react";
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { withStyles } from "@material-ui/core/styles";
import Progress from "./Progress";
import Home from './Home';
import Assignments from "./Assignments";
import uiSyllabusHTML from "./course-data/ui/course_info/syllabus.html";
import graphSyllabusHTML from "./course-data/computer_graphics/course_info/syllabus.html";
import desSyllabusHTML from "./course-data/senior_design/course_info/syllabus.html";

function Course(props) {
    const [component, setComponent] = useState('test')
    
  return (
    <div className="main-content">
      <header className="course-header">{props.title}</header>
      <div className="course-body">
        <div className="course-body-inner">
            <div className="course-tree">
                <TreeView
                    aria-label="multi-select"
                    defaultCollapseIcon={<ExpandMoreIcon />}
                    defaultExpandIcon={<ChevronRightIcon />}
                    multiSelect
                    sx={{ height: "100%", flexGrow: 1, maxWidth: 400, overflow: 'hidden' }}
                    >
                    <TreeItem nodeId="1" label="Progress">
                        <TreeItem nodeId="2" label="Overview" onClick={() => setComponent("Progress")}/>
                        <TreeItem nodeId="3" label="Grades" onClick={() => setComponent("Grades")}/>
                        <TreeItem nodeId="4" label="Assignments" onClick={() => setComponent("Assignments")}/>
                    </TreeItem>
                    <TreeItem nodeId="5" label="Info">
                        <TreeItem nodeId="6" label="Annoucements" onClick={() => setComponent("Annoucements")}/>
                        <TreeItem nodeId="7" label="Syllabus" onClick={() => setComponent("Syllabus")}/>
                        <TreeItem nodeId="8" label="People" onClick={() => setComponent("People")}/>
                    </TreeItem>
                    <TreeItem nodeId="9" label="Meet">
                        <TreeItem nodeId="10" label="Zoom"/>
                        <TreeItem nodeId="11" label="Teams"/>
                        <TreeItem nodeId="12" label="Discussion" />
                    </TreeItem>
                </TreeView>
            </div>
            {
                component === 'Progress' ?
                <Progress />
                :
                component === 'Syllabus' ?
                    props.class === 'ui' ?
                        <div className="course-inner" dangerouslySetInnerHTML={ {__html: uiSyllabusHTML} } />
                    :
                    props.class === 'computer_graphics' ?
                        <div className="course-inner" dangerouslySetInnerHTML={ {__html: graphSyllabusHTML} } />
                    :
                        <div className="course-inner" dangerouslySetInnerHTML={ {__html: desSyllabusHTML} } />
                :
                component === 'Assignments' ?
                <Assignments class="ui"/>
                :
                <Progress/>
            }
        </div>
        <div className="active-assignments">
            <h1 style={{textAlign: "center"}}>Active Assignments</h1>
            <FormGroup>
                <FormControlLabel control={<Checkbox defaultChecked />} label="Assignment 1" />
                <FormControlLabel control={<Checkbox />} label="Project 1" />
                <FormControlLabel control={<Checkbox />} label="Quiz 1" />
            </FormGroup>
        </div>
        </div>
    </div>
  );
}

export default Course;
