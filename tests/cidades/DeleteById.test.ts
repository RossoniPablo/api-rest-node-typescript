import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";

describe("Cidades - DeleteById", () => {
  it("Exclui registro", async () => {
    //Primeiro insere um registro
    const resposta1 = await testServer.post("/cidades").send({ nome: "Imbau" });
    expect(resposta1.statusCode).toEqual(StatusCodes.CREATED);

    const respostaApagada = await testServer
      .delete(`/cidades/${resposta1.body}`)
      .send();

    expect(respostaApagada.statusCode).toEqual(StatusCodes.NO_CONTENT);
  });

  it("Tentar apagar registro que não existe", async () => {
    const resposta1 = await testServer.delete("/cidades/77777").send();

    expect(resposta1.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
    expect(resposta1.body).toHaveProperty("errors.default");
  });
});
