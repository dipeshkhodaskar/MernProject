import React, { useState, useEffect } from 'react';
import { getTransactions } from '../services/api';

const TransactionsTable = ({ month, search }) => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTransactions(month, search);
      setTransactions(data);
    };
    fetchData();
  }, [month, search]);

  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction) => (
          <tr key={transaction.id}>
            <td>{transaction.title}</td>
            <td>{transaction.description}</td>
            <td>{transaction.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionsTable;