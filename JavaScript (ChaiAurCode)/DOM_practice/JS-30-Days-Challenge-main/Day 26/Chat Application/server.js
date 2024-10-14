// Importing the express module
const express = require('express');

// Creating an instance of an express application
const app = express();

// Importing the http module and create an HTTP server with the express app
const http = require('http').createServer(app)

// Defining the port to listen on, using an environment variable or default to 3000
const PORT = process.env.PORT || 3000

// Starting the HTTP server and listen on the defined port
http.listen(PORT, () => {
    // Logging a message to the console when the server starts listening
    console.log(`Listening on port ${PORT}`);
})

// Serving static files from the 'public' directory within the current directory(Express Middleware)
app.use(express.static(__dirname + '/public'));

// Defining a route for the root URL ('/') that serves the 'index.html' file from the current directory
app.get('/', (req, res) => {
    // Sending the 'index.html' file as the response to the client
    res.sendFile(__dirname + '/index.html');
})



// Socket
// Importing the Socket.IO module and bind it to the HTTP server instance
const io = require('socket.io')(http);

// Setting up an event listener for new client connections
io.on('connection', (socket) => {
    // Logging a message to the console when a client connects(Whenever any client or browser connects this function will call)
    console.log('Connected...');
    
    // Now we will listen here... the one which from the client  side  we emit
     socket.on('message', (msg) => {  //-> This will give us the message which are coming from the client which is an object where message and name is there
        //console.log(msg);
        socket.broadcast.emit('message', msg);  // Broadcast means ->This will send everyone whoever is connected to the sockets except the one who send the message
     })
});
