const http = require('http');

http.createServer((req, res)=>{
  res.write("Hello world, this is elton, just testing \n"); // write a response
  res.end(); //end the response
}).listen(8000); // listen for requests on port 8000
