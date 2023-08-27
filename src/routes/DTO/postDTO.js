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
      telefonoMovil: number()
        .required()
        .test("length", "El teléfono movil debe tener 10 dígitos", (value) => {
          if (!value) return true; // Si el campo está vacío, no realizar la validación
          const numberString = String(value);
          return numberString.length === 10;
        }),
      telfonoResidencia: number()
        .required()
        .test(
          "length",
          "El telefono de la residencia debe tener 10 dígitos",
          (value) => {
            if (!value) return true; // Si el campo está vacío, no realizar la validación
            const numberString = String(value);
            return numberString.length === 10;
          }
        ),
      telefonoEmpresa: number()
        .strict()
        .required()
        .test(
          "length",
          "El telefono de la empresa debe tener 10 dígitos",
          (value) => {
            if (!value) return true; // Si el campo está vacío, no realizar la validación
            const numberString = String(value);
            return numberString.length === 10;
          }
        ),
      telefonoMovilEmpresa: number()
        .required()
        .test(
          "length",
          "El telefono movil de la empresa debe tener 10 dígitos",
          (value) => {
            if (!value) return true; // Si el campo está vacío, no realizar la validación
            const numberString = String(value);
            return numberString.length === 10;
          }
        ),
    });
    await productSchema.validate(req.body);
    next();
  } catch (error) {
    res.status(400).json({ status: "fail", message: error.errors });
  }
};

export { postEquipoDTO, postIncidenciaDTO, postTrainerDTO };
