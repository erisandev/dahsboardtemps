import React, { useState, useEffect } from 'react';
import { Line, Bar } from 'react-chartjs-2';

const DashboardChart = () => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Sales',
        data: [],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
      {
        label: 'Revenue',
        data: [],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  });

  useEffect(() => {
    // Simulate data fetching from API or database
    const data = [
      { x: 'Jan', y: 100 },
      { x: 'Feb', y: 120 },
      { x: 'Mar', y: 110 },
      { x: 'Apr', y: 130 },
      { x: 'May', y: 140 },
    ];
    setChartData({
      labels: data.map((item) => item.x),
      datasets: [
        {
          label: 'Sales',
          data: data.map((item) => item.y),
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1,
        },
        {
          label: 'Revenue',
          data: data.map((item) => item.y * 2),
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1,
        },
      ],
    });
  }, []);

  return (
    <div>
      <h2>Dashboard Chart</h2>
      <Line
        data={chartData}
        options={{
          title: {
            display: true,
            text: 'Sales and Revenue',
          },
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
        }}
      />
    </div>
  );
};

export default DashboardChart;
