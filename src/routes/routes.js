import { Router } from "express";
import { postInitRoute } from "./postRoutes.js";
import { getInitRoute } from "./getRoutes.js";
import { appToken } from "../utils/collectionAuth.js";

const initAPIRoutes = () => {
  const router = Router();
  router.use("/token", appToken);
  router.use("/get", getInitRoute());
  router.use("/post", postInitRoute());
  return router;
};

export { initAPIRoutes };
