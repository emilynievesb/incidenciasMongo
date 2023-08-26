import { Equipo } from "../collections/equipo.js";
import { Incidencia } from "../collections/incidencia.js";

const postIncidencia = async (
  id_trainer,
  id_equipo,
  id_categoria_incidencia,
  id_tipo_incidencia,
  descripcion,
  fecha_incidencia
) => {
  const incidencia = new Incidencia();
  incidencia.id_trainer = id_trainer;
  incidencia.id_equipo = id_equipo;
  incidencia.id_categoria_incidencia = id_categoria_incidencia;
  incidencia.id_tipo_incidencia = id_tipo_incidencia;
  incidencia.descripcion = descripcion;
  incidencia.fecha_incidencia = fecha_incidencia;
  const res = await incidencia.agregarIncidencia();
  if (res.insertedId) {
    return "Incidencia agregada con éxito";
  }
};

const postEquipo = async (id_tipo_equipo, serial_equipo, id_sala) => {
  const equipo = new Equipo();
  equipo.id_tipo_equipo = id_tipo_equipo;
  equipo.serial_equipo = serial_equipo;
  equipo.id_sala = id_sala;
  const res = await equipo.agregarEquipo();
  if (res.insertedId) {
    return "Equipo agregado con éxito";
  }
};

export { postEquipo, postIncidencia };
