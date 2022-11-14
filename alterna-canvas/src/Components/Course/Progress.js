import React, {useState, useEffect} from "react";
import 'react-circular-progressbar/dist/styles.css';
import { Bar, Doughnut } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import annaData from "../student-data/anna-chambers.json"
import keerthiData from "../student-data/keerthi-sekar.json"
import tomData from "../student-data/tom-meyers.json"

function Progress(props) {
    var percent = props.percent;
    var hoursWorked = [];
    var progressLabels = [];
    var progressColors = [];
    var progressData = [];
    if(props.class === "ui") {
        hoursWorked = props.student === "Anna" ? annaData.course[2].hoursWorked : props.student === "Keerthi" ? keerthiData.course[2].hoursWorked : tomData.course[2].hoursWorked;
        progressLabels = props.student === "Tom" ? [ "Project 1 implementation", "Project 1 documentation"] : ["Which smart object project 1", "Project 1 implementation", "Project 1 documentation"];
        progressColors = props.student === "Tom" ? [ "green", "#1976d2", "gray"] : ["green", "#1976d2", "red", "gray"];
        progressData = props.student === "Tom" ? [ 20, 50, 30] : props.student === "Anna" ? [10, 30, 20, 40] : [10, 50, 20, 20];
        percent = 100 -  progressData[progressData.length - 1];
    }
    else if(props.class === "computer_graphics") {
        hoursWorked = props.student === "Anna" ? annaData.course[0].hoursWorked : props.student === "Keerthi" ? keerthiData.course[0].hoursWorked : tomData.course[0].hoursWorked;
        progressLabels = props.student === "Tom" ? ["Light and shadow"] : props.student === "Anna" ? ["Texture mapping exercises", "Color", "Light and shadow"] : ["Color", "Light and shadow"];
        progressColors = props.student === "Tom" ? ["green", "gray"] : props.student === "Anna" ? ["green", "#1976d2", "red", "gray"] : ["green", "#1976d2", "gray"];
        progressData = props.student === "Tom" ? [60, 40] : props.student === "Anna" ? [20, 20, 40, 20] : [10, 10, 80];
        percent = 100 -  progressData[progressData.length - 1];
    }
    else {
        hoursWorked = props.student === "Anna" ? annaData.course[1].hoursWorked : props.student === "Keerthi" ? keerthiData.course[1].hoursWorked : tomData.course[1].hoursWorked;
        progressLabels = props.student === "Tom" ? ["Timeline", "Project status update 1", "Project status update 2"] : props.student === "Anna" ? ["Project status update 1", "Project status update 2"] : ["Project status update 2"];
        progressColors = props.student === "Tom" ? ["green", "#1976d2", "red", "gray"] : props.student === "Anna" ? ["green", "#1976d2", "gray"] : ["green", "gray"];
        progressData = props.student === "Tom" ? [50, 10, 15, 25] : props.student === "Anna" ? [25, 25, 50] : [65, 35];
        percent = 100 -  progressData[progressData.length - 1];
    }

    const labels = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    const data = {
        labels: labels,
        datasets: [{
            label: 'Hours Worked',
            data: hoursWorked,
            backgroundColor: [
            '#1976d2',
            '#1976d2',
            '#1976d2',
            '#1976d2',
            '#1976d2',
            '#1976d2',
            '#1976d2'
            ],
            borderColor: [
            '#1976d2',
            '#1976d2',
            '#1976d2',
            '#1976d2',
            '#1976d2',
            '#1976d2',
            '#1976d2'
            ],
            borderWidth: 1
        }]
    };

    const chartData = progressData;
    const showData = props.percent + "%";

    const data1 = {
        labels: progressLabels,
        datasets: [
            {
            data: chartData,
            backgroundColor: progressColors
            }
        ],
    };
    const options1 = {
        responsive: true,
        plugins: {
            legend: {
                display:true,
                position: 'right',
            }
        },
        cutout: '70%',
        responsive: true,
        maintainAspectRatio: false,
    };
    const plugins = [{
        beforeDraw: function(chart) {
             var width = chart.width - 130,
               height = chart.height,
               ctx = chart.ctx;
             var fontSize = (height / 114).toFixed(2);
             ctx.font = fontSize + "em sans-serif";
             ctx.fillStyle = "#6D7278";
             ctx.textBaseline = "middle";
             var text = props.percent,
               textX = Math.round((width - ctx.measureText(text).width) / 2),
               textY = height / 2;
             ctx.fillText(text, textX, textY);
        }
    }]
    return (
        <div className="course-inner">
            <button className="btn btn-primary" onClick={() => props.setComponent("Plan")}>+ Add Plan</button>
            <div className="course-progress-tracker">
                <h4 style={{color: "#1976d2"}}>Percent Completed: {percent}%</h4>
                <Doughnut data={data1} options={options1} height={250}/>
            </div>
            <div className="hours-worked-graph">
                <Bar
                    data={data}
                    options={{
                        plugins: {
                            title: {
                                display: true,
                                text: "Total Hours of Work This Week"
                            },
                            legend: {
                                display: false,
                                position: "bottom"
                            }   
                        }
                    }}
                />
            </div>
        </div>
    );
}

export default Progress;