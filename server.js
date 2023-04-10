const strapi = require('strapi');
const { v4: uuidv4 } = require('uuid');

strapi({ uuid: uuidv4 }).start();
