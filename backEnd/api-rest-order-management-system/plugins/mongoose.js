"use strict";

const fp = require("fastify-plugin");
const mongoose = require("mongoose");
require("dotenv").config();

module.exports = fp(async function (fastify, opts) {
  try {
    await mongoose.connect(process.env.MONGO_URL);

    fastify.decorate("mongoose", mongoose);
    fastify.log.info("MongoDB successfully connected!");
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});
