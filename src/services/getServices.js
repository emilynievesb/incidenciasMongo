import { Equipo } from "../collections/equipo.js";
import { Incidencia } from "../collections/incidencia.js";

const obtenerEquipos = async () => {
  const equipo = new Equipo();
  return await equipo.obtenerEquipos();
};
const obtenerEquipo = async (id) => {
  const equipo = new Equipo();
  equipo.id_equipo = id;
  return await equipo.obtenerEquipo();
};

const obtenerIncidencias = async (id) => {
  const incidencias = new Incidencia();
  return await incidencias.obtenerIncidencias();
};
export { obtenerEquipos, obtenerEquipo, obtenerIncidencias };
