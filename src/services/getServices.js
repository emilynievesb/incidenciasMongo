import { Equipo } from "../collections/equipo.js";

const obtenerEquipos = async () => {
  const equipo = new Equipo();
  return await equipo.obtenerEquipos();
};
const obtenerEquipo = async (id) => {
  const equipo = new Equipo();
  equipo.id_equipo = id;
  return await equipo.obtenerEquipo();
};
export { obtenerEquipos, obtenerEquipo };
