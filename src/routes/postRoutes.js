import { Router } from "express";
import {
  postEquipoController,
  postIncidenciaController,
} from "../controllers/postControllers.js";
import { postEquipoDTO, postIncidenciaDTO } from "./DTO/postDTO.js";

const postInitRoute = () => {
  const router = Router();
  router.post("/agregarEquipo", postEquipoDTO, postEquipoController);
  router.post(
    "/agregarIncidencia",
    postIncidenciaDTO,
    postIncidenciaController
  );
  return router;
};

export { postInitRoute };
