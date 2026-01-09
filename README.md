# API Livraria 📚

![Status](https://img.shields.io/badge/status-em%20desenvolvimento-yellow)

## 📝 Descrição

API RESTful para o gerenciamento de uma livraria, permitindo o cadastro e controle de livros e seus respectivos autores. Este projeto foi desenvolvido com Node.js, Express e MongoDB, seguindo uma arquitetura MVC.

## 📋 Índice

- [API Livraria 📚](#api-livraria-)
  - [📝 Descrição](#-descrição)
  - [📋 Índice](#-índice)
  - [✨ Funcionalidades](#-funcionalidades)
  - [🚀 Tecnologias Utilizadas](#-tecnologias-utilizadas)
  - [🔧 Pré-requisitos](#-pré-requisitos)
  - [▶️ Como Rodar a Aplicação](#️-como-rodar-a-aplicação)
  - [🌐 Endpoints da API](#-endpoints-da-api)
    - [Livros](#livros)
    - [Autores](#autores)
  - [✒️ Autor](#️-autor)

## ✨ Funcionalidades

- **Livros**: CRUD completo (Criar, Ler, Atualizar, Deletar) e busca por editora.
- **Autores**: CRUD completo (Criar, Ler, Atualizar, Deletar).

## 🚀 Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript no servidor.
- **Express**: Framework para construção da API.
- **MongoDB**: Banco de dados NoSQL para armazenamento dos dados.
- **Mongoose**: ODM para modelar os objetos do MongoDB.
- **Nodemon**: Ferramenta para reiniciar o servidor automaticamente durante o desenvolvimento.
- **Dotenv**: Para gerenciamento de variáveis de ambiente.

## 🔧 Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:

- [Git](https://git-scm.com)
- [Node.js](https://nodejs.org/en/)
- Uma instância do MongoDB rodando (localmente ou em um serviço de nuvem como o [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)).
- Um editor de código de sua preferência, como o [VSCode](https://code.visualstudio.com/).

## ▶️ Como Rodar a Aplicação

```bash
# 1. Clone este repositório
$ git clone <URL_DO_SEU_REPOSITORIO>

# 2. Acesse a pasta do projeto
$ cd api-livraria

# 3. Instale as dependências
$ npm install

# 4. Crie um arquivo .env na raiz do projeto e adicione a string de conexão do seu MongoDB.
# Exemplo:
# DB_CONNECTION_STRING="mongodb+srv://<user>:<password>@cluster.mongodb.net/livraria?retryWrites=true&w=majority"

# 5. Rode a aplicação em modo de desenvolvimento
$ npm run dev

# O servidor será iniciado na porta 3000 (ou outra, se configurado).
# Acesse http://localhost:3000 em seu navegador ou cliente de API.
```

## 🌐 Endpoints da API

A seguir estão os endpoints disponíveis na API.

### Livros

| Método HTTP | Rota            | Descrição                                   |
| ----------- | --------------- | ------------------------------------------- |
| `GET`       | `/livros`       | Lista todos os livros cadastrados.          |
| `GET`       | `/livros/busca` | Busca livros por editora (via query param). |
| `GET`       | `/livros/:id`   | Busca um livro específico pelo seu ID.      |
| `POST`      | `/livros`       | Cadastra um novo livro.                     |
| `PUT`       | `/livros/:id`   | Atualiza um livro existente pelo seu ID.    |
| `DELETE`    | `/livros/:id`   | Deleta um livro existente pelo seu ID.      |

### Autores

| Método HTTP | Rota           | Descrição                                |
| ----------- | -------------- | ---------------------------------------- |
| `GET`       | `/autores`     | Lista todos os autores cadastrados.      |
| `GET`       | `/autores/:id` | Busca um autor específico pelo seu ID.   |
| `POST`      | `/autores`     | Cadastra um novo autor.                  |
| `PUT`       | `/autores/:id` | Atualiza um autor existente pelo seu ID. |
| `DELETE`    | `/autores/:id` | Deleta um autor existente pelo seu ID.   |

## ✒️ Autor

Projeto desenvolvido para fins de estudo.

**[Seu Nome Aqui]**

- Github: [@martinezrafael](https://github.com/martinezrafael)
- LinkedIn: [Rafael Molina Martinez](https://www.linkedin.com/in/molinamartinez/)

---

Feito com ❤️!
