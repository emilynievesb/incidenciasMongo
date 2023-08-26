import { object, string, number, date } from "yup";

const postEquipoDTO = async (req, res, next) => {
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
export { postEquipoDTO };
