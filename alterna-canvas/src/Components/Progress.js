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
    return (
        <div className="progress-inner">
            <div className="course-progress-tracker">
                <CircularProgressbar value={percentage} text={`${percentage}%`}/>
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