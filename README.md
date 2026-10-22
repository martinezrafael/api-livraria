# 📚 API Livraria

API REST desenvolvida com Node.js, Express e MongoDB para o gerenciamento de livros e autores.

O projeto permite cadastrar, consultar, atualizar e excluir registros, além de oferecer funcionalidades de busca e paginação para a listagem de livros.

## 🚀 Tecnologias utilizadas

- **Node.js** — ambiente de execução JavaScript.
- **Express** — framework para criação das rotas e gerenciamento das requisições HTTP.
- **MongoDB** — banco de dados NoSQL.
- **Mongoose** — biblioteca para modelagem e interação com o MongoDB.
- **Dotenv** — gerenciamento de variáveis de ambiente.
- **Nodemon** — reinicialização automática do servidor durante o desenvolvimento.

## ✨ Funcionalidades

### 📖 Livros

- Cadastro de livros.
- Listagem de livros.
- Consulta de um livro por ID.
- Busca de livros por filtros.
- Atualização de informações de um livro.
- Exclusão de livros.
- Paginação dos resultados das listagens.

### ✍️ Autores

- Cadastro de autores.
- Listagem de autores.
- Consulta de um autor por ID.
- Atualização de informações de um autor.
- Exclusão de autores.
- Paginação da listagem.

## 📋 Pré-requisitos

Antes de executar a aplicação, você precisará instalar:

- [Node.js](<https://nodejs.org/>)
- npm, incluído na instalação do Node.js.
- Uma instância do MongoDB local ou um banco de dados hospedado, como o MongoDB Atlas.
- [Git](<https://git-scm.com/>), para clonar o repositório.

## ⚙️ Instalação e configuração

### 1\. Clone o repositório

```
git clone https://github.com/martinezrafael/api-livraria.git
```

### 2\. Acesse a pasta do projeto

```
cd api-livraria
```

### 3\. Instale as dependências

```
npm install
```

### 4\. Configure as variáveis de ambiente

Crie um arquivo chamado `.env` na raiz do projeto.

Adicione a variável de conexão com o MongoDB:

```
DB_URL_CONNECTION=sua_string_de_conexao_mongodb
```

Substitua `sua_string_de_conexao_mongodb` pela string de conexão do seu banco de dados.

**Importante:** não compartilhe credenciais do banco de dados nem envie seu arquivo `.env` para o GitHub.

### 5\. Inicie o servidor

Execute o comando:

```
npm run dev
```

O projeto utiliza o Nodemon para executar o servidor durante o desenvolvimento.

Por padrão, a aplicação está configurada para utilizar a porta `3000`.

Quando o servidor iniciar e a conexão com o banco de dados for estabelecida, será possível realizar requisições à API.

## 🔗 Endpoints

A API disponibiliza rotas para o gerenciamento de livros e autores.

**URL base local:**

```
http://localhost:3000
```

### 📚 Rotas de livros

| Método HTTP | Endpoint | Descrição |
| --- | --- | --- |
| POST | `/livros` | Cadastra um novo livro |
| GET | `/livros` | Lista os livros com paginação |
| GET | `/livros/busca` | Busca livros por filtros |
| GET | `/livros/:id` | Consulta um livro pelo ID |
| PUT | `/livros/:id` | Atualiza um livro |
| DELETE | `/livros/:id` | Exclui um livro |

### ✍️ Rotas de autores

| Método HTTP | Endpoint | Descrição |
| --- | --- | --- |
| POST | `/autores` | Cadastra um novo autor |
| GET | `/autores` | Lista os autores com paginação |
| GET | `/autores/:id` | Consulta um autor pelo ID |
| PUT | `/autores/:id` | Atualiza um autor |
| DELETE | `/autores/:id` | Exclui um autor |

### 🏠 Rota inicial

| Método HTTP | Endpoint | Descrição |
| --- | --- | --- |
| GET | `/` | Retorna uma mensagem de boas-vindas |

## 🧪 Testando a API

Você pode testar os endpoints utilizando ferramentas como:

- [Postman](<https://www.postman.com/>)
- [Insomnia](<https://insomnia.rest/>)

Para consultar a lista de livros, por exemplo, envie uma requisição:

```
GET http://localhost:3000/livros
```

Para consultar os autores:

```
GET http://localhost:3000/autores
```

Para buscar um livro específico, substitua `{id}` pelo identificador correspondente:

```
GET http://localhost:3000/livros/{id}
```

As requisições de cadastro e atualização devem utilizar o corpo JSON esperado pelos respectivos controladores.

## 📁 Estrutura do projeto

```
api-livraria/
├── src/
│   ├── config/
│   │   └── databaseConnect.js
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   │   ├── index.js
│   │   ├── livroRoutes.js
│   │   └── autorRoutes.js
│   └── app.js
├── .env
├── .gitignore
├── package.json
├── package-lock.json
├── server.js
└── README.md
```

_Observação: o diagrama apresenta os principais arquivos e diretórios identificados no projeto. Os arquivos de configuração e os modelos devem ser consultados no repositório para obter a estrutura completa._

## 🎯 Objetivo do projeto

Este projeto tem como objetivo desenvolver uma API REST para o gerenciamento de uma livraria, colocando em prática conceitos importantes do desenvolvimento backend, como:

- Criação e organização de rotas REST.
- Desenvolvimento de operações CRUD.
- Integração com banco de dados MongoDB.
- Modelagem de dados com Mongoose.
- Separação de responsabilidades entre rotas, controladores e middlewares.
- Implementação de paginação e busca de registros.
- Configuração de variáveis de ambiente.

## 👨‍💻 Autor

**Rafael Molina Martinez**

- GitHub: @martinezrafael
- Repositório: api-livraria

## 📄 Licença

Este projeto utiliza a licença ISC.

---

⭐ Se você gostou do projeto, considere deixar uma estrela no repositório\!
