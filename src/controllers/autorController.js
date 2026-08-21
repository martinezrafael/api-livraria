import { autor } from "../models/Autor.js";

class AutorController {
  static cadastrarAutor = async (req, res) => {
    try {
      let novoAutor = new autor(req.body);
      const autorResultado = await novoAutor.save();
      res
        .status(201)
        .send(autorResultado.toJSON());
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - falha ao cadastrar autor.` });
    }
  }

  static listarAutores = async (req, res) => {
    try {
      const autoresResultado = await autor.find();
      res.status(200).json(autoresResultado);
    } catch (erro) {
      res
        .status(500)
        .json({ message: "Erro interno no servidor." });
    }
  }

  static async listarAutorPorId(req, res) {
    try {
      const id = req.params.id;
      const autorEncontrado = await autor.findById(id);
      res.status(200).json(autorEncontrado);
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - falha ao buscar o autor.` });
    }
  }

  static async atualizarAutorPorId(req, res) {
    try {
      const id = req.params.id;
      const payload = req.body;
      await autor.findByIdAndUpdate(id, payload);
      res.status(200).json({ message: "Autor atualizado com sucesso." });
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - falha ao atualizar o autor.` });
    }
  }

  static async deletarAutorPorId(req, res) {
    try {
      const id = req.params.id;
      await autor.findByIdAndDelete(id);
      res.status(200).json({ message: "Autor deletado com sucesso." });
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - falha ao deletar o autor.` });
    }
  }
}

export default AutorController;
