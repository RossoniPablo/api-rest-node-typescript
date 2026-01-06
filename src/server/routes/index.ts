import { Router } from "express";
// import { StatusCodes } from "http-status-codes";
import { CidadesController } from "./../controllers";

const router = Router();

router.get("/", (_, res) => {
  return res.send("Hello World");
});

//antes de executar o handler de criação, executo o middlewares de validação, se o body(corpo da chamada) 'bate' com a validação executa o next(próximo)
router.get(
  "/cidades",
  CidadesController.getAllValidation,
  CidadesController.GetAll
);

router.get(
  "/cidades/:id",
  CidadesController.getByIdValidation,
  CidadesController.getById
);

router.post(
  "/cidades",
  CidadesController.createValidation,
  CidadesController.Create
);

router.put(
  "/cidades/:id",
  CidadesController.updateByIdValidation,
  CidadesController.updateById
);

router.delete(
  "/cidades/:id",
  CidadesController.deleteByIdByIdValidation,
  CidadesController.deleteById
);

export { router };
