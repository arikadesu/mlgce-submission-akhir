const postPredictHandler = require('../server/handler');
const getHistoriesHandler = require('../server/handler'); 
const Joi = require('joi');

const routes = [
  {
    method: 'POST',
    path: '/predict',
    options: {
      payload: {
        allow: 'multipart/form-data',
        multipart: {
          output: 'stream',
          maxBytes: 1000000 // 1MB
        }
      },
      handler: postPredictHandler
    }
  },
  {
    method: 'GET',
    path: '/predict/histories',
    handler: getHistoriesHandler 
  }
];

module.exports = routes;
