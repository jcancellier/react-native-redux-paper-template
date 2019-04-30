import {
  EXAMPLE_TYPE
} from '../actions/types';

const INITIAL_STATE = {
  message: ''
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EXAMPLE_TYPE:
      return { ...state, message: action.payload }
    default:
      return state;
  }
};
