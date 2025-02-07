// import React, { useState } from 'react';
// import TransactionsTable from './components/TransactionsTable';
// import Statistics from './components/Statistics';
// import BarChart from './components/BarChart';
// import PieChart from './components/PieChart';

// const App = () => {
//   const [month, setMonth] = useState('3'); // Default: March
//   const [search, setSearch] = useState('');

//   return (
//     <div>
//       <h1>Transactions Dashboard</h1>
//       <select value={month} onChange={(e) => setMonth(e.target.value)}>
//         <option value="1">January</option>
//         <option value="2">February</option>
//         <option value="3">March</option>
//         <option value="4">April</option>
//         {/* Add other months */}
//       </select>
//       <input
//         type="text"
//         placeholder="Search transactions"
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//       />
//       <TransactionsTable month={month} search={search} />
//       <Statistics month={month} />
//       <BarChart month={month} />
//       <PieChart month={month} />
//     </div>
//   );
// };

// export default App;



// ////////////////////////////////////////

// // import React, { useEffect, useState } from "react";
// // import axios from "axios";
// // import { Bar, Pie } from "react-chartjs-2";
// // import "chart.js/auto";

// // const App = () => {
// //   const [transactions, setTransactions] = useState([]);
// //   const [month, setMonth] = useState("March");
// //   const [search, setSearch] = useState("");
// //   const [page, setPage] = useState(1);
// //   const [statistics, setStatistics] = useState(null);
// //   const [barChartData, setBarChartData] = useState(null);
// //   const [pieChartData, setPieChartData] = useState(null);

// //   const fetchData = async () => {
// //     try {
// //       const response = await axios.get(
// //         "https://s3.amazonaws.com/roxiler.com/product_transaction.json"
// //       );
// //       setTransactions(response.data || []);
// //     } catch (error) {
// //       console.error("Error fetching transactions", error);
// //     }
// //   };

// //   useEffect(() => {
// //     fetchData();
// //   }, []);

// //   const handleSearch = () => {
// //     setPage(1); // Reset to first page when searching
// //   };

// //   return (
// //     <div>
// //       <h2>Transaction Data Dashboard</h2>
      
// //       <label> Select Month: </label>
// //       <select value={month} onChange={(e) => setMonth(e.target.value)}>
// //         {[
// //           "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
// //         ].map((m) => (
// //           <option key={m} value={m}>{m}</option>
// //         ))}
// //       </select>
      
// //       <input
// //         type="text"
// //         placeholder="Search transactions"
// //         value={search}
// //         onChange={(e) => setSearch(e.target.value)}
// //       />
// //       <button onClick={handleSearch}>Search</button>
      
// //       <table border="1">
// //         <thead>
// //           <tr>
// //             <th>ID</th>
// //             <th>Title</th>
// //             <th>Price</th>
// //             <th>Category</th>
// //             <th>Image</th>
// //             <th>Sold</th>
// //             <th>Date of Sale</th>
// //           </tr>
// //         </thead>
// //         <tbody>
// //           {transactions
// //             .filter((item) => item.dateOfSale && item.dateOfSale.includes(month))
// //             .filter(
// //               (item) =>
// //                 item.title.toLowerCase().includes(search.toLowerCase()) ||
// //                 (item.description && item.description.toLowerCase().includes(search.toLowerCase())) ||
// //                 item.price.toString().includes(search)
// //             )
// //             .slice((page - 1) * 10, page * 10)
// //             .map((item) => (
// //               <tr key={item.id}>
// //                 <td>{item.id}</td>
// //                 <td>{item.title}</td>
// //                 <td>{item.price}</td>
// //                 <td>{item.category}</td>
// //                 <td><img src={item.image} alt={item.title} width="50" /></td>
// //                 <td>{item.sold ? "Yes" : "No"}</td>
// //                 <td>{item.dateOfSale}</td>
// //               </tr>
// //             ))}
// //         </tbody>
// //       </table>
      
// //       <button onClick={() => setPage(page - 1)} disabled={page === 1}>Previous</button>
// //       <button onClick={() => setPage(page + 1)}>Next</button>

// //       {statistics && (
// //         <div>
// //           <h3>Statistics</h3>
// //           <p>Total Sales: {statistics.totalSales}</p>
// //           <p>Sold Items: {statistics.soldItems}</p>
// //           <p>Unsold Items: {statistics.unsoldItems}</p>
// //         </div>
// //       )}

// //       {barChartData && (
// //         <div>
// //           <h3>Price Range Distribution</h3>
// //           <Bar data={barChartData} />
// //         </div>
// //       )}

// //       {pieChartData && (
// //         <div>
// //           <h3>Category Distribution</h3>
// //           <Pie data={pieChartData} />
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default App;





////////////////////////////////////////////////////////////////////////////////////////
// import React, { useEffect, useState } from "react";

// function App() {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetch("https://api.allorigins.win/raw?url=https://s3.amazonaws.com/roxiler.com/product_transaction.json")
//       .then((res) => {
//         if (!res.ok) {
//           throw new Error(`HTTP Error! Status: ${res.status}`);
//         }
//         return res.text(); // Get raw response as text
//       })
//       .then((text) => {
//         console.log("Raw Response:", text); // Debugging: check if full data is received
//         try {
//           const jsonData = JSON.parse(text); // Try parsing JSON
//           setProducts(jsonData);
//         } catch (jsonError) {
//           console.error("JSON Parse Error:", jsonError);
//           setError("Failed to parse JSON data.");
//         }
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error("Fetch Error:", err);
//         setError("Failed to fetch data (CORS issue or API down)");
//         setLoading(false);
//       });
//   }, []);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p style={{ color: "red" }}>{error}</p>;

//   return (
//     <div>
//       <h2>Product Transactions</h2>
//       <table border="1">
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Title</th>
//             <th>Description</th>
//             <th>Price</th>
//             <th>Date of Sale</th>
//           </tr>
//         </thead>
//         <tbody>
//           {products.length > 0 ? (
//             products.map((product) => (
//               <tr key={product.id}>
//                 <td>{product.id}</td>
//                 <td>{product.title}</td>
//                 <td>{product.description}</td>
//                 <td>${product.price}</td>
//                 <td>{product.dateOfSale}</td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="5">No data available</td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default App;



import React, { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [month, setMonth] = useState("3"); // Default: March
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://api.allorigins.win/raw?url=https://s3.amazonaws.com/roxiler.com/product_transaction.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP Error! Status: ${res.status}`);
        }
        return res.text(); // Get raw response as text
      })
      .then((text) => {
        console.log("Raw Response:", text); // Debugging: check if full data is received
        try {
          const jsonData = JSON.parse(text); // Try parsing JSON
          setProducts(jsonData);
        } catch (jsonError) {
          console.error("JSON Parse Error:", jsonError);
          setError("Failed to parse JSON data.");
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch Error:", err);
        setError("Failed to fetch data (CORS issue or API down)");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  // Filter products based on selected month and search query
  const filteredProducts = products.filter(
    (product) =>
      product.dateOfSale && product.dateOfSale.includes(month) &&
      (product.title.toLowerCase().includes(search.toLowerCase()) ||
        product.description.toLowerCase().includes(search.toLowerCase()) ||
        product.price.toString().includes(search))
  );

  return (
    <div>
      <h1>Transactions Dashboard</h1>

      {/* Month Selection */}
      <label>Select Month: </label>
      <select value={month} onChange={(e) => setMonth(e.target.value)}>
        <option value="1">January</option>
        <option value="2">February</option>
        <option value="3">March</option>
        <option value="4">April</option>
        <option value="5">May</option>
        <option value="6">June</option>
        <option value="7">July</option>
        <option value="8">August</option>
        <option value="9">September</option>
        <option value="10">October</option>
        <option value="11">November</option>
        <option value="12">December</option>
      </select>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search transactions"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Transactions Table */}
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Price</th>
            <th>Date of Sale</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td>{product.description}</td>
                <td>${product.price}</td>
                <td>{product.dateOfSale}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No data available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default App;

