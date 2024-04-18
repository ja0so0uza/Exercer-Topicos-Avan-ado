var http = require("http");
var url = require('url');
var filesystem = require("fs");

http.createServer(function (req, res) {
    filesystem.readFile('./exerc1V2.html', function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    });
}).listen(8081);

