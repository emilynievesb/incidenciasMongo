import { connect, startTransaction } from "../utils/connect.js";
import autoIncrementID from "../utils/counters.js";

class Incidencia {
  id_incidencia;
  id_trainer;
  id_equipo;
  id_categoria_incidencia;
  id_tipo_incidencia;
  descripcion;
  fecha_incidencia;
  constructor() {}
  async connect() {
    try {
      const result = await connect("incidencias");
      return result;
    } catch (error) {
      throw error;
    }
  }

  async agregarIncidencia() {
    try {
      const counter = await autoIncrementID("incidencias");
      const { newId, sessionNow } = counter;
      this.session = sessionNow;
      const connection = await this.connect();
      const resultado = await connection.insertOne({
        id_incidencia: Number(newId),
        id_trainer: Number(this.id_trainer),
        id_equipo: Number(this.id_equipo),
        id_categoria_incidencia: Number(this.id_categoria_incidencia),
        id_tipo_incidencia: Number(this.id_tipo_incidencia),
        descripcion: this.descripcion,
        fecha_incidencia: new Date(this.fecha_incidencia),
      });
      await this.session.commitTransaction();
      return resultado;
    } catch (error) {
      if (this.session) {
        await this.session.abortTransaction();
      }
      throw error;
    } finally {
      if (this.session) {
        this.session.endSession();
      }
    }
  }
}

export { Incidencia };
