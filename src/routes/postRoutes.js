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

const postInitRoute = () => {
  const router = Router();
  router.post("/agregarEquipo", postEquipoDTO, postEquipoController);
  router.post(
    "/agregarIncidencia",
    postIncidenciaDTO,
    postIncidenciaController
  );
  router.post("/agregarTrainer", postTrainerController);
  return router;
};

export { postInitRoute };
