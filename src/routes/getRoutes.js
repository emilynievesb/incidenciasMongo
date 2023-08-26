import { Router } from "express";
import {
  obtenerEquipoController,
  obtenerEquiposController,
  obtenerIncidenciasController,
} from "../controllers/getControllers.js";
import { obtenerEquipoDTO } from "./DTO/getDTO.js";

const getInitRoute = () => {
  const router = Router();
  router.get("/obtenerEquipos", obtenerEquiposController);
  router.get("/obtenerEquipo", obtenerEquipoDTO, obtenerEquipoController);
  router.get("/obtenerIncidencias", obtenerIncidenciasController);
  return router;
};

export { getInitRoute };
