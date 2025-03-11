"use strict";

const Product = require("../models/Product");

module.exports = async function (fastify, opts) {
  // Criar um novo produto
  fastify.post("/products", async (request, reply) => {
    try {
      const product = new Product(request.body);
      await product.save();
      reply.code(201).send(product);
    } catch (err) {
      reply.code(500).send({ error: "Failed to create product", details: err });
    }
  });

  // Listar todos os produtos
  fastify.get("/products", async (request, reply) => {
    try {
      const products = await Product.find();
      reply.send(products);
    } catch (err) {
      reply.code(500).send({ error: "Failed to fetch products", details: err });
    }
  });

  // Obter um produto por ID
  fastify.get("/products/:id", async (request, reply) => {
    try {
      const product = await Product.findById(request.params.id);
      if (!product) {
        return reply.code(404).send({ error: "Product not found" });
      }
      reply.send(product);
    } catch (err) {
      reply.code(500).send({ error: "Failed to fetch product", details: err });
    }
  });

  // Atualizar um produto por ID
  fastify.put("/products/:id", async (request, reply) => {
    try {
      const updatedProduct = await Product.findByIdAndUpdate(
        request.params.id,
        request.body,
        { new: true, runValidators: true }
      );
      if (!updatedProduct) {
        return reply.code(404).send({ error: "Product not found" });
      }
      reply.send(updatedProduct);
    } catch (err) {
      reply.code(500).send({ error: "Failed to update product", details: err });
    }
  });

  // Remover um produto por ID
  fastify.delete("/products/:id", async (request, reply) => {
    try {
      const deletedProduct = await Product.findByIdAndDelete(request.params.id);
      if (!deletedProduct) {
        return reply.code(404).send({ error: "Product not found" });
      }
      reply.send({ message: "Product deleted successfully" });
    } catch (err) {
      reply.code(500).send({ error: "Failed to delete product", details: err });
    }
  });
};
