// https://github.com/diegohaz/arc/wiki/Example-redux-modules#entities
import { schema } from 'normalizr';

export const users = new schema.Entity('users');
export const tasks = new schema.Entity('tasks');
export const spaces = new schema.Entity('spaces', {
  tasks: [tasks],
});
