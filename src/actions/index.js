export const ADD_EMAIL = 'ADD_EMAIL';
export const CURRENCIES_API_SUCCESS = 'CURRENCIES_API';

export const userEmail = (email) => ({
  type: ADD_EMAIL,
  payload: email,
});

export const fetchAPI = (response) => ({
  type: CURRENCIES_API_SUCCESS,
  payload: response,
});

export const fetchAPIThunk = () => async (dispatch) => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const json = await response.json();
  const currencies = Object.keys(json).filter((currencie) => currencie !== 'USDT');
  dispatch(fetchAPI(currencies));
};
