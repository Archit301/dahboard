import React, { useState } from 'react';
import Chart from 'react-apexcharts';

const Dashboard = () => {
  const [chartData, setChartData] = useState({
    // Initial data for charts
    series: [
      { name: 'Sales', data: [30, 40, 45, 50, 49, 60, 70, 91, 125] },
      { name: 'Expenses', data: [20, 25, 30, 35, 40, 45, 50, 55, 60] },
    ],
    options: {
      chart: { type: 'line' },
      xaxis: { categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'] },
    },
  });

  const [formData, setFormData] = useState({ title: '', value: '' });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newChartData = {
      ...chartData,
      series: [
        ...chartData.series,
        { name: formData.title, data: [Number(formData.value)] },
      ],
    };
    setChartData(newChartData);
    setFormData({ title: '', value: '' });
  };

  return (
    <div className="dashboard">
      <div className="charts">
        <div className="chart-container">
          <Chart options={chartData.options} series={chartData.series} type="line" height={350} />
        </div>
      </div>
      <div className="add-data">
        <h2>Add New Data Point</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Title:</label>
            <input type="text" name="title" value={formData.title} onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label>Value:</label>
            <input type="number" name="value" value={formData.value} onChange={handleInputChange} />
          </div>
          <button type="submit">Add Data</button>
        </form>
      </div>
    </div>
  );
}
export default Dashboard
