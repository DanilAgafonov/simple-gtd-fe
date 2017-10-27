const { middleware: thunkMiddleware } = require('redux-saga-thunk');

const req = require.context('.', true, /\.\/.+\/middleware\.js$/);

const middlewares = [thunkMiddleware];

req.keys().forEach((key) => {
  middlewares.push(req(key).default);
});

export default middlewares;
