var http = require('http');
    var procPagamento = 'Processando pagamento';
    var listaCliente = 'Cliente indicado pela empresa proc. pagamento';

http.createServer(function (req, res){
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(procPagamento + " => " + listaCliente);
    res.end();
}).listen(8080);
