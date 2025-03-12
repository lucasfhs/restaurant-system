"use strict";

const Delivery = require("../models/Delivery");

module.exports = async function (fastify, opts) {
  // Registrar o schema Delivery no Fastify
  fastify.addSchema({
    $id: 'Delivery',
    type: 'object',
    properties: {
      orderId: { type: 'string', format: 'uuid' },
      delivererId: { type: 'string', format: 'uuid' },
      status: { type: 'string', enum: ['pending', 'in-transit', 'delivered', 'failed'] },
      deliveryDate: { type: 'string', format: 'date-time' },
      estimatedDeliveryTime: { type: 'number' },
      address: { type: 'string' },
      trackingLink: { type: 'string' },
    },
  });

  // Criar uma nova entrega
  fastify.post("/deliveries", {
    schema: {
      body: {
        type: "object",
        required: ["orderId", "delivererId", "address"],
        properties: {
          orderId: { type: "string", format: "uuid" },
          delivererId: { type: "string", format: "uuid" },
          status: { type: "string", enum: ["pending", "in-transit", "delivered", "failed"] },
          deliveryDate: { type: "string", format: "date-time" },
          estimatedDeliveryTime: { type: "number" },
          address: { type: "string" },
          trackingLink: { type: "string" },
        },
      },
      response: {
        201: {
          type: "object",
          properties: {
            message: { type: "string" },
            delivery: { $ref: "Delivery#" },
          },
        },
        500: {
          type: "object",
          properties: {
            error: { type: "string" },
            details: { type: "string" },
          },
        },
      },
    },
  }, async (request, reply) => {
    try {
      const { orderId, delivererId, address, estimatedDeliveryTime } = request.body;

      const delivery = new Delivery({
        orderId,
        delivererId,
        address,
        estimatedDeliveryTime,
      });

      await delivery.save();
      reply.code(201).send({ message: "Delivery created successfully", delivery });
    } catch (err) {
      reply.code(500).send({ error: "Failed to create delivery", details: err.message });
    }
  });

  // Listar todas as entregas
  fastify.get("/deliveries", {
    schema: {
      response: {
        200: {
          type: "array",
          items: { $ref: "Delivery#" },
        },
      },
    },
  }, async (request, reply) => {
    try {
      const deliveries = await Delivery.find()
        .populate("orderId")
        .populate("delivererId");
      reply.send(deliveries);
    } catch (err) {
      reply.code(500).send({ error: "Failed to fetch deliveries", details: err.message });
    }
  });

  // Obter uma entrega específica
  fastify.get("/deliveries/:id", {
    schema: {
      params: {
        type: "object",
        required: ["id"],
        properties: {
          id: { type: "string", format: "uuid" },
        },
      },
      response: {
        200: { $ref: "Delivery#" },
        404: { type: "object", properties: { error: { type: "string" } } },
        500: { type: "object", properties: { error: { type: "string" } } },
      },
    },
  }, async (request, reply) => {
    try {
      const delivery = await Delivery.findById(request.params.id)
        .populate("orderId")
        .populate("delivererId");
      if (!delivery) {
        return reply.code(404).send({ error: "Delivery not found" });
      }
      reply.send(delivery);
    } catch (err) {
      reply.code(500).send({ error: "Failed to fetch delivery", details: err.message });
    }
  });

  // Atualizar uma entrega
  fastify.put("/deliveries/:id", {
    schema: {
      params: {
        type: "object",
        required: ["id"],
        properties: {
          id: { type: "string", format: "uuid" },
        },
      },
      body: {
        type: "object",
        properties: {
          orderId: { type: "string", format: "uuid" },
          delivererId: { type: "string", format: "uuid" },
          status: { type: "string", enum: ["pending", "in-transit", "delivered", "failed"] },
          deliveryDate: { type: "string", format: "date-time" },
          estimatedDeliveryTime: { type: "number" },
          address: { type: "string" },
          trackingLink: { type: "string" },
        },
      },
      response: {
        200: { $ref: "Delivery#" },
        404: { type: "object", properties: { error: { type: "string" } } },
        500: { type: "object", properties: { error: { type: "string" } } },
      },
    },
  }, async (request, reply) => {
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
      reply.code(500).send({ error: "Failed to update delivery", details: err.message });
    }
  });

  // Remover uma entrega
  fastify.delete("/deliveries/:id", {
    schema: {
      params: {
        type: "object",
        required: ["id"],
        properties: {
          id: { type: "string", format: "uuid" },
        },
      },
      response: {
        200: { type: "object", properties: { message: { type: "string" } } },
        404: { type: "object", properties: { error: { type: "string" } } },
        500: { type: "object", properties: { error: { type: "string" } } },
      },
    },
  }, async (request, reply) => {
    try {
      const deletedDelivery = await Delivery.findByIdAndDelete(request.params.id);
      if (!deletedDelivery) {
        return reply.code(404).send({ error: "Delivery not found" });
      }
      reply.send({ message: "Delivery deleted successfully" });
    } catch (err) {
      reply.code(500).send({ error: "Failed to delete delivery", details: err.message });
    }
  });
};
