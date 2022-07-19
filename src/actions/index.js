export const ADD_EMAIL = 'ADD_EMAIL';

export const userEmail = (email) => ({
  type: ADD_EMAIL,
  payload: email,
});
