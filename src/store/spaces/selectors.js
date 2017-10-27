import { denormalize } from 'normalizr';
import { spaces as schema } from 'store/entities/schemas';

// eslint-disable-next-line import/prefer-default-export
export const getSpaces = state => denormalize(state.spaces.list, [schema], state.entities);
