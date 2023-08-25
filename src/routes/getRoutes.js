import { Router } from "express";
import { obtenerEquiposController } from "../controllers/getControllers.js";

const getInitRoute = () => {
  const router = Router();
  router.get("/obtenerEquipos", obtenerEquiposController);
  return router;
};

export { getInitRoute };
