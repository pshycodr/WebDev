// Day 11: Promises and Async/Await
// Tasks/Activities
// Activity 1: Understanding Promises
// Task 1: Create a promise that resolves with a message after a 2-second timeout and log the message to the console.
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("This is the resolved message after 2 seconds.")
    }, 2000);
})
myPromise.then((message) => {
    console.log(message);
})

// Task 2: Create a promise that rejects with an error message after a 2 second timeout and handle the error using .catch()
const myPromise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(new Error("This is the error rejected message after 2 second"));
    }, 2000);
})
myPromise2.then((message) => {
    console.log(message);
})
.catch((error) => {
    console.error(error.message);
})

// Activity 2: Chaining Promises
// Task 3: Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order.
function fetchData(data, delay){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data);
        }, delay);
    })
}

// Chain promises to simulate sequential data fetching
fetchData("Fetching data from server 1...", 1000)
.then((message1) => {
    console.log(message1);
    return fetchData("Fetching data from server 2...", 2000);
})
.then((message2) => {
    console.log(message2);
    return fetchData("Fetching data from server 3...", 3000)
})
.then((message3) => {
    console.log(message3);
    console.log("All  data fetched successfully.");
})
.catch((error)=>{
    console.error("Ann error occurred:", error.message)
});

// Activity 3: Using Async/Await
// Task 4: Write an async function that waits for a promise to resolve and then logs the resolved value.
async function fetchAndLog(){
    //Creating a promise that resolves after 3 seconds
    const promise3 = new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data has been successfully fetched!");
        }, 3000);
    })
      
    try{
        // Waiting for the promise to resolve
        const result = await promise3;
        // Logging the resolved value
        console.log(result);
    }catch(error){
        // Handling any potential errors
        console.error("An error occurred:", error.message);
    }
}
// Calling the async function
fetchAndLog();

// Task 5: Write an async function that handles a rejected promise using try-catch and logs the error message.
async function handleRejectedPromise(){
    // Creating a promise that rejects after 2 second
    const promise4 = new Promise((reject) => {
        setTimeout(() => {
            reject(new Error("This is an error message from the rejected promise"));
        }, 2000);
    });
    try{
        // Waiting for the promise to settle
        const result = await promise4;
        // This line won't execute because the promise is rejected
        console.log(result);
    }catch(error){
        //Handling the rejection
        console.error("An error occurred:", error.message);
    }
}
//Calling the async function
handleRejectedPromise();

// Activity 4: Fetching Data from an API
// Task 6: Use the fetch API to get data from a public API and log the response data to the console using promises.
const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';

// Using fetch to get data frm the public API
fetch(apiUrl)
.then(response => {
    // Checking if the response is successful
    if(!response.ok){
        throw new Error('Network response was not ok ' + response.statusText);
    }
    // Parse the JSON data from the response
    return response.json();
})
.then(data => {
    console.log('Data fetched from API:', data);
})
.catch(error => {
    console.error('There was a problem with the fetch operation:', error.message);
})

// Task 7: Use the fetch API to get data from a public API and log the response data to the console using async/await
// Define an async function to fetch and log data
async function fetchData2() {
    // Define the URL of the public API
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';

    try {
        // Fetch data from the public API
        const response = await fetch(apiUrl);

        // Check if the response is successful
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }

        // Parse the JSON data from the response
        const data = await response.json();

        // Log the response data to the console
        console.log('Data fetched from API:', data);
    } catch (error) {
        // Handle any errors that occurred during the fetch operation
        console.error('There was a problem with the fetch operation:', error.message);
    }
}

// Call the async function
fetchData2();

// Activity 5: Concurrent Promises
// Task 8: Use Promise.all to wait for multiple promises to resolve and then log all their values.

const promiseOne = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Result from promise1")
    }, 1000);
});
const promiseTwo = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Result from promise1")
    }, 2000);
});
const promiseThree = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Result from promise1")
    }, 3000);
});

//Using Promise.All to wait for all promises to resolve
Promise.all([promiseOne,promiseTwo,promiseThree])
.then((results) => {
    console.log("All promises resolved:", results);
})
.catch((error) => {
    console.error("An error occurred:", error.message);
})

// Task 9: Use Promise.race to log the value of the first promise that resolves among multiple promises.
// Define multiple promises with different resolve times
const promiseFour = new Promise((resolve) => {
    setTimeout(() => resolve("Result from promise 1"), 1000);
});

const promiseFive = new Promise((resolve) => {
    setTimeout(() => resolve("Result from promise 2"), 2000);
});

const promiseSix = new Promise((resolve) => {
    setTimeout(() => resolve("Result from promise 3"), 1500);
});

// Use Promise.race to get the value of the first promise that resolves
Promise.race([promiseFour, promiseFive, promiseSix])
    .then((result) => {
        // Log the result of the first resolved promise
        console.log("First resolved promise value:", result);
    })
    .catch((error) => {
        // Handle any errors that occur
        console.error("An error occurred:", error.message);
    });
