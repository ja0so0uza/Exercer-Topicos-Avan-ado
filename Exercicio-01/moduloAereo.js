var http = require('http');

var procMilhagem = 'Iniciado programa de milhagem';
var procPagamento = 'Processando pagamento';
var listaCliente = 'Cliente indicado pela empresa proc. pagamento';
var baseCliente = 'Banco de dados iniciado';
var clienteOrig = 'Cliente original do sistema aereo';
var solicitaProcPgmt = "Servico Proceamento De Pagamento";
var solicitaProcMilhagem = "Servico Programa De Milhagem";
var solicitaBaseCliente = "Servico Base De Cliente";
var sistemaAereo ="Iniciando Sistema Aereo";
var acionandoCatalogo="Catologo iniciado";
var reservaPassagem = "Iniciado processo de reserva";
var vendaPassagem = "Iniciado processo de compra de passagens";

function acionaProcPgmt(){
    require('http://localhost:8080',  function (error, response, body) {
        if (!error && response.statusCode === 200) {
            solicitaProcPgmt = body;
        console.log(body)
        }
        })
        return solicitaProcPgmt;
    }

    function acionaProgMilhagem(){
        require('http://localhost:8085',  function (error, response, body) {
            if (!error && response.statusCode === 200) {
            solicitaProcMilhagem = body;
            console.log(body)
            }
            })
            return solicitaProcMilhagem;
        }
  
        function acionaBaseCliente(){
            require('http://localhost:8082',  function (error, response, body) {
                if (!error && response.statusCode === 200) {
                solicitaBaseCliente = body;
                console.log(body)
                }
                })
                return solicitaBaseCliente;
            }
      
    
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(sistemaAereo + " => " + acionandoCatalogo + " => " + reservaPassagem + " => " + vendaPassagem);
    res.write(acionaProcPgmt());
    res.write(acionaProgMilhagem());
    res.write(acionaBaseCliente());
    res.end();
}).listen(8081);


http.createServer(function (req, res){
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(baseCliente + " => " + clienteOrig);
    res.end();
}).listen(8082);


http.createServer(function (req, res){
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(procPagamento + " => " + listaCliente);
    res.end();
}).listen(8080);


http.createServer(function (req, res){
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(procMilhagem);
    res.end();
}).listen(8085);










