import { Router } from "express";
import {
  obtenerEquipoController,
  obtenerEquiposController,
} from "../controllers/getControllers.js";

const getInitRoute = () => {
  const router = Router();
  router.get("/obtenerEquipos", obtenerEquiposController);
  router.get("/obtenerEquipo", obtenerEquipoController);
  return router;
};

export { getInitRoute };
