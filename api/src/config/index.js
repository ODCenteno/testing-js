require('dotenv').config();

// Este archivo trae las variables de entorno desde .env
const config = {
  env: process.env.NODE_ENV || 'dev',
  isProd: process.env.NODE_ENV === 'production',
  port: process.env.PORT || 3000,
  dbUrl: process.env.MONGO_URL,
  dbName: process.env.MONGO_DB_NAME,
};

module.exports = { config };
