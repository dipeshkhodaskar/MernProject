import React, { useEffect, useState } from 'react';
import { getStatistics } from '../services/api';

const Statistics = ({ month }) => {
  const [stats, setStats] = useState({ totalSale: 0, soldItems: 0, notSoldItems: 0 });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await getStatistics(month);
        setStats(response.data);
      } catch (error) {
        console.error('Error fetching statistics:', error);
      }
    };
    fetchStats();
  }, [month]);

  return (
    <div className="statistics">
      <h2>Statistics for Selected Month</h2>
      <div className="stats-card">
        <p>Total Sale Amount: ${stats.totalSale.toFixed(2)}</p>
        <p>Total Sold Items: {stats.soldItems}</p>
        <p>Total Not Sold Items: {stats.notSoldItems}</p>
      </div>
    </div>
  );
};

export default Statistics;