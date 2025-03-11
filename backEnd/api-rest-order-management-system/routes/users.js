"use strict";

const User = require("../models/User");

module.exports = async function (fastify, opts) {
  // Criar usuário (POST /users)
  fastify.post("/users", async (request, reply) => {
    try {
      const user = new User(request.body);
      await user.save();
      return reply.code(201).send(user);
    } catch (err) {
      return reply
        .code(400)
        .send({ error: "Error creating user", details: err.message });
    }
  });

  // Obter todos os usuários (GET /users)
  fastify.get("/users", async (request, reply) => {
    try {
      const users = await User.find();
      return reply.send(users);
    } catch (err) {
      return reply
        .code(500)
        .send({ error: "Error fetching users", details: err.message });
    }
  });

  // Obter um usuário por ID (GET /users/:id)
  fastify.get("/users/:id", async (request, reply) => {
    try {
      const user = await User.findById(request.params.id);
      if (!user) {
        return reply.code(404).send({ error: "User not found" });
      }
      return reply.send(user);
    } catch (err) {
      return reply
        .code(400)
        .send({ error: "Invalid user ID", details: err.message });
    }
  });

  // Atualizar usuário (PUT /users/:id)
  fastify.put("/users/:id", async (request, reply) => {
    try {
      const user = await User.findByIdAndUpdate(
        request.params.id,
        request.body,
        { new: true, runValidators: true }
      );
      if (!user) {
        return reply.code(404).send({ error: "User not found" });
      }
      return reply.send(user);
    } catch (err) {
      return reply
        .code(400)
        .send({ error: "Error updating user", details: err.message });
    }
  });

  // Deletar usuário (DELETE /users/:id)
  fastify.delete("/users/:id", async (request, reply) => {
    try {
      const user = await User.findByIdAndDelete(request.params.id);
      if (!user) {
        return reply.code(404).send({ error: "User not found" });
      }
      return reply.send({ message: "User deleted successfully" });
    } catch (err) {
      return reply
        .code(400)
        .send({ error: "Error deleting user", details: err.message });
    }
  });
};
