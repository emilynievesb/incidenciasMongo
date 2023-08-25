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
export { postEquipoDTO };
