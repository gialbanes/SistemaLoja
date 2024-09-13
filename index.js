const express = require("express");

const app = express();

app.set('view engine', 'ejs');

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/clientes", (req, res) => {
  const clientes = [
    { nome: "Giovana", cpf: 11111111111, endereco: "Cananéia" },
    { nome: "Arthur", cpf: 22222222222, endereco: "Conchal" },
    { nome: "Éric", cpf: 33333333333, endereco: "Registro" },
    { nome: "Lucas", cpf: 44444444444, endereco: "Registro" },
    { nome: "Kaique", cpf: 55555555555, endereco: "Registro" },
  ];
  res.render("clientes", {
    clientes: clientes,
  });
});

app.get("/produtos", (req, res) => {
  const produtos = [
    {
      nomeProduto: "Hidratante de corpo",
      preco: 29.9,
      categoria: "Perfumaria",
    },
    { nomeProduto: "Blush Oceane", preco: 39.9, categoria: "Maquiagem" },
    { nomeProduto: "Água termaçl", preco: 49.9, categoria: "Skin care" },
    {
      nomeProduto: "Máscara facial Oceane",
      preco: 15.9,
      categoria: "Skin care",
    },
    {
      nomeProduto: "Rímel Eudora Soul Turbo 7.0",
      preco: 39.9,
      categoria: "Maquiagem",
    },
  ];
  res.render("produtos", {
    produtos: produtos,
  });
});

app.get("/pedidos", (req, res) => {
  const pedidos = [
    { numero: 1, valor: 100 },
    { numero: 2, valor: 39.9 },
    { numero: 3, valor: 50 },
    { numero: 4, valor: 15.9 },
    { numero: 5, valor: 70 },
  ];
  res.render("pedidos", {
    pedidos: pedidos,
  });
});

const port = 8080;
app.listen(port, (error) => {
  if (error) {
    console.log(`Ocorreu um erro: ${error}`);
  } else {
    console.log(`Servidor iniciado em: http://localhost:${port}`);
  }
});
