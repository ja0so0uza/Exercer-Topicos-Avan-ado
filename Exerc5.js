var http = require("http");
var url = require('url');
const request = require('request');

http.createServer(function (req, res) {
    request('https://www.boredapi.com/api/activity', (error, response, body) => {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        console.log(body);
        res.write(body);
        return res.end();
    });
}).listen(8080);