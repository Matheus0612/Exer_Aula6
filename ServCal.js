//SERVIÇO SAUDAÇÃO
var http = require('http');
var url = require('url');
var mat= require('./matematica');

//criando um objeto do tipo servidor
http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type':'text/html'}); //monta o cabeçalho da página web
    var q = url.parse(req.url, true).query; //recebe um objeto url para consulta
    
    var resp=0;
    var num1= Number(q.n1);
    var num2= Number(q.n2);
    
    if(q.calculo=='soma'){
        resp= mat.soma(num1,num2);
    }
    else if(q.calculo=='sub'){
        resp= mat.subt(num1,num2);
    }
    else if(q.calculo=='mult'){
        resp= mat.mult(num1,num2)
    }
    else{
        resp= mat.div(num1,num2)
    }

    var txt = "Resultado: " + resp //consultando um atributo da url, no caso chamado nome
    res.end(txt); //imprime o texto na tela
}).listen(4800); //porta de conexão