import React from "react";
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Progress from "./Progress";

function Course() {
  return (
    <div className="main-content">
      <header className="course-header">User Interface I</header>
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
                        <TreeItem nodeId="2" label="Grades" />
                        <TreeItem nodeId="3" label="Assignments" />
                    </TreeItem>
                    <TreeItem nodeId="5" label="Info">
                        <TreeItem nodeId="6" label="Annoucements" />
                        <TreeItem nodeId="7" label="Sylabus" />
                        <TreeItem nodeId="8" label="People" />
                    </TreeItem>
                    <TreeItem nodeId="9" label="Meet">
                        <TreeItem nodeId="10" label="Zoom"/>
                        <TreeItem nodeId="11" label="Teams"/>
                        <TreeItem nodeId="12" label="Discussion" />
                    </TreeItem>
                </TreeView>
            </div>
            <Progress/>
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
