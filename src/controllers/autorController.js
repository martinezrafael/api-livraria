import { autor } from "../models/Autor.js";
import NaoEncontrado from "../erros/NaoEncontrado.js";

class AutorController {
  static cadastrarAutor = async (req, res, next) => {
    try {
      let novoAutor = new autor(req.body);
      const autorResultado = await novoAutor.save();
      res.status(201).send(autorResultado.toJSON());
    } catch (erro) {
     next(erro);
    }
  };

  static listarAutores = async (req, res, next) => {
    try {
      const autoresResultado = await autor.find();
      res.status(200).json(autoresResultado);
    } catch (erro) {
      next(erro);
    }
  };

  static listarAutorPorId = async (req, res, next) => {
    try {
      const id = req.params.id;
      const autorEncontrado = await autor.findById(id);
      if (autorEncontrado !== null) {
        res.status(200).json(autorEncontrado);
      } else {
        next(new NaoEncontrado("id do autor não localizado."))
        //res.status(404).send({ message: "id do autor não localizado." });
      }
    } catch (erro) {
      next(erro);
    }
  };

  static atualizarAutorPorId = async (req, res, next) => {
    try {
      const id = req.params.id;
      const payload = req.body;
      await autor.findByIdAndUpdate(id, payload);
      res.status(200).send({ message: "Autor atualizado com sucesso." });
    } catch (erro) {
      next(erro);
    }
  };

  static deletarAutorPorId = async (req, res, next) => {
    try {
      const id = req.params.id;
      await autor.findByIdAndDelete(id);
      res.status(200).json({ message: "Autor deletado com sucesso." });
    } catch (erro) {
      next(erro);
    }
  };
}

export default AutorController;
