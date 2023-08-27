import { Router } from "express";
import {
  obtenerEquipoController,
  obtenerEquiposController,
  obtenerIncidenciaController,
  obtenerIncidenciasController,
  obtenerTrainersController,
} from "../controllers/getControllers.js";
import { obtenerEquipoDTO, obtenerIncidenciaDTO } from "./DTO/getDTO.js";

const getInitRoute = () => {
  const router = Router();
  router.get("/obtenerEquipos", obtenerEquiposController);
  router.get("/obtenerEquipo", obtenerEquipoDTO, obtenerEquipoController);
  router.get("/obtenerIncidencias", obtenerIncidenciasController);
  router.get(
    "/obtenerIncidencia",
    obtenerIncidenciaDTO,
    obtenerIncidenciaController
  );
  router.get("/obtenerTrainers", obtenerTrainersController);
  return router;
};

export { getInitRoute };
