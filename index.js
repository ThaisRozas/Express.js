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

// app.get("/blog", function(req, res){
//   res.send("Bem vindo(a) à página do meu blog!");
// });


//query params estão entrando em desuso
//parametros fixos em rotas são mais seguros e mais utilizados
app.get("/canal/youtube", function(req, res){
  var canal = req.query["canal"];

  if(canal){
    res.send(canal);    
  } else {
    res.send("Nenhum canal fornecido");
  }
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

//parametros opcionais
app.get("/blog/:artigo?", function(req, res){
  var artigo = req.params.artigo;
  if(artigo){
    res.send("Artigo: " + artigo);
  } else {
    res.send("Bem vindo(a) à página do meu blog!");
  }
});

app.listen(4000,function(erro){ //função chamada sempre que o servidor é iniciado, define a porta também
  if(erro){
    console.log("Ocorreu um erro!");
  } else {
    console.log("Servidor iniciado com sucesso!");
  }
});