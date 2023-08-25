import { Equipo } from "../collections/equipo.js";

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

export { postEquipo };
