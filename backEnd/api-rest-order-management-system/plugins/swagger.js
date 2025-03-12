const swagger = require('@fastify/swagger');
const swaggerUi = require('@fastify/swagger-ui');
const userRoutes = require('../routes/users');
const deliveryRoutes = require('../routes/deliveries');
const ordersRoutes = require('../routes/orders');
const paymentRoutes = require('../routes/payments');
const productRoutes = require('../routes/products');
async function swaggerConfig(fastify, options) {
  fastify.register(swagger, {
    swagger: {
      info: {
        title: 'API Order Management System',
        description: 'Documentação da API',
        version: '1.0.0',
      },
      host: 'localhost:3000',
      schemes: ['http'],
      consumes: ['application/json'],
      produces: ['application/json'],
      components: {
        schemas: {
          Delivery: {
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
          },
        },
      },
    },
  });

  fastify.register(swaggerUi, {
    routePrefix: '/docs',
    uiConfig: {
      docExpansion: 'list',
      deepLinking: false,
    },
  });

  fastify.register(userRoutes);
  fastify.register(deliveryRoutes);
  fastify.register(ordersRoutes);
  fastify.register(paymentRoutes);
  fastify.register(productRoutes);
}

module.exports = swaggerConfig;
