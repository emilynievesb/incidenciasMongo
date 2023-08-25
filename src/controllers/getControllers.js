import { obtenerEquipos } from "../services/getServices.js";

const obtenerEquiposController = async (req, res, next) => {
  try {
    const equipos = await obtenerEquipos();
    res.status(200).json(equipos);
  } catch (error) {
    res.status(500).json(error.stack);
  }
};
export { obtenerEquiposController };
