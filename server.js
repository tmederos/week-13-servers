// Require/import the HTTP module
var http = require("http");

// Define a port to listen for incoming requests
var PORT1 = 7000;
var PORT2 = 7500;

// Create a generic function to handle requests and responses
function handleNice(request, response) {

  // Send the below string to the client when the user visits the PORT URL
  response.end("This is nice! " + request.url);
}

// Create a generic function to handle requests and responses
function handleMean(request, response) {

  // Send the below string to the client when the user visits the PORT URL
  response.end("This is mean " + request.url);
}

// Use the Node HTTP package to create our server.
// Pass the handleRequest function to empower it with functionality.
var niceSserver = http.createServer(handleNice);

var meanServer = http.createServer(handleMean);

// Start our server so that it can begin listening to client requests.
niceServer.server.listen(PORT1, function() {

  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT1);
});

// Start our server so that it can begin listening to client requests.
meanServer.server.listen(PORT2, function() {

  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT2);
});