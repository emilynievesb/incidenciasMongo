import { postEquipo, postIncidencia } from "../services/postServices.js";

const postEquipoController = async (req, res, next) => {
  try {
    const { idTipoEquipo, serialEquipo, idSala } = req.body;
    const result = await postEquipo(idTipoEquipo, serialEquipo, idSala);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error.stack);
  }
};

const postIncidenciaController = async (req, res, next) => {
  try {
    const {
      trainer,
      idEquipo,
      idCategoriaIncidencia,
      idTipoIncidencia,
      descripcion,
      fechaIncidencia,
    } = req.body;
    const result = await postIncidencia(
      trainer,
      idEquipo,
      idCategoriaIncidencia,
      idTipoIncidencia,
      descripcion,
      fechaIncidencia
    );
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error.stack);
  }
};

export { postEquipoController, postIncidenciaController };
