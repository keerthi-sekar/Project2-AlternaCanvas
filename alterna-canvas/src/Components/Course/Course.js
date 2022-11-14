import React, {useState, useEffect}  from "react";
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';
import Progress from "./Progress";
import Assignments from "./Assignments";
import TodoList from "./TodoList";
import Grades from "./Grades";
import Annoucements from "./Annoucements";
import Info from "./Info";
import Plan from "./Plan";
import Links from "./Links"
import uiSyllabusHTML from "../course-data/ui/course_info/syllabus.html";
import graphSyllabusHTML from "../course-data/computer_graphics/course_info/syllabus.html";
import desSyllabusHTML from "../course-data/senior_design/course_info/syllabus.html";

function Course(props) {
    const [component, setComponent] = useState('Progress')
    const [courseNum, setCourseNum] = useState(props.title === "User Interface" ? "5067" : props.title === "Computer Graphics" ? "5124" : props.title === "Senior Design" ? "5001" : " ")
    
    useEffect(() => {
        setCourseNum(props.title === "User Interface" ? "5067" : props.title === "Computer Graphics" ? "5124" : props.title === "Senior Design" ? "5001" : " ");
    },[courseNum, props.title])

  return (
    <div className="main-content">
      <header className="course-header">CS {courseNum}: {props.title}  <button className="btn btn-primary" onClick={() => props.setShowCourse(false)}>Go Back</button></header>
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
                        <TreeItem nodeId="5" label="Plan" onClick={() => setComponent("Plan")}/>
                    </TreeItem>
                    <TreeItem nodeId="6" label="Information">
                        <TreeItem nodeId="7" label="Overview" onClick={() => setComponent("Info")}/>
                        <TreeItem nodeId="8" label="Annoucements" onClick={() => setComponent("Annoucements")}/>
                        <TreeItem nodeId="9" label="Syllabus" onClick={() => setComponent("Syllabus")}/>
                    </TreeItem>
                    <TreeItem nodeId="10" label="Meet">
                        <TreeItem nodeId="11" label="Zoom" onClick={() => setComponent("Zoom")}/>
                        <TreeItem nodeId="12" label="Teams" onClick={() => setComponent("Teams")}/>
                        <TreeItem nodeId="13" label="Discussion" onClick={() => setComponent("Discussion")}/>
                    </TreeItem>
                </TreeView>
            </div>
            {
                component === 'Progress' ?
                <Progress setComponent={setComponent}/>
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
                <Assignments class={props.class}/>
                :
                component === 'Grades' ?
                <Grades class={props.class} student={props.student} title={props.title}/>
                :
                component === 'Annoucements' ?
                <Annoucements />
                :
                component === 'Info' ?
                <div className="course-inner"><Info class={props.title}/></div>
                :
                component === 'Plan' ?
                <Plan/>
                :
                component === 'Zoom' ?
                <Links link={"https://zoom.us/"} name={"Zoom"}/>
                :
                component === 'Teams' ?
                <Links link={"https://www.microsoft.com/en-us/microsoft-teams/group-chat-software"} name={"Teams"}/>
                :
                <Progress setComponent={setComponent}/>
            }
        </div>
        <div className="active-assignments">
            <TodoList/>
        </div>
        </div>
    </div>
  );
}

export default Course;
