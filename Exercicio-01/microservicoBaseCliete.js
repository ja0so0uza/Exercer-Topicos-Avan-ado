var http = require('http');
    var baseCliente = 'Banco de dados iniciado';
    var clienteOrig = 'Cliente original do sistema aereo';

http.createServer(function (req, res){
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(baseCliente + " => " + clienteOrig);
    res.end();
}).listen(8082);
