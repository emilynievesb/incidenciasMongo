import { connect, startTransaction } from "../utils/connect.js";
import autoIncrementID from "../utils/counters.js";

class Trainer {
  id_trainer;
  nombre_trainer;
  email_personal;
  email_corporativo;
  telefono_movil;
  telefono_residencia;
  telefono_empresa;
  telefono_movil_empresarial;
  constructor() {}
  async connect() {
    try {
      const result = await connect("trainers");
      return result;
    } catch (error) {
      throw error;
    }
  }
  async agregarTrainer() {
    try {
      const counter = await autoIncrementID("trainers");
      const { newId, sessionNow } = counter;
      this.session = sessionNow;
      const connection = await this.connect();
      const resultado = await connection.insertOne({
        id_trainer: Number(newId),
        nombre_trainer: this.nombre_trainer,
        email_personal: this.email_personal,
        email_corporativo: this.email_corporativo,
        telefono_movil: String(this.telefono_movil),
        telefono_residencia: String(this.telefono_residencia),
        telefono_empresa: String(this.telefono_empresa),
        telefono_movil_empresarial: String(this.telefono_movil_empresarial),
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
  async obtenerTrainers() {
    try {
      const connection = await this.connect();
      const resultado = await connection.find({}).toArray();
      return resultado;
    } catch (error) {
      throw error;
    }
  }

  async obtenerTrainer() {
    try {
      const connection = await this.connect();
      const resultado = await connection.findOne({
        id_trainer: Number(this.id_trainer),
      });
      return resultado;
    } catch (error) {
      throw error;
    }
  }
}
export { Trainer };
