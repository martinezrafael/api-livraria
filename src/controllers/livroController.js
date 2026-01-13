import RequisicaoIncorreta from "../erros/RequisicaoIncorreta.js";
import { livro, autor } from "../models/index.js";

class LivroController {
  static listarLivros = async (req, res, next) => {
    try {
      let { limite = 5, pagina = 1, ordenacao = "_id:-1'" } = req.query;

      let [campoOrdenacao, ordem] = ordenacao.split(":");

      limite = parseInt(limite);
      pagina = parseInt(pagina);
      ordem = parseInt(ordem);

      if (limite > 0 && pagina > 0) {
        const listaLivros = await livro
          .find()
          .sort({ [campoOrdenacao]: ordem })
          .skip((pagina - 1) * limite)
          .limit(limite);
        res.status(200).json(listaLivros);
      } else {
        next(new RequisicaoIncorreta());
      }
    } catch (error) {
      next(error);
    }
  };

  static listarLivroPorId = async (req, res, next) => {
    try {
      const id = req.params.id;
      const livroEncontrado = await livro.findById(id);
      res.status(200).json(livroEncontrado);
    } catch (error) {
      next(error);
    }
  };

  static cadastrarLivro = async (req, res, next) => {
    const novoLivro = req.body;
    try {
      const autorEncontrado = await autor.findById(novoLivro.autor);
      const livroCompleto = {
        ...novoLivro,
        autor: { ...autorEncontrado._doc },
      };
      const livroCriado = await livro.create(livroCompleto);
      res
        .status(201)
        .json({ message: "Criado com sucesso", livro: livroCriado });
    } catch (error) {
      next(error);
    }
  };

  static atualizarLivroPorId = async (req, res, next) => {
    try {
      const id = req.params.id;
      await livro.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "Livro atualizado com sucesso!" });
    } catch (error) {
      next(error);
    }
  };

  static deletarLivroPorId = async (req, res, next) => {
    try {
      const id = req.params.id;
      await livro.findByIdAndDelete(id);
      res.status(200).json({ message: "Livro deletado com sucesso!" });
    } catch (error) {
      next(error);
    }
  };

  static listarLivrosPorFiltro = async (req, res, next) => {
    try {
      const busca = await processaBusca(req.query);

      if (busca !== null) {
        const livrosPorEditora = await livro.find(busca).populate("autor");
        res.status(200).json(livrosPorEditora);
      } else {
        res.status(200).json([]);
      }
    } catch (error) {
      next(error);
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
    const autor = await autor.findOne({ nome: nomeAutor });

    if (autor !== null) {
      busca.autor = autor._id;
    } else {
      busca = null;
    }
  }

  return busca;
}

export default LivroController;
