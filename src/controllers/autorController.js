import { autor } from "../models/Autor.js";

class AutorController {
  static cadastrarAutor = async (req, res) => {
    try {
      let novoAutor = new autor(req.body);
      const autorResultado = await novoAutor.save();
      res
        .status(201)
        .send(autorResultado.toJSON());
    } catch (erro) {
      res
        .status(500)
        .send({ message: `${erro.message} - falha ao cadastrar autor.` });
    }
  }

  static listarAutores = async (req, res) => {
    try {
      const autoresResultado = await autor.find();
      res.status(200).json(autoresResultado);
    } catch (erro) {
      res
        .status(500)
        .send({ message: "Erro interno no servidor." });
    }
  }

  static listarAutorPorId = async (req, res) => {
    try {
      const id = req.params.id;
      const autorEncontrado = await autor.findById(id);
      res.status(200).json(autorEncontrado);
    } catch (erro) {
      res
        .status(404)
        .send({ message: `${erro.message} - id do autor não localizado.` });
    }
  }

  static atualizarAutorPorId = async (req, res) => {
    try {
      const id = req.params.id;
      const payload = req.body;
      await autor.findByIdAndUpdate(id, payload);
      res.status(200).send({ message: "Autor atualizado com sucesso." });
    } catch (erro) {
      res
        .status(500)
        .send({ message: erro.message });
    }
  }

  static deletarAutorPorId = async (req, res) => {
    try {
      const id = req.params.id;
      await autor.findByIdAndDelete(id);
      res.status(200).json({ message: "Autor deletado com sucesso." });
    } catch (erro) {
      res
        .status(500)
        .send({ message: erro.message});
    }
  }
}

export default AutorController;
