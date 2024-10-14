// Import the axios module
const axios = require('axios');

// Define the URL of the API endpoint
const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';

// Make a GET request to the API endpoint
axios.get(apiUrl)
    .then(response => {
        // Handle the response
        console.log('Response data:', response.data);
    })
    .catch(error => {
        // Handle any errors
        console.error('Error making request:', error);
    });