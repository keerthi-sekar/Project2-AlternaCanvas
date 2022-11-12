import React from "react";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Bar, Doughnut } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

function Progress() {
    const percentage = 25;
    const labels = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    const data = {
        labels: labels,
        datasets: [{
            label: 'My First Dataset',
            data: [1, 2, 0, 0, 5, 6, 3],
            backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 99, 132)',
            'rgb(255, 99, 132)',
            'rgb(255, 99, 132)',
            'rgb(255, 99, 132)',
            'rgb(255, 99, 132)',
            'rgb(255, 99, 132)'
            ],
            borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 99, 132)',
            'rgb(255, 99, 132)',
            'rgb(255, 99, 132)',
            'rgb(255, 99, 132)',
            'rgb(255, 99, 132)',
            'rgb(255, 99, 132)'
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
        <div className="progress-inner">
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