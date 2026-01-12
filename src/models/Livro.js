import mongoose, { mongo } from "mongoose";

const livroSchema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    titulo: {
      type: String,
      required: [true, "O título do livro é obrigatório."],
    },
    editora: {
      type: String,
      required: [true, "O nome da editora é obrigatório"],
    },
    preco: { type: Number },
    paginas: {
      type: Number,
      min: 10,
      max: 5000,
    },
    autor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "autores",
      required: [true, "O nome do autor(a) é obrigatório"],
    },
  },
  { versionKey: false }
);

const livro = mongoose.model("livros", livroSchema);

export default livro;
