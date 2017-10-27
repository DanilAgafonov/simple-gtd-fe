import { normalize } from 'normalizr';
import { entitiesReceive } from './actions';
import * as schemas from './schemas';

const middleware = store => next => (action) => {
  const { payload, meta } = action;

  if (meta && meta.entities) {
    const schema = schemas[meta.entities];

    if (schema) {
      const { result, entities } = normalize(
        payload,
        Array.isArray(payload) ? [schema] : schema,
      );
      store.dispatch(entitiesReceive(entities));
      return next({ ...action, payload: result });
    }
    if (__DEV__) {
      // eslint-disable-next-line no-console
      console.warn(`[entities] There is no ${meta.entities} schema on schemas.js`);
    }
  }
  return next(action);
};

export default middleware;
