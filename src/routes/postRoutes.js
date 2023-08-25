import { Router } from "express";
import { postEquipoController } from "../controllers/postControllers.js";
import { postEquipoDTO } from "./DTO/postDTO.js";

const postInitRoute = () => {
  const router = Router();
  router.post("/agregarEquipo", postEquipoDTO, postEquipoController);

  return router;
};

export { postInitRoute };
