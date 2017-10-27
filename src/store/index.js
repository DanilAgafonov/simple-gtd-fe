/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from 'store/reducer';
import rootSaga from 'store/sagas';
import middlewares from 'store/middlewares';
import ApiService from 'services/api';
import TokenService from 'services/token';
import { logout } from 'store/session/actions';

export default function configureStore() {
  const services = {
    api: ApiService(),
    token: TokenService,
    apis: {},
  };

  const req = require.context('services', true, /\.\/apis\/.+\.js$/);

  req.keys().forEach((key) => {
    const apiName = key.replace(/^\.\/apis\/(.+)\.js$/, '$1');
    const Api = req(key).default;
    services.apis[apiName] = new Api(services.api);
  });

  const sagaMiddleware = createSagaMiddleware();

  const composedEnchacers = __DEV__ && window.__REDUX_DEVTOOLS_EXTENSION__
    ? compose(
      applyMiddleware(
        ...middlewares,
        sagaMiddleware,
      ),
      window.__REDUX_DEVTOOLS_EXTENSION__(),
    )
    : compose(applyMiddleware(
      ...middlewares,
      sagaMiddleware,
    ));

  const store = createStore(rootReducer, {}, composedEnchacers);

  services.api.interceptors.response.use(
    response => response,
    (error) => {
      if (error.response && error.response.status === 401) {
        store.dispatch(logout(error.response.data.message));
      }
      return Promise.reject(error);
    },
  );

  let sagaTask = sagaMiddleware.run(rootSaga, services);

  if (module.hot && __DEV__) {
    module.hot.accept('store/reducer', () => {
      store.replaceReducer(rootReducer);
    });

    module.hot.accept('store/sagas', () => {
      sagaTask.cancel();
      sagaTask.done.then(() => {
        sagaTask = sagaMiddleware.run(rootSaga);
      });
    });
  }

  return store;
}
