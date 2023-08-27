import { connect, startTransaction } from "../utils/connect.js";
import autoIncrementID from "../utils/counters.js";

class Equipo {
  id_equipo;
  id_tipo_equipo;
  serial_equipo;
  id_sala;
  session;
  constructor() {
    this.id_equipo = 12;
    this.id_tipo_equipo = 1;
    this.serial_equipo = "AS123C";
    this.id_sala = 1;
  }
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

  async obtenerEquipos() {
    try {
      this.session = await startTransaction();
      const connection = await this.connect();
      const resultado = await connection
        .aggregate([
          {
            $lookup: {
              from: "tipos_equipos",
              localField: "id_tipo_equipo",
              foreignField: "id_tipo_equipo",
              as: "tipo_equipo",
            },
          },
          {
            $lookup: {
              from: "salas",
              localField: "id_sala",
              foreignField: "id_sala",
              as: "sala",
            },
          },
          {
            $unwind: "$tipo_equipo",
          },
          {
            $unwind: "$sala",
          },
          {
            $project: {
              _id: 0,
              id_equipo: 1,
              serial_equipo: 1,
              tipo_equipo: "$tipo_equipo.nombre_equipo",
              sala: "$sala.nombre_sala",
            },
          },
        ])
        .toArray();
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
  async obtenerEquipo() {
    try {
      this.session = await startTransaction();
      const connection = await this.connect();
      const resultado = await connection
        .aggregate([
          {
            $match: {
              id_equipo: Number(this.id_equipo),
            },
          },
          {
            $lookup: {
              from: "tipos_equipos",
              localField: "id_tipo_equipo",
              foreignField: "id_tipo_equipo",
              as: "tipo_equipo",
            },
          },
          {
            $lookup: {
              from: "salas",
              localField: "id_sala",
              foreignField: "id_sala",
              as: "sala",
            },
          },
          {
            $unwind: "$tipo_equipo",
          },
          {
            $unwind: "$sala",
          },
          {
            $project: {
              _id: 0,
              id_equipo: 1,
              serial_equipo: 1,
              tipo_equipo: "$tipo_equipo.nombre_equipo",
              sala: "$sala.nombre_sala",
            },
          },
        ])
        .toArray();
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
