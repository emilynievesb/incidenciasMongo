import { Router } from "express";
import {
  postEquipoController,
  postIncidenciaController,
  postTrainerController,
} from "../controllers/postControllers.js";
import {
  postEquipoDTO,
  postIncidenciaDTO,
  postTrainerDTO,
} from "./DTO/postDTO.js";
import { limitPets, limitSize } from "../utils/limit.js";
import {
  authorizationMiddleware,
  contentMiddlewareIncidencia,
  contentMiddlewareTrainer,
} from "../utils/collectionAuth.js";

const postInitRoute = () => {
  const router = Router();
  router.post(
    "/agregarEquipo",
    limitPets,
    limitSize,
    authorizationMiddleware,
    contentMiddlewareEquipo,
    postEquipoDTO,
    postEquipoController
  );
  router.post(
    "/agregarIncidencia",
    limitPets,
    limitSize,
    authorizationMiddleware,
    contentMiddlewareIncidencia,
    postIncidenciaDTO,
    postIncidenciaController
  );
  router.post(
    "/agregarTrainer",
    limitPets,
    limitSize,
    authorizationMiddleware,
    contentMiddlewareTrainer,
    postTrainerDTO,
    postTrainerController
  );
  return router;
};

export { postInitRoute };
