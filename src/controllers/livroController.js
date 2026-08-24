import livro from "../models/Livro.js";
import { autor } from "../models/Autor.js";

class LivroController {
  static cadastrarLivro = async (req, res) => {
    try {
      let livro = new livro(req.body);
      const livroResultado = await livro.save();
      res.status(201).json(livroResultado.toJSON());
    } catch (erro) {
      res
        .status(500)
        .send({ message: `${erro.message} - falha ao cadastrar livro.` });
    }
  };

  static listarLivros  = async (req, res) => {
    try {
      const livrosResultado = await livro.find().populate("autor").exec();
      res.status(200).json(livrosResultado);
    } catch (error) {
      res.status(500).send({ message: "Erro interno no servidor." });
    }
  }

  static listarLivroPorId = async (req, res) => {
    try {
      const id = req.params.id;
      const livroResultado = await livro.findById(id).populate("autor", "nome").exec();
      res.status(200).json(livroResultado);
    } catch (error) {
      res
        .status(400)
        .send({ message: `${error.message} - id do livro não localizado.` });
    }
  }

  static atualizarLivroPorId = async (req, res) => {
    try {
      const id = req.params.id;
      await livro.findByIdAndUpdate(id, {$set: req.body});
      res.status(200).json({ message: "Livro atualizado com sucesso." });
    } catch (erro) {
      res
        .status(500)
        .send({ message: erro.message });
    }
  }

  static deletarLivroPorId =  async (req, res) => {
    try {
      const id = req.params.id;
      await livro.findByIdAndDelete(id);
      res.status(200).json({ message: "Livro deletado com sucesso." });
    } catch (error) {
      res
        .status(500)
        .send({ message: error.message });
    }
  }

  static listarLivrosPorEditora = async (req, res) => {
    const editora = req.query.editora;
    try {
      const livrosPorEditora = await livro.find({ editora: editora });
      res.status(200).json(livrosPorEditora);
    } catch (error) {
      res
        .status(500)
        .send({
          message: "Erro interno no servidor.",
        });
    }
  }
}

export default LivroController;
