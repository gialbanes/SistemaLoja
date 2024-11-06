import express from "express";
const app = express();

import connection from "./config/sequelize-config.js";

import ClientesController from "./controllers/ClientesController.js";
import ProdutosController from "./controllers/ProdutosController.js";
import PedidosController from "./controllers/PedidosController.js";
import UsersController from './controllers/UsersController.js';

import session from "express-session";

import Auth from "./middleware/Auth.js";

import flash from "express-flash";
app.use(flash())

app.use(session({
  secret: "lojasecret",
  cookie: {maxAge: 3600000}, 
  saveUninitialized: false,
  resave: false
}))

app.use(express.urlencoded({ extended: false }));

connection
  .authenticate()
  .then(() => {
    console.log("Conexão com o banco de dados estabelecida!");
  })
  .catch((error) => {
    console.log(error);
  });

connection.query(`CREATE DATABASE IF NOT EXISTS loja_oceane;`).then(() => {
  console.log("Banco de dados já criado!")
}).catch((error) => {
  console.log(error);
})

app.set("view engine", "ejs");

app.use(express.static("public"));

app.use("/", ClientesController);
app.use("/", ProdutosController);
app.use("/", PedidosController);
app.use("/", UsersController);

app.get("/", Auth, function (req, res) {
  res.render("index", {
    messages: req.flash()
  });
});

const port = 8081;
app.listen(port, (error) => {
  if (error) {
    console.log(`Ocorreu um erro: ${error}`);
  } else {
    console.log(`Servidor iniciado em: http://localhost:${port}`);
  }
});
