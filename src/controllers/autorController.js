import mongoose from "mongoose";
import { autor } from "../models/Autor.js";

class AutorController {
  static cadastrarAutor = async (req, res) => {
    try {
      let novoAutor = new autor(req.body);
      const autorResultado = await novoAutor.save();
      res.status(201).send(autorResultado.toJSON());
    } catch (erro) {
      res
        .status(500)
        .send({ message: `${erro.message} - falha ao cadastrar autor.` });
    }
  };

  static listarAutores = async (req, res) => {
    try {
      const autoresResultado = await autor.find();
      res.status(200).json(autoresResultado);
    } catch (erro) {
      res.status(500).send({ message: "Erro interno no servidor." });
    }
  };

  static listarAutorPorId = async (req, res) => {
    try {
      const id = req.params.id;
      const autorEncontrado = await autor.findById(id);
      if (autorEncontrado !== null) {
        res.status(200).json(autorEncontrado);
      } else {
        res.status(404).send({ message: "id do autor não localizado." });
      }
    } catch (erro) {
      if (erro instanceof mongoose.Error.CastError) {
        res
          .status(400)
          .send({ message: "Um ou mais dados fornecidos estão incorretos." });
      } else {
        res.status(500).send({ message: "Erro interno no servidor." });
      }
    }
  };

  static atualizarAutorPorId = async (req, res) => {
    try {
      const id = req.params.id;
      const payload = req.body;
      await autor.findByIdAndUpdate(id, payload);
      res.status(200).send({ message: "Autor atualizado com sucesso." });
    } catch (erro) {
      res.status(500).send({ message: erro.message });
    }
  };

  static deletarAutorPorId = async (req, res) => {
    try {
      const id = req.params.id;
      await autor.findByIdAndDelete(id);
      res.status(200).json({ message: "Autor deletado com sucesso." });
    } catch (erro) {
      res.status(500).send({ message: erro.message });
    }
  };
}

export default AutorController;
