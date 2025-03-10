"use strict";

const fp = require("fastify-plugin");
require("dotenv").config();
/**
 * Mongodb access plugin
 */
module.exports = fp(async function (fastify, opts) {
  fastify.register(require("@fastify/mongodb"), {
    forceClose: true,
    url: process.env.MONGO_URL,
  });
});
