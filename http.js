const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome you are");
  }
  if (req.url === "/about") {
    res.end("This is about page");
  }
  res.end(` <h1>Opps!</h1>
  <p>We can't seem to find the page you are looking for </p>
  <a href="/"> back home</a>`);
});

server.listen(5000,()=>{
    console.log('Server is Listening port:5000');
});
