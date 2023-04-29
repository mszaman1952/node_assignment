



const http = require('http');
const fs = require('fs');
const port = 3000;
const hostName = 'localhost'


const myServer = http.createServer((req, res) => {

  const handleAllReadFile = (fileName, statusCode) => {
    fs.readFile(fileName, (err, data) => {
      res.writeHead(statusCode, { "content-Type": "text/html" });
      res.write(data);
      res.end();
    });

  };

  if (req.url === "/") {
    handleAllReadFile("./public/index.html", 200);
  }
  else if (req.url === "/about") {
    handleAllReadFile("./public/about.html", 200);
  } 
  
  else if (req.url === "/contact") {
    handleAllReadFile("./public/contact.html", 200);
  } 
  else {
    handleAllReadFile("./public/error.html", 404);
  }
});

myServer.listen(port, hostName,() => {
    console.log(`Server is Running Successfully at http://${hostName}:${port}`); 
});

