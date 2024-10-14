// Activity 4
// Install a third-party module (eg., lodash) using npm. Import and use a function from this module in a script.

// Import the lodash module
const result = require('lodash');

// Use the .chunk function from lodash
const array = [1,2,3,4,5,6,7,8,9];
const chunkSize = 3;
const chunks = result.chunk(array,chunkSize);

console.log('Chunks:', chunks);