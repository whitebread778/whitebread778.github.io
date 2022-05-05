import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import React from 'react';
import onBarHoverLineAnnotation from "./onBarHoverLineAnnotation";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    onBarHoverLineAnnotation
);

const BarChart = () => {

    const data = {
        labels: ["-180", "-60", "-15", "-5", "As is", "+5", "+15", "+60", "+180"],
        datasets: [
            {
                labels: "return",
                data: [5,5,-5,-5,-5,5,5,-5,-5],
                backgroundColor: function(context){
                    const index = context.dataIndex;
                    const value = context.dataset.data[index];
                    return value < 0 ? 'red' :  // draw negative values in red
                        index % 2 ? 'green' :   // else, alternate values in green
                        'green';
                },
                borderRadius: 5,
            }
        ],
    }


    return (
        <div id="BarChart-wrapper">
            <Bar 
                data={data}
                height={500}
                width={500}
                options={{
                    scales: {
                        y: {
                            suggestedMin: -8,
                            suggestedMax: 12,
                        },
                        x: {
                            grid: {
                                offset: false
                            },
                            title: {
                                display: true,
                                text: "mins",
                                align: "start",
                                padding: {
                                    top: -20,
                                },
                                font: {
                                    size: 14
                                }
                            }
                        }
                    },
                    plugins: {
                        legend: {
                            display: false
                        }
                    }
                }}
            />
        </div>
    )
}

export default BarChart;