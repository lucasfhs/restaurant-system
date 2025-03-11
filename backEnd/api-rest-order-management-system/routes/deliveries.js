"use strict";

const Delivery = require("../models/Delivery");

module.exports = async function (fastify, opts) {
  // Criar uma nova entrega
  fastify.post("/deliveries", async (request, reply) => {
    try {
      const { orderId, delivererId, address, estimatedDeliveryTime } =
        request.body;

      const delivery = new Delivery({
        orderId,
        delivererId,
        address,
        estimatedDeliveryTime,
      });

      await delivery.save();
      reply.code(201).send(delivery);
    } catch (err) {
      reply
        .code(500)
        .send({ error: "Failed to create delivery", details: err });
    }
  });

  // Listar todas as entregas
  fastify.get("/deliveries", async (request, reply) => {
    try {
      const deliveries = await Delivery.find()
        .populate("orderId")
        .populate("delivererId");
      reply.send(deliveries);
    } catch (err) {
      reply
        .code(500)
        .send({ error: "Failed to fetch deliveries", details: err });
    }
  });

  // Obter uma entrega específica
  fastify.get("/deliveries/:id", async (request, reply) => {
    try {
      const delivery = await Delivery.findById(request.params.id)
        .populate("orderId")
        .populate("delivererId");
      if (!delivery) {
        return reply.code(404).send({ error: "Delivery not found" });
      }
      reply.send(delivery);
    } catch (err) {
      reply.code(500).send({ error: "Failed to fetch delivery", details: err });
    }
  });

  // Atualizar uma entrega
  fastify.put("/deliveries/:id", async (request, reply) => {
    try {
      const updatedDelivery = await Delivery.findByIdAndUpdate(
        request.params.id,
        request.body,
        { new: true, runValidators: true }
      );
      if (!updatedDelivery) {
        return reply.code(404).send({ error: "Delivery not found" });
      }
      reply.send(updatedDelivery);
    } catch (err) {
      reply
        .code(500)
        .send({ error: "Failed to update delivery", details: err });
    }
  });

  // Remover uma entrega
  fastify.delete("/deliveries/:id", async (request, reply) => {
    try {
      const deletedDelivery = await Delivery.findByIdAndDelete(
        request.params.id
      );
      if (!deletedDelivery) {
        return reply.code(404).send({ error: "Delivery not found" });
      }
      reply.send({ message: "Delivery deleted successfully" });
    } catch (err) {
      reply
        .code(500)
        .send({ error: "Failed to delete delivery", details: err });
    }
  });
};
