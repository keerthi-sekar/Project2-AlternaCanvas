import React from "react";
import 'react-circular-progressbar/dist/styles.css';
import { Bar, Doughnut } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import annaData from "../student-data/anna-chambers.json"
import keerthiData from "../student-data/keerthi-sekar.json"
import tomData from "../student-data/tom-meyers.json"

function Progress(props) {
    var hoursWorked = []
    if(props.class === "ui") {
        hoursWorked = props.student === "Anna" ? annaData.course[2].hoursWorked : props.student === "Keerthi" ? keerthiData.course[2].hoursWorked : tomData.course[2].hoursWorked;
    }
    else if(props.class === "computer_graphics") {
        hoursWorked = props.student === "Anna" ? annaData.course[0].hoursWorked : props.student === "Keerthi" ? keerthiData.course[0].hoursWorked : tomData.course[0].hoursWorked;
    }
    else {
        hoursWorked = props.student === "Anna" ? annaData.course[1].hoursWorked : props.student === "Keerthi" ? keerthiData.course[1].hoursWorked : tomData.course[1].hoursWorked;
    }

    const percentage = 25;
    const labels = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    const data = {
        labels: labels,
        datasets: [{
            label: 'My First Dataset',
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

    const chartData = [30, 20, 10, 40];
    const showData = chartData[0] + chartData[1] + chartData[2] + "%";
    const data1 = {
        labels: ["Assignment 1", "Project 1", "Quiz 1"],
        datasets: [
            {
            data: chartData,
            backgroundColor: ["green", "blue", "red", "gray"]
            }
        ],
        text: showData
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
             var text = showData,
               textX = Math.round((width - ctx.measureText(text).width) / 2),
               textY = height / 2;
             ctx.fillText(text, textX, textY);
        }
    }]
    return (
        <div className="course-inner">
            <button className="btn btn-primary" onClick={() => props.setComponent("Plan")}>+ Add Plan</button>
            <div className="course-progress-tracker">
                <Doughnut data={data1} options={options1} height={250} plugins={plugins}/>
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