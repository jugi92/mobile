var http = require('http');
var fs = require("fs");
var url = require('url');

http.createServer(function (req, res) {
var url_parts = url.parse(req.url, true);
var query = url_parts.query;
var file = query.file;
fs.readFile(file, "utf8", function(error, data) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end(data);
  console.log(data);
});
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');