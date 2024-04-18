var http = require('http');
    var procMilhagem = 'Iniciado programa de milhagem';

http.createServer(function (req, res){
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(procMilhagem);
    res.end();
}).listen(8085);