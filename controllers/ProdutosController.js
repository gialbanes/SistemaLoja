import express from "express";
const router = express.Router();

router.get("/produtos/:categoria?", (req, res) => {
    const categoria = req.params.categoria;
  
    const maquiagem = [
      { nomeProduto: "Blush em Bastão Vermelho Mariana Saad By Océane", 
        preco: 93.5, 
        categoria: "Maquiagem",
        src: "/imgs/maquiagem/img1.webp",
      },
      {
        nomeProduto: "Contorno em Bastão Marrom Escuro",
        preco: 69.90,
        categoria: "Maquiagem",
        src: "/imgs/maquiagem/img2.jpeg",
      },
      {
        nomeProduto: "Nécessaire Rosê Puffer",
        preco: 66.90,
        categoria: "Maquiagem",
        src: "/imgs/maquiagem/img3.webp",
      },
      {
        nomeProduto: "Paleta Multifuncional",
        preco: 157.90,
        categoria: "Maquiagem",
        src: "/imgs/maquiagem/img4.webp",
      },
      {
        nomeProduto: "Paleta de Iluminador Facial Mariana Saad By Océane",
        preco: 49.90,
        categoria: "Maquiagem",
        src: "/imgs/maquiagem/img5.webp",
      },
      {
        nomeProduto: "Esponja de Maquiagem",
        preco: 26.90,
        categoria: "Maquiagem",
        src: "/imgs/maquiagem/img6.webp",
      },
      {
        nomeProduto: "Mini Pó Translúcido Solto",
        preco: 38.90,
        categoria: "Maquiagem",
        src: "/imgs/maquiagem/img7.webp",
      },
    ];
  
    const skincare = [
      {
        nomeProduto: "Hidratante Facial com Ácido Salicílico",
        preco: 55.9,
        categoria: "Skin care",
        src: "/imgs/skincare/img1.webp",
      },
      {
        nomeProduto: "Mini Geladeira Rosa",
        preco: 399.90,
        categoria: "Skin care",
        src: "/imgs/skincare/img2.webp",
      },
      {
        nomeProduto: "Kit Creme Para Área Dos Olhos com Niacinamida + Gel Hidratante Facial ",
        preco: 79.90,
        categoria: "Skin care",
        src: "/imgs/skincare/img3.webp",
      }, 
      {
        nomeProduto: "Creme Demaquilante",
        preco: 78.90,
        categoria: "Skin care",
        src: "/imgs/skincare/img4.webp",
      },
      {
        nomeProduto: "Adesivos Secativos para Espinhas com Ácido Salicílico",
        preco: 25.90,
        categoria: "Skin care",
        src: "/imgs/skincare/img5.webp",
      },
      {
        nomeProduto: "Gel Hidratante Facial com Extrato de Pérola - Facial",
        preco: 49.90,
        categoria: "Skin care",
        src: "/imgs/skincare/img6.webp",
      },
    ];
  
    const cabelo = [
      {
        nomeProduto: "Shampoo",
        preco: 40.5,
        categoria: "Cabelo",
        src: "/imgs/cabelo/img1.webp",
      },
      {
        nomeProduto: "Perfume Capilar",
        preco: 59.90,
        categoria: "Cabelo",
        src: "/imgs/cabelo/img2.webp",
      },
      {
        nomeProduto: "Kit Creme Para Área Dos Olhos com Niacinamida + Gel Hidratante Facial ",
        preco: 79.90,
        categoria: "Cabelo",
        src: "/imgs/cabelo/img3.webp",
      },
      {
        nomeProduto: "Escova de Cabelo Desembaraçadora",
        preco: 24.90,
        categoria: "Cabelo",
        src: "/imgs/cabelo/img4.webp",
      },
      {
        nomeProduto: "Shampoo a Seco",
        preco: 34.90,
        categoria: "Cabelo",
        src: "/imgs/cabelo/img5.webp",
      },
      {
        nomeProduto: "Ativador e Modelador de Cachos",
        preco: 49.90,
        categoria: "Cabelo",
        src: "/imgs/cabelo/img6.webp",
      },
      {
        nomeProduto: "Mini Condicionador Cabelos Cacheados",
        preco: 14.00,
        categoria: "Cabelo",
        src: "/imgs/cabelo/img7.webp",
      },
    ];
  
    const produtos = req.params.produtos; 
    res.render("produtos", {
      categoria: categoria,
      produtos: {maquiagem, skincare,cabelo},
      maquiagem: maquiagem,
      skincare: skincare,
      cabelo: cabelo
    });
  });

export default router;