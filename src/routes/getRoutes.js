import { Router } from "express";
import {
  obtenerEquipoController,
  obtenerEquiposController,
  obtenerIncidenciaController,
  obtenerIncidenciasController,
  obtenerTrainerController,
  obtenerTrainersController,
} from "../controllers/getControllers.js";
import { obtenerEquipoDTO, obtenerIncidenciaDTO } from "./DTO/getDTO.js";
import { limitPets, limitSize } from "../utils/limit.js";

const getInitRoute = () => {
  const router = Router();
  router.get("/obtenerEquipos", limitPets, limitSize, obtenerEquiposController);
  router.get(
    "/obtenerEquipo",
    limitPets,
    limitSize,
    obtenerEquipoDTO,
    obtenerEquipoController
  );
  router.get(
    "/obtenerIncidencias",
    limitPets,
    limitSize,
    obtenerIncidenciasController
  );
  router.get(
    "/obtenerIncidencia",
    limitPets,
    limitSize,
    obtenerIncidenciaDTO,
    obtenerIncidenciaController
  );
  router.get(
    "/obtenerTrainers",
    limitPets,
    limitSize,
    obtenerTrainersController
  );
  router.get("/obtenerTrainer", limitPets, limitSize, obtenerTrainerController);
  return router;
};

export { getInitRoute };
