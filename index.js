//importar o framework, importando o express
const express = require("express");
//função que vai carregar todo o framework, inicializando o express nessa variável
const app = express();

//criação de uma rota inicial do meu aplicativo
app.get("/", function(req,res){
  res.send("Bem vindo(a) à minha primeira aplicação!");
  //fecha a conexão com o cliente
  //só pode enviar uma resposta uma única vez
});

app.get("/blog", function(req, res){
  res.send("Bem vindo(a) à página do meu blog!");
});

app.get("/canal/youtube", function(req, res){
  res.send("Bem vindo(a) à página do meu canal!");
});

//valores dinâmicos nas rotas
app.get("/ola/:nome/:empresa", function(req, res){
  //REQ SÃO OS DADOS ENVIADOS PELO USUÁRIO
  //RES É A RESPOSTA QUE VAI SER ENVIADA PELO USUÁRIO
  var nome = req.params.nome;
  var empresa = req.params.empresa;
  res.send("Oi " + nome + " de " + empresa + "!");
  //a resposta mostra o parametro que tiver na rota
});

app.listen(4000,function(erro){ //função chamada sempre que o servidor é iniciado, define a porta também
  if(erro){
    console.log("Ocorreu um erro!");
  } else {
    console.log("Servidor iniciado com sucesso!");
  }
});