const http = require("http");

// Define the server logic
const server = http.createServer((req, res) => {
  res.statusCode = 200; 
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello, World!\n"); // Send the response to the client
});

// Specify the port number the server will listen to
const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
