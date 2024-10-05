import express from "express";
const router = express.Router();
import Produto from "../models/Produto.js";

router.get("/produtos", (req, res) => {
  Produto.findAll()
    .then((produtos) => {
      res.render("produtos", {
        produtos: produtos,
        categoria: "todos" 
      });
    })
    .catch((error) => {
      console.log(error);
    });
});
router.get("/produtos/maquiagem", (req, res) => {
  Produto.findAll({ where: { categoria: 'maquiagem' } })
    .then((produtos) => {
      res.render("produtos", {
        produtos: produtos,
        categoria: "maquiagem" 
      });
    })
    .catch((error) => {
      console.log(error);
    });
});
router.get("/produtos/skincare", (req, res) => {
  Produto.findAll({ where: { categoria: 'skincare' } })
    .then((produtos) => {
      res.render("produtos", {
        produtos: produtos,
        categoria: "skincare"
      });
    })
    .catch((error) => {
      console.log(error);
    });
});
router.get("/produtos/cabelo", (req, res) => {
  Produto.findAll({ where: { categoria: 'cabelo' } })
    .then((produtos) => {
      res.render("produtos", {
        produtos: produtos,
        categoria: "cabelo"
      });
    })
    .catch((error) => {
      console.log(error);
    });
});
router.post("/produtos/new", (req, res) => {
  const nome = req.body.nome;
  const preco = req.body.preco;
  const categoria = req.body.categoria;
  Produto.create({
    nome: nome,
    preco: preco,
    categoria: categoria,
  })
    .then(() => {
      res.redirect("/produtos");
    })
    .catch((error) => {
      console.log(error);
    });
});
router.get("/produtos/delete/:id", (req, res) => {
  const id = req.params.id;
  Produto.destroy({
    where: { id: id },
  })
    .then(() => {
      res.redirect("/produtos");
    })
    .catch((error) => {
      console.log(error);
    });
});
router.get("/produtos/edit/:id", (req, res) => {
  const id = req.params.id;
  Produto.findByPk(id)
    .then((produto) => {
      res.render("produtoEdit", {
        produto: produto,
      });
    })
    .catch((error) => {
      console.log(error);
    });
});
router.post("/produtos/update", (req, res) => {
  const id = req.body.id;
  const nome = req.body.nome;
  const preco = req.body.preco;
  const categoria = req.body.categoria;
  Produto.update(
    {
      nome: nome,
      preco: preco,
      categoria: categoria,
    },
    {
      where: { id: id },
    }).then(() => {
      res.redirect("/produtos");
    }).catch((error) => {
    console.log(error);
  });
});
export default router;
