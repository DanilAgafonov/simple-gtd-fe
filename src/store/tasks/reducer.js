import {
  CREATE_TASK_SUCCESS,
} from './actions';

const getInitialState = () => ({
  tasks: [],
});

export default function (state = getInitialState(), action) {
  switch (action.type) {
    case CREATE_TASK_SUCCESS:
      return {
        tasks: [...state.tasks, action.payload],
      };
    default:
      return state;
  }
}
