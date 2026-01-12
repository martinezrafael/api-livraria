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
      enum: {
        values: ["Casa do Código", "Alura"],
        message: "A editora {VALUE} não é um valor permitido",
      },
    },
    preco: { type: Number },
    paginas: {
      type: Number,
      validate: {
        validator: (valor) => {
          return valor >= 10 && valor <= 5000;
        },
        message:
          "O número de páginas deve estar entre 10 e 5.000. Valor fornecido: {VALUE}",
      },
      /*
      min: [
        10,
        "O número de páginas deve estar entre 10 e 5.000. Valor fornecido: {VALUE}",
      ],
      max: [
        5000,
        "O número de páginas deve estar entre 10 e 5.000. Valor fornecido: {VALUE}",
      ],
      */
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
