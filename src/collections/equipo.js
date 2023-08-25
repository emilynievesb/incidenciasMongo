import { connect, startTransaction } from "../utils/connect.js";
import autoIncrementID from "../utils/counters.js";

class Equipo {
  id_tipo_equipo;
  serial_equipo;
  id_sala;
  session;
  constructor() {}
  async connect() {
    try {
      const result = await connect("equipos");
      return result;
    } catch (error) {
      throw error;
    }
  }
  async agregarEquipo() {
    try {
      const counter = await autoIncrementID("equipos");
      const { newId, sessionNow } = counter;
      this.session = sessionNow;
      const connection = await this.connect();
      const resultado = await connection.insertOne({
        id_equipo: Number(newId),
        id_tipo_equipo: Number(this.id_tipo_equipo),
        serial_equipo: this.serial_equipo,
        id_sala: Number(this.id_sala),
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
export { Equipo };
