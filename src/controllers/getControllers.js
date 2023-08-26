import {
  obtenerEquipo,
  obtenerEquipos,
  obtenerIncidencia,
  obtenerIncidencias,
} from "../services/getServices.js";

const obtenerEquiposController = async (req, res, next) => {
  try {
    const equipos = await obtenerEquipos();
    res.status(200).json(equipos);
  } catch (error) {
    res.status(500).json(error.stack);
  }
};
const obtenerEquipoController = async (req, res, next) => {
  try {
    const { id } = req.query;
    const equipos = await obtenerEquipo(id);
    res.status(200).json(equipos);
  } catch (error) {
    res.status(500).json(error.stack);
  }
};
const obtenerIncidenciasController = async (req, res, next) => {
  try {
    const incidencia = await obtenerIncidencias();
    res.status(200).json(incidencia);
  } catch (error) {
    res.status(500).json(error.stack);
  }
};
const obtenerIncidenciaController = async (req, res, next) => {
  try {
    const { id } = req.query;
    const incidencia = await obtenerIncidencia(id);
    res.status(200).json(incidencia);
  } catch (error) {
    res.status(500).json(error.stack);
  }
};
export {
  obtenerEquiposController,
  obtenerEquipoController,
  obtenerIncidenciasController,
  obtenerIncidenciaController,
};
