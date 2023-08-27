import { object, string, number, date } from "yup";

const postEquipoDTO = async (req, res, next) => {
  try {
    const productSchema = object({
      idTipoEquipo: number().min(1).max(4).required(),
      serialEquipo: string().required(),
      idSala: number().min(1).max(6).required(),
    });
    await productSchema.validate(req.body);
    next();
  } catch (error) {
    res.status(400).json({ status: "fail", message: error.errors });
  }
};

const postIncidenciaDTO = async (req, res, next) => {
  try {
    const productSchema = object({
      trainer: number().strict().required(),
      idEquipo: number().strict().required(),
      idCategoriaIncidencia: number().min(1).max(2).required(),
      idTipoIncidencia: number().min(1).max(3).required(),
      descripcion: string().required(),
      fechaIncidencia: date().required("La fecha es requerida"),
    });
    await productSchema.validate(req.body);
    next();
  } catch (error) {
    res.status(400).json({ status: "fail", message: error.errors });
  }
};

const postTrainerDTO = async (req, res, next) => {
  try {
    const productSchema = object({
      nombre: string()
        .strict()
        .matches(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, "Is not in correct format")
        .required(),
      emailPersonal: string().required(),
      emailCorporativo: string().required(),
      telefonoMovil: string().required(),
      telfonoResidencia: string().required(),
      telefonoEmpresa: string().required(),
      telefonoMovilEmpresa: string().required(),
    });
    await productSchema.validate(req.body);
    next();
  } catch (error) {
    res.status(400).json({ status: "fail", message: error.errors });
  }
};

export { postEquipoDTO, postIncidenciaDTO, postTrainerDTO };
