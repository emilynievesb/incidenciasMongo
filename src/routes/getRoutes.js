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
import {
  authorizationMiddleware,
  contentMiddlewareEquipo,
  contentMiddlewareIncidencia,
  contentMiddlewareTrainer,
} from "../utils/collectionAuth.js";

const getInitRoute = () => {
  const router = Router();
  router.get(
    "/obtenerEquipos",
    limitPets,
    limitSize,
    authorizationMiddleware,
    contentMiddlewareEquipo,
    obtenerEquiposController
  );
  router.get(
    "/obtenerEquipo",
    limitPets,
    limitSize,
    authorizationMiddleware,
    contentMiddlewareEquipo,
    obtenerEquipoDTO,
    obtenerEquipoController
  );
  router.get(
    "/obtenerIncidencias",
    limitPets,
    limitSize,
    authorizationMiddleware,
    contentMiddlewareIncidencia,
    obtenerIncidenciasController
  );
  router.get(
    "/obtenerIncidencia",
    limitPets,
    limitSize,
    authorizationMiddleware,
    contentMiddlewareIncidencia,
    obtenerIncidenciaDTO,
    obtenerIncidenciaController
  );
  router.get(
    "/obtenerTrainers",
    limitPets,
    limitSize,
    authorizationMiddleware,
    contentMiddlewareTrainer,
    obtenerTrainersController
  );
  router.get(
    "/obtenerTrainer",
    limitPets,
    limitSize,
    authorizationMiddleware,
    contentMiddlewareTrainer,
    obtenerTrainerController
  );
  return router;
};

export { getInitRoute };
