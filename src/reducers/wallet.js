import { CURRENCIES_API_SUCCESS, ADD_EXPENSES_SAVE } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  currency: 'BRL',
};

export function currencyINITIAL(state = INITIAL_STATE, action) {
  switch (action.type) {
  default:
    return state;
  }
}

export default function fetchAPISuccess(state = INITIAL_STATE, action) {
  switch (action.type) {
  case CURRENCIES_API_SUCCESS:
    return {
      ...state,
      currencies: action.payload,
    };

  case ADD_EXPENSES_SAVE:
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };
  default:
    return state;
  }
}
