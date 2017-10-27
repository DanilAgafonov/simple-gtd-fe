import { denormalize } from 'normalizr';
import { users as schema } from 'store/entities/schemas';

// eslint-disable-next-line import/prefer-default-export
export const getCurrentUser = state => denormalize(state.session.userId, schema, state.entities);
