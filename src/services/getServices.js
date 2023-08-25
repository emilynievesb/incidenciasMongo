import { Equipo } from "../collections/equipo.js";

const obtenerEquipos = async () => {
  const equipo = new Equipo();
  return await equipo.obtenerEquipos();
};
export { obtenerEquipos };
