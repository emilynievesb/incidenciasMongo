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

const postInitRoute = () => {
  const router = Router();
  router.post(
    "/agregarEquipo",
    limitPets,
    limitSize,
    postEquipoDTO,
    postEquipoController
  );
  router.post(
    "/agregarIncidencia",
    limitPets,
    limitSize,
    postIncidenciaDTO,
    postIncidenciaController
  );
  router.post(
    "/agregarTrainer",
    limitPets,
    limitSize,
    postTrainerDTO,
    postTrainerController
  );
  return router;
};

export { postInitRoute };
