'use strict';

const cors = require('cors');

const corsConfig = cors({
  origin: 'null',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: [
    'Origin',
    'X-Requested-With',
    'Content-Type',
    'Accept',
    'Authorization',
    'From'
  ],
  credentials: true
});

module.exports = corsConfig;
