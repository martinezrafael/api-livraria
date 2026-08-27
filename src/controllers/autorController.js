import NaoEncontrado from "../erros/NaoEncontrado.js";
import { Autor } from "../models/index.js";

class AutorController {
  static cadastrarAutor = async (req, res, next) => {
    try {
      let novoAutor = new Autor(req.body);
      const autorResultado = await novoAutor.save();
      res.status(201).send(autorResultado.toJSON());
    } catch (erro) {
      next(erro);
    }
  };

  static listarAutores = async (req, res, next) => {
    try {
      const autoresResultado = Autor.find();

      req.resultado = autoresResultado;

      next();
    } catch (erro) {
      next(erro);
    }
  };

  static listarAutorPorId = async (req, res, next) => {
    try {
      const id = req.params.id;

      const autorEncontrado = await Autor.findById(id);


      if (autorEncontrado !== null) {
        res.status(200).json(autorEncontrado);
      } else {
        next(new NaoEncontrado("id do autor não localizado."));
      }

    } catch (erro) {
      next(erro);
    }
  };

  static atualizarAutorPorId = async (req, res, next) => {
    try {
      const id = req.params.id;
      const autorResultado = await autores.findByIdAndUpdate(id, {
        $set: req.body,
      });

      if (autorResultado !== null) {
        res.status(200).send({ message: "Autor atualizado com sucesso." });
      } else {
        next(new NaoEncontrado("Id do autor não localizado."));
      }
    } catch (erro) {
      next(erro);
    }
  };

  static deletarAutorPorId = async (req, res, next) => {
    try {
      const id = req.params.id;
      const autorResultdo = await Autor.findByIdAndDelete(id);

      if (autorResultdo !== null) {
        res.status(200).json({ message: "Autor deletado com sucesso." });
      } else {
        next(new NaoEncontrado("Id do autor não localizado."));
      }
    } catch (erro) {
      next(erro);
    }
  };
}

export default AutorController;
