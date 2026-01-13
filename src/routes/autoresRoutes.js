import express from "express";
import AutorController from "../controllers/autorController.js";
import paginar from "../middlewares/paginar.js";

const routes = express.Router();

routes.get("/autores", AutorController.listarAutores, paginar);
routes.get("/autores/:id", AutorController.listarAutoresPorId);
routes.post("/autores", AutorController.cadastrarAutor);
routes.put("/autores/:id", AutorController.atualizarAutorPorId);
routes.delete("/autores/:id", AutorController.deletarAutorPorId);

export default routes;
