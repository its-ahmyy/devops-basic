const http = require("http");

const server = http.createServer((req, res) => {
  res.end("LEVEL-2 FULLY WORKING! YOOOOO Ahmyyy My boyyyy ");
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});