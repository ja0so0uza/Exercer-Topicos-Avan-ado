var http = require("http");

var info = require('./exer2esports');

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    //res.write("vai chamar outro modulo ou biblioteca customizada");
    res.write("Primeiro Nome:" + info.priNome + "<br> Ultimo Nome:  " + info.ultNome + "<br>RGM: " + info.rgm);
    res.end();
}).listen(8082);