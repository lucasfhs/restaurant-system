"use strict";

module.exports = async function (fastify, opts) {
  fastify.get("/dados", async (request, reply) => {
    try {
      const db = fastify.mongo.client.db("cardapio"); // Seleciona o banco de dados
      const collection = db.collection("massas"); // Acessa a collection correta
      const result = await collection.find().toArray(); // Obtém todos os documentos
      return { result };
    } catch (err) {
      fastify.log.error(err);
      return reply.status(500).send({ error: "Erro ao buscar os dados" });
    }
  });
  fastify.post("/dados", async (request, reply) => {
    try {
      const db = fastify.mongo.client.db("cardapio"); // Seleciona o banco de dados
      const collection = db.collection("massas"); // Acessa a coleção "massas"

      const { nome, tamanho } = request.body; // Obtém os dados do corpo da requisição

      if (!nome || !tamanho) {
        return reply
          .status(400)
          .send({ error: "Os campos 'nome' e 'tamanho' são obrigatórios" });
      }

      const newItem = { nome, tamanho };
      const result = await collection.insertOne(newItem); // Insere no MongoDB

      return reply
        .status(201)
        .send({ message: "Item inserido com sucesso", item: newItem });
    } catch (err) {
      fastify.log.error(err);
      return reply.status(500).send({ error: "Erro ao inserir o dado" });
    }
  });
};
