import { autor } from "../models/Autor.js";

class AutorController {
  static listarAutores = async (req, res, next) => {
    try {
      const listaAutores = await autor.find();
      res.status(200).json(listaAutores);
    } catch (error) {
      next(error);
    }
  };

  static listarAutoresPorId = async (req, res, next) => {
    try {
      const id = req.params.id;
      const autorEncontrado = await autor.findById(id);

      if (autorEncontrado !== null) {
        res.status(200).json(autorEncontrado);
      } else {
        res.status(404).json({ message: "Id do autor não localizado." });
      }
    } catch (error) {
      next(error);
    }
  };

  static cadastrarAutor = async (req, res, next) => {
    try {
      const novoAutor = await autor.create(req.body);
      res.status(201).json({ message: "Criado com sucesso", autor: novoAutor });
    } catch (error) {
      next(error);
    }
  };

  static atualizarAutorPorId = async (req, res, next) => {
    try {
      const id = req.params.id;
      await autor.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "Autor atualizado com sucesso!" });
    } catch (error) {
      next(error);
    }
  };

  static deletarAutorPorId = async (req, res, next) => {
    try {
      const id = req.params.id;
      await autor.findByIdAndDelete(id);
      res.status(200).json({ message: "Autor deletado com sucesso!" });
    } catch (error) {
      next(error);
    }
  };
}

export default AutorController;
