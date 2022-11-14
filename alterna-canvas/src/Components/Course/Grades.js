import React, {useEffect, useState}  from "react";
import {FormControl, InputLabel, NativeSelect, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, styled } from '@mui/material';
import { tableCellClasses } from '@mui/material/TableCell';
import uiData from "../course-data/ui/metadata.json"
import graphData from "../course-data/computer_graphics/metadata.json"
import desData from "../course-data/senior_design/metadata.json"
import OverallGrade from "./OverallGrade";
import annaData from "../student-data/anna-chambers.json"
import keerthiData from "../student-data/keerthi-sekar.json"
import tomData from "../student-data/tom-meyers.json"

function Grades(props) {
    var assignments = [];
    var grades = [];
    var studentName = props.student === "Anna" ? annaData["student-name"] : props.student === "Keerthi" ? keerthiData["student-name"] : tomData["student-name"];

    if(props.class === "ui") {
        grades = props.student === "Anna" ? annaData.course[2].assignments : props.student === "Keerthi" ? keerthiData.course[2].assignments : tomData.course[2].assignments;
        var index = 0;
        uiData.map(item => {
            if(item.folder === "assignment") {
                var obj = {
                    title: item.title,
                    due: item.end_or_due,
                    points: item.points,
                    percent: grades[index].finalgrade,
                    incomplete: grades[index].status == "incomplete"
                }
                assignments.push(obj);
                index++;
            }
        })
    }
    else if(props.class === "computer_graphics") {
        grades = props.student === "Anna" ? annaData.course[0].assignments : props.student === "Keerthi" ? keerthiData.course[0].assignments : tomData.course[0].assignments;
        var index = 0;
        graphData.map(item => {
            if(item.folder === "assignment") {
                var obj = {
                    title: item.title,
                    due: item.end_or_due,
                    points: item.points,
                    percent: grades[index].finalgrade,
                    incomplete: grades[index].status == "incomplete"
                }
                assignments.push(obj);
                index++;
            }
        })
    }
    else {
        grades = props.student === "Anna" ? annaData.course[1].assignments : props.student === "Keerthi" ? keerthiData.course[1].assignments : tomData.course[1].assignments;
        var index = 0;
        desData.map(item => {
            if(item.folder === "assignment") {
                var obj = {
                    title: item.title,
                    due: item.end_or_due,
                    points: item.points,
                    percent: grades[index].finalgrade,
                    incomplete: grades[index].status === "incomplete"
                }
                assignments.push(obj);
                index++;
            }
        })
    }

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
          backgroundColor: "lightgray",
          color: "black",
        },
        [`&.${tableCellClasses.body}`]: {
          fontSize: 16,
        },
      }));
      
      const RedStyledTableRow = styled(TableRow)(({ theme }) => ({
        backgroundColor: "#FFCCCB",
        '&:last-child td, &:last-child th': {
          border: 0,
        },
      }));

      const GreenStyledTableRow = styled(TableRow)(({ theme }) => ({
        backgroundColor: "#90EE90",
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    }));

    const YellowStyledTableRow = styled(TableRow)(({ theme }) => ({
        backgroundColor: "#ffffe0",
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    }));

    return(
        <div className="course-inner" style={{display: "flex", flexDirection: "column"}}>
            <h1>Grades for {studentName}</h1>
            <OverallGrade student={props.student} class={props.title}/>

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <StyledTableCell>Title</StyledTableCell>
                        <StyledTableCell>Points</StyledTableCell>
                        <StyledTableCell>Grade</StyledTableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {assignments.map((row) => (
                        row.percent >= 80 ?
                        <GreenStyledTableRow 
                            key={row.title}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <StyledTableCell  component="th" scope="row">
                                {row.title}
                            </StyledTableCell >
                            <StyledTableCell >{row.points}</StyledTableCell >
                            <StyledTableCell >{row.percent + "%"}</StyledTableCell >
                        </GreenStyledTableRow >
                        :
                        row.percent >= 60 ?
                        <YellowStyledTableRow 
                            key={row.title}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <StyledTableCell  component="th" scope="row">
                                {row.title}
                            </StyledTableCell >
                            <StyledTableCell >{row.points}</StyledTableCell >
                            <StyledTableCell >{row.percent + "%"}</StyledTableCell >
                        </YellowStyledTableRow >
                        :
                        <RedStyledTableRow 
                            key={row.title}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <StyledTableCell  component="th" scope="row">
                                {row.title}
                            </StyledTableCell >
                            <StyledTableCell >{row.points}</StyledTableCell >
                            <StyledTableCell >{row.incomplete ? "Incomplete" : row.percent + "%"}</StyledTableCell >
                        </RedStyledTableRow >
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
        
    );

}

export default Grades;