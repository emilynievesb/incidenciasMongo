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

  async obtenerIncidencias() {
    try {
      this.session = await startTransaction();
      const connection = await this.connect();
      const resultado = await connection
        .aggregate([
          {
            $lookup: {
              from: "trainers",
              localField: "id_trainer",
              foreignField: "id_trainer",
              as: "trainer",
            },
          },
          {
            $lookup: {
              from: "equipos",
              localField: "id_equipo",
              foreignField: "id_equipo",
              as: "equipo",
            },
          },
          {
            $lookup: {
              from: "categorias_incidencias",
              localField: "id_categoria_incidencia",
              foreignField: "id_categoria_incidencia",
              as: "categoria_incidencia",
            },
          },
          {
            $lookup: {
              from: "tipos_incidencias",
              localField: "id_tipo_incidencia",
              foreignField: "id_tipo_incidencia",
              as: "tipo_incidencia",
            },
          },
          {
            $unwind: "$trainer",
          },
          {
            $unwind: "$equipo",
          },
          {
            $unwind: "$categoria_incidencia",
          },
          {
            $unwind: "$tipo_incidencia",
          },
          {
            $project: {
              _id: 0,
              id_incidencia: 1,
              trainer: "$trainer.nombre_trainer",
              equipo: "$equipo.serial_equipo",
              categoria_incidencia:
                "$categoria_incidencia.nombre_categoria_incidencia",
              tipo_incidencia: "$tipo_incidencia.nombre_tipo_incidencia",
              descripcion: 1,
              fecha_incidencia: 1,
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

export { Incidencia };
