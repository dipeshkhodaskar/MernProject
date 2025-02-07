// import axios from 'axios';

// // Define the backend API URL
// const API_URL = 'http://localhost:5000/api';
// // import call from '../../../backend/index';
// // const API_URL = call;

// // API functions
// export const getTransactions = (month, search, page = 1, perPage = 10) => 
//   axios.get(`${API_URL}/transactions?month=${month}&search=${search}&page=${page}&perPage=${perPage}`);

// export const getStatistics = (month) => 
//   axios.get(`${API_URL}/statistics?month=${month}`);

// export const getBarChart = (month) => 
//   axios.get(`${API_URL}/bar-chart?month=${month}`);

// export const getPieChart = (month) => 
//   axios.get(`${API_URL}/pie-chart?month=${month}`);


import axios from 'axios';

// Define the backend API URL
const API_URL = 'http://localhost:5000/api';

// API functions
export const getTransactions = async (month, search, page = 1, perPage = 10) => {
    try {
        const response = await axios.get(`${API_URL}/transactions?month=${month}&search=${search}&page=${page}&perPage=${perPage}`);
        return response.data; // Return the data from the response
    } catch (error) {
        console.error('Error fetching transactions:', error);
        throw error; // Rethrow the error if you want to handle it further up the call stack
    }
};

export const getStatistics = async (month) => {
    try {
        const response = await axios.get(`${API_URL}/statistics?month=${month}`);
        return response.data; // Return the data from the response
    } catch (error) {
        console.error('Error fetching statistics:', error);
        throw error; // Rethrow the error if you want to handle it further up the call stack
    }
};

export const getBarChart = async (month) => {
    try {
        const response = await axios.get(`${API_URL}/bar-chart?month=${month}`);
        return response.data; // Return the data from the response
    } catch (error) {
        console.error('Error fetching bar chart:', error);
        throw error; // Rethrow the error if you want to handle it further up the call stack
    }
};

export const getPieChart = async (month) => {
    try {
        const response = await axios.get(`${API_URL}/pie-chart?month=${month}`);
        return response.data; // Return the data from the response
    } catch (error) {
        console.error('Error fetching pie chart:', error);
        throw error; // Rethrow the error if you want to handle it further up the call stack
    }
};