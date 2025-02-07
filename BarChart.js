import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { getBarChart } from '../services/api';
import { Chart as ChartJS } from 'chart.js/auto';

const BarChart = ({ month }) => {
  const [chartData, setChartData] = useState({ labels: [], datasets: [] });

  useEffect(() => {
    const fetchBarChartData = async () => {
      try {
        const response = await getBarChart(month);
        const data = response.data;

        const labels = data.map(item => item.range);
        const counts = data.map(item => item.count);

        setChartData({
          labels: labels,
          datasets: [
            {
              label: 'Number of Items',
              data: counts,
              backgroundColor: 'rgba(75, 192, 192, 0.6)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
            },
          ],
        });
      } catch (error) {
        console.error('Error fetching bar chart data:', error);
      }
    };
    fetchBarChartData();
  }, [month]);

  return (
    <div className="bar-chart">
      <h2>Price Range Distribution</h2>
      <Bar
        data={chartData}
        options={{
          responsive: true,
          scales: {
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: 'Number of Items',
              },
            },
            x: {
              title: {
                display: true,
                text: 'Price Range',
              },
            },
          },
        }}
      />
    </div>
  );
};

export default BarChart;