
// Initialize a Socket.IO client instance and connect to the server
const socket = io(); // Calling io from client library

// Declare a variable to store the user's name
let name;

// Get references to the textarea and message area elements from the DOM
let textarea = document.querySelector('#textarea');
let messageArea = document.querySelector('.message_area');

// Prompt the user to enter their name until a valid name is provided
do {
   name = prompt('Please enter your name:');
} while (!name);

// Add an event listener to the textarea that triggers on keyup events
textarea.addEventListener('keyup', (e) => {
    // Check if the pressed key is 'Enter'
    if (e.key === 'Enter') {
        // Send the message using the sendMessage function and pass the value of the textarea
        sendMessage(e.target.value);
    }
});

// Function to handle sending a message
function sendMessage(message) {
    // Create an object containing the user's name and the message
    let msg = {
        user: name,
        message: message.trim()
    };

    // Append the message to the message area and mark it as outgoing
    appendMessage(msg, 'outgoing');
    textarea.value = '';
    scrollToBottom();

    // Sending it to the server via websocket connection
    socket.emit('message', msg) // Passing msg directly
}

// Function to create and append a message to the message area
function appendMessage(msg, type) {
    // Create a new div element for the message
    let mainDiv = document.createElement('div');
    // Assign a class based on the message type (incoming or outgoing)
    let className = type;
    mainDiv.classList.add(className, 'message');

    // Define the HTML markup for the message, including the user name and message content
    let markup = `
    <h4>${msg.user}</h4>
    <p>${msg.message}</p>
    `;

    // Set the inner HTML of the new div element
    mainDiv.innerHTML = markup;
    // Append the new div element to the message area
    messageArea.appendChild(mainDiv);
}

// Receiving the messages whatever is coming(This will run on the browser not on the server)
socket.on('message', (msg) => {
    //console.log(msg);
    appendMessage(msg, 'incoming')
    scrollToBottom();
}) 


// Function to scroll message at the bottom automatically
function scrollToBottom(){
    messageArea.scrollTop = messageArea.scrollHeight;
}
