import React, { useState } from 'react'
import { Bar } from 'react-chartjs-2'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register necessary components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const initialData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Sales',
      data: [12, 19, 3, 5, 2, 3, 7],
      backgroundColor: 'rgba(75,192,192,0.4)',
    },
  ],
};

const Chart = () => {
  const [chartData, setChartData] = useState(initialData);

  const updateData = () => {
    const newData = chartData.datasets[0].data.map(d => d + 5);
    setChartData({
      ...chartData,
      datasets: [{ ...chartData.datasets[0], data: newData }],
    });
  };

  return (
    <div className="p-4 bg-white rounded shadow">
      <button onClick={updateData}>Update Data</button>
      <Bar data={chartData} />
    </div>
  );
};

export default Chart
