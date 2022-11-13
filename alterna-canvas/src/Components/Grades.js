import React, {useState}  from "react";
import {FormControl, InputLabel, NativeSelect, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, styled } from '@mui/material';
import { tableCellClasses } from '@mui/material/TableCell';
import uiData from "./course-data/ui/metadata.json"
import graphData from "./course-data/computer_graphics/metadata.json"
import desData from "./course-data/senior_design/metadata.json"
import AssignmentInfo from "./Assignment_Info";

function Grades(props) {
    var assignments = [];
    function randomNumberInRange(min, max) {
        // 👇️ get number between min (inclusive) and max (inclusive)
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
    if(props.class == "ui") {
        var assignments = [];
        uiData.map(item => {
            if(item.folder == "assignment") {
                var obj = {
                    title: item.title,
                    due: item.end_or_due,
                    percent: randomNumberInRange(1,100)
                }
                assignments.push(obj);
            }
        })
    }
    else if(props.class == "computer_graphics") {
        var assignments = [];
        graphData.map(item => {
            if(item.folder == "assignment") {
                var obj = {
                    title: item.title,
                    due: item.end_or_due,
                    percent: randomNumberInRange(1,100)
                }
                assignments.push(obj);
            }
        })
    }
    else {
        desData.map(item => {
            if(item.folder == "assignment") {
                var obj = {
                    title: item.title,
                    due: item.end_or_due,
                    percent: randomNumberInRange(1,100)
                }
                assignments.push(obj);
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
            <h1>Grades</h1>
            <FormControl style={{"width": "150px"}}>
                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                    Sort By
                </InputLabel>
                <NativeSelect
                    defaultValue={10}
                    inputProps={{
                    name: 'sort by',
                    id: 'uncontrolled-native',
                    }}
                >
                    <option value={10}>Recent</option>
                    <option value={20}>High to Low</option>
                    <option value={30}>Low to High</option>
                </NativeSelect>
            </FormControl>
            <br/>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <StyledTableCell>Title</StyledTableCell>
                        <StyledTableCell>Weight</StyledTableCell>
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
                            <StyledTableCell >10</StyledTableCell >
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
                            <StyledTableCell >10</StyledTableCell >
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
                            <StyledTableCell >10</StyledTableCell >
                            <StyledTableCell >{row.percent + "%"}</StyledTableCell >
                        </RedStyledTableRow >
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
        
    );

}

export default Grades;