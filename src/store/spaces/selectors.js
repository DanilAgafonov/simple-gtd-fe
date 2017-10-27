import { denormalize } from 'normalizr';
import { spaces as schema } from 'store/entities/schemas';

export const getSpaces = state => denormalize(state.spaces.list, [schema], state.entities);
export const getSpace = (state, id) => denormalize(
  id,
  schema,
  state.entities.spaces ? state.entities : { spaces: {} },
);
