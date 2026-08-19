import express from "express";

import conectaNaDatabase from "./config/databaseConnect.js";

import livro from "./models/Livro.js";

const conexao = await conectaNaDatabase();

conexao.on("error", (erro) => {
  console.error("Falha na conexão com o banco de dados", erro);
})

conexao.once("open", () => {
  console.log("Conexão com o banco de dados realizada com sucesso!")
})


const app = express();
app.use(express.json());

/*const livros = [
  {
    id: 1,
    titulo: "Senhor dos Anéis",
    autor: "J.R.R. Tolkien",
    lancamento: 1954,
  },
  {
    id: 2,
    titulo: "O Hobbit",
    autor: "J.R.R. Tolkien",
    lancamento: 1937,
  },
];*/

/*function buscaLivro(id) {
  return livros.findIndex((livro) => {
    return livro.id === Number(id);
  });
}*/

app.get("/", (req, res) => {
  res.status(200).send("Curso de Node.js com Express.");
});

app.get("/livros", async (req, res) => {
  const listaLivros = await livro.find({})
  res.status(200).json(listaLivros);
});

app.get("/livros/:id", (req, res) => {
  const index = buscaLivro(req.params.id);
  res.status(200).json(livros[index]);
});

app.put("/livros/:id", (req, res) => {
  const index = buscaLivro(req.params.id);
  livros[index].titulo = req.body.titulo;
  res.status(200).json(livros);
});

app.delete("/livros/:id", (req, res) => {
  const index = buscaLivro(req.params.id);
  livros.splice(index, 1)
  res.status(200).send("Livro Deletado.")
});

app.post("/livros", (req, res) => {
  livros.push(req.body);
  res.status(201).send("Livro cadastrado com sucesso!");
});

export default app;