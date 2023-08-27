import { Equipo } from "../collections/equipo.js";
import { Incidencia } from "../collections/incidencia.js";
import { Trainer } from "../collections/trainer.js";

const obtenerEquipos = async () => {
  const equipo = new Equipo();
  return await equipo.obtenerEquipos();
};
const obtenerEquipo = async (id) => {
  const equipo = new Equipo();
  equipo.id_equipo = id;
  return await equipo.obtenerEquipo();
};

const obtenerIncidencias = async () => {
  const incidencias = new Incidencia();
  return await incidencias.obtenerIncidencias();
};
const obtenerIncidencia = async (id) => {
  const incidencias = new Incidencia();
  incidencias.id_incidencia = id;
  return await incidencias.obtenerIncidencia();
};

const obtenerTrainers = async () => {
  const trainer = new Trainer();
  return await trainer.obtenerTrainers();
};
const obtenerTrainer = async (id) => {
  const trainer = new Trainer();
  trainer.id_trainer = id;
  return await trainer.obtenerTrainer();
};
export {
  obtenerEquipos,
  obtenerEquipo,
  obtenerIncidencias,
  obtenerIncidencia,
  obtenerTrainers,
  obtenerTrainer,
};
