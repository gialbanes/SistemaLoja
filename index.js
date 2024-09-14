const express = require("express");

const app = express();

app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/clientes", (req, res) => {
  const clientes = [
    { 
      nome: "Ana Paula Silva", 
      cpf: "12345678900", 
      endereco: "Rua das Flores, 123 - Bairro Jardim - São Paulo, SP - 01000-000" 
    },
    { 
      nome: "Beatriz Fernandes Oliveira", 
      cpf: "234.567.890-12", 
      endereco: "Avenida Paulista, 456 - Centro - São Paulo, SP - 01310-000" 
    },
    { 
      nome: "Camila Rodrigues Lima", 
      cpf: "334.455.667-78", 
      endereco: "Rua das Palmeiras, 789 - Vila Nova - Belo Horizonte, MG - 03456-789" 
    },
    { 
      nome: "Elaine Martins da Silva", 
      cpf: "445.566.778-89", 
      endereco: "Rua dos Jacarandás, 1010 - Jardim Bela Vista - São Paulo, SP - 04567-890" 
    },
    { 
      nome: "Daniela Pereira Costa", 
      cpf: "556.677.889-90", 
      endereco: "Rua da Esperança, 2020 - Boa Viagem - Recife, PE - 05678-901" 
    },
    { 
      nome: "Fernanda Gomes Almeida", 
      cpf: "667.788.990-01", 
      endereco: "Rua dos Lírios, 3030 - Alto da Lapa - São Paulo, SP - 06789-012" 
    },
    { 
      nome: "Gabriela Alves Pinto", 
      cpf: "778.899.001-12", 
      endereco: "Rua do Horizonte, 4040 - Jardim Botânico - Curitiba, PR - 07890-123" 
    },
    { 
      nome: "Helena Souza Pereira", 
      cpf: "889.900.112-23", 
      endereco: "Avenida das Américas, 5050 - Barra da Tijuca - Rio de Janeiro, RJ - 08901-234" 
    },
    { 
      nome: "Isabella Costa Rocha", 
      cpf: "990.011.223-34", 
      endereco: "Rua do Sol, 6060 - Parque das Nações - Porto Alegre, RS - 09012-345" 
    },
    { 
      nome: "Juliana Carvalho Martins", 
      cpf: "101.122.334-45", 
      endereco: "Rua das Magnólias, 7070 - Centro - Vitória, ES - 10123-456" 
    }
  ];
  res.render("clientes", {
    clientes: clientes,
  });
});

app.get("/produtos/:categoria?", (req, res) => {
  const categoria = req.params.categoria;

  const maquiagem = [
    { nomeProduto: "Blush em Bastão Vermelho Mariana Saad By Océane", 
      preco: 93.5, 
      categoria: "Maquiagem" 
    },
    {
      nomeProduto: "Contorno em Bastão Marrom Escuro",
      preco: 69.90,
      categoria: "Maquiagem",
    },
    {
      nomeProduto: "Nécessaire Rosê Puffer",
      preco: 66.90,
      categoria: "Maquiagem",
    },
    {
      nomeProduto: "Paleta Multifuncional",
      preco: 157.90,
      categoria: "Maquiagem",
    },
    {
      nomeProduto: "Contorno em Bastão Marrom Escuro",
      preco: 69.90,
      categoria: "Maquiagem",
    },
    {
      nomeProduto: "Paleta de Iluminador Facial Mariana Saad By Océane",
      preco: 49.90,
      categoria: "Maquiagem",
    },
    {
      nomeProduto: "Esponja de Maquiagem",
      preco: 26.90,
      categoria: "Maquiagem",
    },
    {
      nomeProduto: "Mini Pó Translúcido Solto",
      preco: 38.90,
      categoria: "Maquiagem",
    },
  ];

  const skincare = [
    {
      nomeProduto: "Hidratante Facial com Ácido Salicílico",
      preco: 55.9,
      categoria: "Skin care",
    },
    {
      nomeProduto: "Mini Geladeira Rosa",
      preco: 399.90,
      categoria: "Skin care",
    },
    {
      nomeProduto: "Kit Creme Para Área Dos Olhos com Niacinamida + Gel Hidratante Facial ",
      preco: 79.90,
      categoria: "Skin care",
    }, 
    {
      nomeProduto: "Creme Demaquilante",
      preco: 78.90,
      categoria: "Skin care",
    },
    {
      nomeProduto: "Adesivos Secativos para Espinhas com Ácido Salicílico",
      preco: 25.90,
      categoria: "Skin care",
    },
    {
      nomeProduto: "Gel Hidratante Facial com Extrato de Pérola - Facial",
      preco: 49.90,
      categoria: "Skin care",
    },
  ];

  const cabelo = [
    {
      nomeProduto: "Shampoo",
      preco: 40.5,
      categoria: "Cabelo",
    },
    {
      nomeProduto: "Perfume Capilar",
      preco: 59.90,
      categoria: "Cabelo",
    },
    {
      nomeProduto: "Kit Creme Para Área Dos Olhos com Niacinamida + Gel Hidratante Facial ",
      preco: 79.90,
      categoria: "Cabelo",
    },
    {
      nomeProduto: "Escova de Cabelo Desembaraçadora",
      preco: 24.90,
      categoria: "Cabelo",
    },
    {
      nomeProduto: "Shampoo a Seco",
      preco: 34.90,
      categoria: "Cabelo",
    },
    {
      nomeProduto: "Ativador e Modelador de Cachos",
      preco: 49.90,
      categoria: "Cabelo",
    },
    {
      nomeProduto: "Mini Condicionador Cabelos Cacheados",
      preco: 14.00,
      categoria: "Cabelo",
    },
  ];

  const produtos = [
    { nomeProduto: "Blush em Bastão Vermelho Mariana Saad By Océane", 
      preco: 93.5, 
      categoria: "Maquiagem" 
    },
    {
      nomeProduto: "Hidratante Facial com Ácido Salicílico",
      preco: 55.9,
      categoria: "Skin care",
    },
    {
      nomeProduto: "Perfume Capilar",
      preco: 59.90,
      categoria: "Cabelo",
    },
    {
      nomeProduto: "Mini Geladeira Rosa",
      preco: 399.90,
      categoria: "Skin care",
    },
    {
      nomeProduto: "Kit Creme Para Área Dos Olhos com Niacinamida + Gel Hidratante Facial ",
      preco: 79.90,
      categoria: "Cabelo",
    },
    {
      nomeProduto: "Nécessaire Rosê Puffer",
      preco: 66.90,
      categoria: "Maquiagem",
    },
    {
      nomeProduto: "Paleta Multifuncional",
      preco: 157.90,
      categoria: "Maquiagem",
    },
    {
      nomeProduto: "Escova de Cabelo Desembaraçadora",
      preco: 24.90,
      categoria: "Cabelo",
    },
    {
      nomeProduto: "Contorno em Bastão Marrom Escuro",
      preco: 69.90,
      categoria: "Maquiagem",
    },
    {
      nomeProduto: "Paleta de Iluminador Facial Mariana Saad By Océane",
      preco: 49.90,
      categoria: "Maquiagem",
    },
    {
      nomeProduto: "Shampoo a Seco",
      preco: 34.90,
      categoria: "Cabelo",
    },
    {
      nomeProduto: "Creme Demaquilante",
      preco: 78.90,
      categoria: "Skin care",
    },
    {
      nomeProduto: "Esponja de Maquiagem",
      preco: 26.90,
      categoria: "Maquiagem",
    },
    {
      nomeProduto: "Ativador e Modelador de Cachos",
      preco: 49.90,
      categoria: "Cabelo",
    },
    {
      nomeProduto: "Mini Condicionador Cabelos Cacheados",
      preco: 14.00,
      categoria: "Cabelo",
    },
    {
      nomeProduto: "Adesivos Secativos para Espinhas com Ácido Salicílico",
      preco: 25.90,
      categoria: "Skin care",
    },
    {
      nomeProduto: "Gel Hidratante Facial com Extrato de Pérola - Facial",
      preco: 49.90,
      categoria: "Skin care",
    },
    {
      nomeProduto: "Mini Pó Translúcido Solto",
      preco: 38.90,
      categoria: "Maquiagem",
    },
  ];
  res.render("produtos", {
    categoria: categoria,
    produtos: produtos,
    maquiagem: maquiagem,
    skincare: skincare,
    cabelo: cabelo
  });
});

app.get("/pedidos", (req, res) => {
  const pedidos = [
    { 
      numero: 1, 
      valor: 227.3 
    },
    { 
      numero: 2, 
      valor: 469.70 
    },
    { 
      numero: 3, 
      valor: 135.70 
    },
    { 
      numero: 4, 
      valor: 123.70 
    },
    { 
      numero: 5, 
      valor: 91.90 
    },
    { 
      numero: 6, 
      valor: 79.80 
    },
    { 
      numero: 7, 
      valor: 55.90 
    },
    { 
      numero: 8, 
      valor: 34.90 
    },
    { 
      numero: 9, 
      valor: 97.80 
    },
    { 
      numero: 10, 
      valor: 118.70 
    },
    { 
      numero: 11, 
      valor: 43.90 
    },
    { 
      numero: 12, 
      valor: 80.90 
    },
    { 
      numero: 13, 
      valor: 150.00 
    },
    { 
      numero: 14, 
      valor: 69.90 
    },
    { 
      numero: 15, 
      valor: 119.50 
    },
    { 
      numero: 16, 
      valor: 23.90 
    },
    { 
      numero: 17, 
      valor: 85.60 
    },
    { 
      numero: 18, 
      valor: 104.30 
    }
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
