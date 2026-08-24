import Livro from "../models/Livro.js";

class LivroController {
  static cadastrarLivro = async (req, res, next) => {
    try {
      let livro = new Livro(req.body);
      const livroResultado = await livro.save();
      res.status(201).json(livroResultado.toJSON());
    } catch (erro) {
      next(erro);
    }
  };

  static listarLivros = async (req, res, next) => {
    try {
      const livrosResultado = await Livro.find().populate("autor").exec();
      res.status(200).json(livrosResultado);
    } catch (erro) {
      next(erro);
    }
  };

  static listarLivroPorId = async (req, res, next) => {
    try {
      const id = req.params.id;
      const livroResultado = await Livro
        .findById(id)
        .populate("autor", "nome")
        .exec();

      if(livroResultado !== null){
        res.status(200).json(livroResultado);
      } else {
        res.status(404).send({ message: "Id do livro não localizado." })
      }

    } catch (erro) {
      next(erro);
    }
  };

  static atualizarLivroPorId = async (req, res, next) => {
    try {
      const id = req.params.id;
      await Livro.findByIdAndUpdate(id, { $set: req.body });
      res.status(200).json({ message: "Livro atualizado com sucesso." });
    } catch (erro) {
      next(erro);
    }
  };

  static deletarLivroPorId = async (req, res, next) => {
    try {
      const id = req.params.id;
      await Livro.findByIdAndDelete(id);
      res.status(200).json({ message: "Livro deletado com sucesso." });
    } catch (erro) {
      next(erro);
    }
  };

  static listarLivrosPorEditora = async (req, res, next) => {
    const editora = req.query.editora;
    try {
      const livrosPorEditora = await Livro.find({ editora: editora });
      res.status(200).json(livrosPorEditora);
    } catch (erro) {
      next(erro);
    }
  };
}

export default LivroController;
