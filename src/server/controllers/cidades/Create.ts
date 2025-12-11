import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from "yup";

interface Icidade {
  nome: string;
}

//Validação
const bodyValidation: yup.Schema<Icidade> = yup.object().shape({
  nome: yup.string().required().min(3),
  estado: yup.string().required().min(3),
});

export const Create = async (req: Request<{}, {}, Icidade>, res: Response) => {
  //Validação
  let validateData: Icidade | undefined = undefined;

  try {
    validateData = await bodyValidation.validate(req.body, {
      abortEarly: false,
    });
  } catch (err) {
    const yupError = err as yup.ValidationError;

    //mapeando erros
    const errors: Record<string, string> = {};
    yupError.inner.forEach((error) => {
      if (error.path === undefined) return;
      errors[error.path] = error.message;
    });

    return res.status(StatusCodes.BAD_REQUEST).json({ errors });
  }
  console.log(validateData);

  return res.send("Create");
};
