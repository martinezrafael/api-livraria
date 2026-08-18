import express from 'express';

const app = express();
app.use(express.json());

const livros = [
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
]

app.get("/", (req, res) => {
    res.status(200).send("Curso de Node.js com Express.");
})

app.get("/livros", (req, res) => {
    res.status(200).json(livros);
})

app.post("/livros", (req, res) => {
    livros.push(req.body);
    res.status(201).send("Livro cadastrado com sucesso!");
})

export default app;