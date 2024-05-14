import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import faker from 'faker';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

function convertTimestampToDate(timestamp) {
    // Create a Date object from the timestamp
    const date = new Date(timestamp * 1000); // Assuming the timestamp is in seconds

    // Extract hours and minutes
    const hours = date.getHours();
    const minutes = date.getMinutes();

    // Format hours and minutes to always have two digits
    const formattedHours = hours.toString().padStart(2, '0');
    const formattedMinutes = minutes.toString().padStart(2, '0');

    // Return the formatted time
    return `${formattedHours}:${formattedMinutes}`;
}



export default function CPUChart({ entryData }) {
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Chart.js Line Chart',
            },
        },
    };

    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    console.log(entryData.map(el => { return el["usr"] }))
    const data = {
        labels: entryData.map(el => { return convertTimestampToDate(el["timestamp"]) }),
        datasets: [
            {
                label: 'usr',
                data: entryData.map(el => { return el["usr"] }),
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            }
        ],
    };
    return <Line options={options} data={data} />;
}
