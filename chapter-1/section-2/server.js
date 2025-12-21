const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Hello I am from NodeJs server");
});
server.listen(3000);
