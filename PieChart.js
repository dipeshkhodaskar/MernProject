import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { getPieChart } from '../services/api';
import { Chart as ChartJS } from 'chart.js/auto';

const PieChart = ({ month }) => {
  const [chartData, setChartData] = useState({ labels: [], datasets: [] });

  useEffect(() => {
    const fetchPieChartData = async () => {
      try {
        const response = await getPieChart(month);
        const data = response.data;

        const labels = data.map(item => item._id);
        const counts = data.map(item => item.count);

        setChartData({
          labels: labels,
          datasets: [
            {
              label: 'Number of Items',
              data: counts,
              backgroundColor: [
                '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0',
                '#9966FF', '#FF9F40', '#FFD700', '#32CD32',
                '#8A2BE2', '#FF4500'
              ],
              hoverOffset: 4,
            },
          ],
        });
      } catch (error) {
        console.error('Error fetching pie chart data:', error);
      }
    };
    fetchPieChartData();
  }, [month]);

  return (
    <div className="pie-chart">
      <h2>Category Distribution</h2>
      <Pie
        data={chartData}
        options={{
          responsive: true,
          plugins: {
            legend: {
              position: 'right',
            },
          },
        }}
      />
    </div>
  );
};

export default PieChart;