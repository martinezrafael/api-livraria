import NaoEncontrado from "../erros/NaoEncontrado.js";
import { Autor, Livro } from "../models/index.js";

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
      const livroResultado = await Livro.findById(id)
        .populate("autor", "nome")
        .exec();

      if (livroResultado !== null) {
        res.status(200).json(livroResultado);
      } else {
        next(new NaoEncontrado("Id do livro não localizado"));
      }
    } catch (erro) {
      next(erro);
    }
  };

  static atualizarLivroPorId = async (req, res, next) => {
    try {
      const id = req.params.id;
      const livroResultado = await Livro.findByIdAndUpdate(id, {
        $set: req.body,
      });

      if (livroResultado !== null) {
        res.status(200).json({ message: "Livro atualizado com sucesso." });
      } else {
        next(new NaoEncontrado("Id do livro não localizado"));
      }
    } catch (erro) {
      next(erro);
    }
  };

  static deletarLivroPorId = async (req, res, next) => {
    try {
      const id = req.params.id;
      const livroResultado = await Livro.findByIdAndDelete(id);

      if (livroResultado !== null) {
        res.status(200).json({ message: "Livro deletado com sucesso." });
      } else {
        next(new NaoEncontrado("Id do livro não localizado"));
      }
    } catch (erro) {
      next(erro);
    }
  };

  static listarLivrosPorFiltro = async (req, res, next) => {
    try {
      const busca = await processaBusca(req.query);

      if(busca !== null){
        const livrosResultado = await Livro.find(busca).populate("autor");
        res.status(200).json(livrosResultado);
      } else {
        res.status(200).send([]);
      }

    } catch (erro) {
      next(erro);
    }
  };
}

async function processaBusca(parametros) {
  const { editora, titulo, minPaginas, maxPaginas, nomeAutor } = parametros;

  let busca = {};

  if (editora) busca.editora = editora;
  if (titulo) busca.titulo = { $regex: titulo, $options: "i" };

  if (minPaginas || maxPaginas) busca.paginas = {};

  if (minPaginas) busca.paginas.$gte = minPaginas;
  if (maxPaginas) busca.paginas.$lte = maxPaginas;

  if (nomeAutor) {
    // Trocado "autores" por "Autor"
    const autor = await Autor.findOne({ nome: nomeAutor });
    

    if (autor !== null) {
      busca.autor = autor._id;
    } else {
      busca = null;
    }
  }

  return busca;
}

export default LivroController;
