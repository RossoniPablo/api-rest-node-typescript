import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";

describe("Cidades - Create", () => {
  //casos de teste
  it("Cria registo", async () => {
    const resposta1 = await testServer.post("/cidades").send({ nome: "Imbau" });

    expect(resposta1.statusCode).toEqual(StatusCodes.CREATED);
    expect(typeof resposta1.body).toEqual("number");
  });
  it("Tenta criar um registro sem o nome", async () => {
    const res1 = await testServer.post("/cidades").send({ nome: "" }); // Enviando vazio

    expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
    expect(res1.body).toHaveProperty("errorsResult.body.nome");
  });

  it("Não pode criar um registro com nome muito curto", async () => {
    const res1 = await testServer.post("/cidades").send({ nome: "Ca" });

    expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
    expect(res1.body).toHaveProperty("errorsResult.body.nome");
  });
});
