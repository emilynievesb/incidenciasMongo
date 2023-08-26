import { object, string, number, date } from "yup";

const obtenerEquipoDTO = async (req, res, next) => {
  try {
    const productSchema = object({
      id: number().required(),
    });
    await productSchema.validate(req.query);
    next();
  } catch (error) {
    res.status(400).json({ status: "fail", message: error.errors });
  }
};
export { obtenerEquipoDTO };
