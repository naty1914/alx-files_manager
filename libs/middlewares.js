import express from 'express';

/**
 * It adds middlewares to the given express application.
 * @param {express.Express} api the express application.
 */
const injectMiddlewares = (api) => {
  api.use(express.json({ limit: '200mb' }));
};

export default injectMiddlewares;
