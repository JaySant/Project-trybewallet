import getData from '../services/api';

export const ADD_EMAIL = 'ADD_EMAIL';
export const CURRENCIES_API_SUCCESS = 'CURRENCIES_API';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';
export const ADD_EXPENSES_SAVE = 'ADD_EXPENSES_SAVE';

export const userEmail = (email) => ({
  type: ADD_EMAIL,
  payload: email,
});

export const fetchAPI = (response) => ({
  type: CURRENCIES_API_SUCCESS,
  payload: response,
});

export const fetchAPIThunk = () => async (dispatch) => {
  const response = await getData();
  const currencies = Object.keys(response).filter((currencie) => currencie !== 'USDT');
  dispatch(fetchAPI(currencies));
};

export const fetchAPIExpenses = (expenses) => ({
  type: ADD_EXPENSES_SAVE,
  payload: expenses,
});

export const fetchThunkExpenses = (expense) => async (dispatch) => {
  const dataCurrencie = await getData();

  const expenses = {
    id: expense.id,
    value: expense.value,
    description: expense.description,
    currency: expense.currency,
    method: expense.method,
    tag: expense.tag,
    exchangeRates: dataCurrencie,
  };

  dispatch(fetchAPIExpenses(expenses));
};

export const deleteExpense = (expense) => ({
  type: DELETE_EXPENSE,
  payload: expense,
});
