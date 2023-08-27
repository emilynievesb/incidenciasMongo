import { Equipo } from "../collections/equipo.js";
import { Incidencia } from "../collections/incidencia.js";
import { Trainer } from "../collections/trainer.js";

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

const postTrainer = async (
  nombre_trainer,
  email_personal,
  email_corporativo,
  telefono_movil,
  telefono_residencia,
  telefono_empresa,
  telefono_movil_empresarial
) => {
  const trainer = new Trainer();
  trainer.nombre_trainer = nombre_trainer;
  trainer.email_personal = email_personal;
  trainer.email_corporativo = email_corporativo;
  trainer.telefono_movil = telefono_movil;
  trainer.telefono_residencia = telefono_residencia;
  trainer.telefono_empresa = telefono_empresa;
  trainer.telefono_movil_empresarial = telefono_movil_empresarial;
  const res = await trainer.agregarTrainer();
  if (res.insertedId) {
    return "Trainer agregado con éxito";
  }
};

export { postEquipo, postIncidencia, postTrainer };
