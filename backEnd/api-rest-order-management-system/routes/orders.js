"use strict";

const Order = require("../models/Order");

module.exports = async function (fastify, opts) {
  // Criar um novo pedido
  fastify.post("/orders", async (request, reply) => {
    try {
      const { userId, products } = request.body;

      if (!products || products.length === 0) {
        return reply
          .code(400)
          .send({ error: "Order must have at least one product" });
      }

      const total = products.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );

      const order = new Order({ userId, products, total });
      await order.save();
      reply.code(201).send(order);
    } catch (err) {
      reply.code(500).send({ error: "Failed to create order", details: err });
    }
  });

  // Listar todos os pedidos
  fastify.get("/orders", async (request, reply) => {
    try {
      const orders = await Order.find()
        .populate("userId")
        .populate("products.productId");
      reply.send(orders);
    } catch (err) {
      reply.code(500).send({ error: "Failed to fetch orders", details: err });
    }
  });

  // Obter um pedido por ID
  fastify.get("/orders/:id", async (request, reply) => {
    try {
      const order = await Order.findById(request.params.id)
        .populate("userId")
        .populate("products.productId");
      if (!order) {
        return reply.code(404).send({ error: "Order not found" });
      }
      reply.send(order);
    } catch (err) {
      reply.code(500).send({ error: "Failed to fetch order", details: err });
    }
  });

  // Atualizar um pedido por ID
  fastify.put("/orders/:id", async (request, reply) => {
    try {
      const updatedOrder = await Order.findByIdAndUpdate(
        request.params.id,
        request.body,
        { new: true, runValidators: true }
      );
      if (!updatedOrder) {
        return reply.code(404).send({ error: "Order not found" });
      }
      reply.send(updatedOrder);
    } catch (err) {
      reply.code(500).send({ error: "Failed to update order", details: err });
    }
  });

  // Remover um pedido por ID
  fastify.delete("/orders/:id", async (request, reply) => {
    try {
      const deletedOrder = await Order.findByIdAndDelete(request.params.id);
      if (!deletedOrder) {
        return reply.code(404).send({ error: "Order not found" });
      }
      reply.send({ message: "Order deleted successfully" });
    } catch (err) {
      reply.code(500).send({ error: "Failed to delete order", details: err });
    }
  });
};
