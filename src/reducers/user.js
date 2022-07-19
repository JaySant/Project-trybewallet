import { ADD_EMAIL } from '../actions/index';

const INITIAL_STATE = {
  type: ADD_EMAIL,
  email: '',
};

export default function userLogin(state = INITIAL_STATE, action) {
  if (action.type === 'ADD_EMAIL') {
    return {
      ...state,
      email: action.payload,

    };
  }
  return state;
}
