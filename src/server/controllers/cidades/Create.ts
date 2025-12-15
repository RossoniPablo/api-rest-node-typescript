import { Request, Response } from "express";

import * as yup from "yup";

import { validation } from "../../shared/middlewares";

interface Icidade {
  nome: string;
}

interface IFilter {
  filter?: string;
}

//todo as propriedades que preciso da controller cidades

//// schema para o body e query
export const createValidation = validation((getSchema) => ({
  body: getSchema<Icidade>(
    yup.object().shape({
      nome: yup.string().required().min(3),
      estado: yup.string().required().min(3),
    })
  ),
  query: getSchema<IFilter>(
    yup.object().shape({
      filter: yup.string().required().min(3),
    })
  ),
}));

// Método da controller
export const Create = async (req: Request<{}, {}, Icidade>, res: Response) => {
  console.log(req.body);

  return res.send("Create");
};
