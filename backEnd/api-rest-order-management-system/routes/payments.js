"use strict";

const Payment = require("../models/Payment");

module.exports = async function (fastify, opts) {
  // Registrar o schema Payment para ser utilizado nas rotas
  fastify.addSchema({
    $id: 'Payment',
    type: 'object',
    properties: {
      orderId: { type: 'string', format: 'uuid' },
      amount: { type: 'number' },
      paymentMethod: { type: 'string' },
      paymentStatus: { type: 'string' },
      transactionId: { type: 'string' },
    },
  });

  // Criar um novo pagamento
  fastify.post("/payments", {
    schema: {
      body: {
        type: "object",
        required: ["orderId", "amount", "paymentMethod", "paymentStatus", "transactionId"],
        properties: {
          orderId: { type: "string", format: "uuid" },
          amount: { type: "number" },
          paymentMethod: { type: "string" },
          paymentStatus: { type: "string" },
          transactionId: { type: "string" },
        },
      },
      response: {
        201: { $ref: "Payment#" },
        500: { type: "object", properties: { error: { type: "string" }, details: { type: "string" } } },
      },
    },
  }, async (request, reply) => {
    try {
      const { orderId, amount, paymentMethod, paymentStatus, transactionId } =
        request.body;

      const payment = new Payment({
        orderId,
        amount,
        paymentMethod,
        paymentStatus,
        transactionId,
      });

      await payment.save();
      reply.code(201).send(payment);
    } catch (err) {
      reply.code(500).send({ error: "Failed to create payment", details: err.message });
    }
  });

  // Listar todos os pagamentos
  fastify.get("/payments", {
    schema: {
      response: {
        200: {
          type: "array",
          items: { $ref: "Payment#" },
        },
      },
    },
  }, async (request, reply) => {
    try {
      const payments = await Payment.find().populate("orderId");
      reply.send(payments);
    } catch (err) {
      reply.code(500).send({ error: "Failed to fetch payments", details: err.message });
    }
  });

  // Obter um pagamento específico
  fastify.get("/payments/:id", {
    schema: {
      params: {
        type: "object",
        required: ["id"],
        properties: {
          id: { type: "string", format: "uuid" },
        },
      },
      response: {
        200: { $ref: "Payment#" },
        404: { type: "object", properties: { error: { type: "string" } } },
        500: { type: "object", properties: { error: { type: "string" } } },
      },
    },
  }, async (request, reply) => {
    try {
      const payment = await Payment.findById(request.params.id).populate("orderId");
      if (!payment) {
        return reply.code(404).send({ error: "Payment not found" });
      }
      reply.send(payment);
    } catch (err) {
      reply.code(500).send({ error: "Failed to fetch payment", details: err.message });
    }
  });

  // Atualizar um pagamento
  fastify.put("/payments/:id", {
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
          amount: { type: "number" },
          paymentMethod: { type: "string" },
          paymentStatus: { type: "string" },
          transactionId: { type: "string" },
        },
      },
      response: {
        200: { $ref: "Payment#" },
        404: { type: "object", properties: { error: { type: "string" } } },
        500: { type: "object", properties: { error: { type: "string" } } },
      },
    },
  }, async (request, reply) => {
    try {
      const updatedPayment = await Payment.findByIdAndUpdate(
        request.params.id,
        request.body,
        { new: true, runValidators: true }
      );
      if (!updatedPayment) {
        return reply.code(404).send({ error: "Payment not found" });
      }
      reply.send(updatedPayment);
    } catch (err) {
      reply.code(500).send({ error: "Failed to update payment", details: err.message });
    }
  });

  // Remover um pagamento
  fastify.delete("/payments/:id", {
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
      const deletedPayment = await Payment.findByIdAndDelete(request.params.id);
      if (!deletedPayment) {
        return reply.code(404).send({ error: "Payment not found" });
      }
      reply.send({ message: "Payment deleted successfully" });
    } catch (err) {
      reply.code(500).send({ error: "Failed to delete payment", details: err.message });
    }
  });
};
