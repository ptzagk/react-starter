'use strict';

module.exports = {
  mail: {
    from: {
      name: 'Your Name',
      address: 'youremail@example.com',
    },
  },
  cors: {
    origin: process.env.CORS_ORIGIN,
    methods: 'POST,GET,PUT,OPTIONS,DELETE',
    allowedHeaders: 'Timezone-Offset,Origin,X-Requested-With,Content-Type,Accept,Authorization',
  },
  mongolab: {
    options: {
      server: {
        socketOptions: {
          keepAlive: 1000,
          connectTimeoutMS: 30000,
          socketTimeoutMS: 30000,
        },
      },
      replset: {
        socketOptions: {
          keepAlive: 1000,
          connectTimeoutMS: 30000,
          socketTimeoutMS: 30000,
        },
      },
    },
  },
  auth: {
    jwtTokenExpireInSec: 24 * 60 * 60, // 1 day
    passwordResetExpireInMs: 60 * 60 * 1000, // 1 hour
    activationExpireInMs: 24 * 60 * 60 * 1000, // 1 day
    saltRounds: 10,
  },
  cacheFilesFor: process.env.NODE_ENV === 'production' ? '1d' : 0,
  logger: {
    period: '7d',
    count: 53,
  },
};
