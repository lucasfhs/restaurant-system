"use strict";

const Payment = require("../models/Payment");

module.exports = async function (fastify, opts) {
  // Criar um novo pagamento
  fastify.post("/payments", async (request, reply) => {
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
      reply.code(500).send({ error: "Failed to create payment", details: err });
    }
  });

  // Listar todos os pagamentos
  fastify.get("/payments", async (request, reply) => {
    try {
      const payments = await Payment.find().populate("orderId");
      reply.send(payments);
    } catch (err) {
      reply.code(500).send({ error: "Failed to fetch payments", details: err });
    }
  });

  // Obter um pagamento específico
  fastify.get("/payments/:id", async (request, reply) => {
    try {
      const payment = await Payment.findById(request.params.id).populate(
        "orderId"
      );
      if (!payment) {
        return reply.code(404).send({ error: "Payment not found" });
      }
      reply.send(payment);
    } catch (err) {
      reply.code(500).send({ error: "Failed to fetch payment", details: err });
    }
  });

  // Atualizar um pagamento
  fastify.put("/payments/:id", async (request, reply) => {
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
      reply.code(500).send({ error: "Failed to update payment", details: err });
    }
  });

  // Remover um pagamento
  fastify.delete("/payments/:id", async (request, reply) => {
    try {
      const deletedPayment = await Payment.findByIdAndDelete(request.params.id);
      if (!deletedPayment) {
        return reply.code(404).send({ error: "Payment not found" });
      }
      reply.send({ message: "Payment deleted successfully" });
    } catch (err) {
      reply.code(500).send({ error: "Failed to delete payment", details: err });
    }
  });
};
