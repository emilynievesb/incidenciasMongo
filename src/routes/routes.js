import { Router } from "express";
import { postInitRoute } from "./postRoutes.js";
import { getInitRoute } from "./getRoutes.js";

const initAPIRoutes = () => {
  const router = Router();
  router.use("/get", getInitRoute());
  router.use("/post", postInitRoute());
  return router;
};

export { initAPIRoutes };
