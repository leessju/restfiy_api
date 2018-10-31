const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  ENV: process.env.NODE_ENV,
  PORT: process.env.PORT,
  URL: process.env.BASE_URL,
  MONGODB_URI: process.env.MONGODB_URI,
  JWT_SECRET: process.env.JWT_SECRET
};


//const dotenv = require('dotenv');
//https://medium.com/the-node-js-collection/making-your-node-js-work-everywhere-with-environment-variables-2da8cdf6e786