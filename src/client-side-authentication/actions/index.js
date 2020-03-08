import axios from 'axios';

export const AUTH_USER = 'AUTH_USER';
export const AUTH_ERROR = 'AUTH_ERROR';

export const signUp = (formProps, callback) => async dispatch => {
  try {
    const response = await axios.post('http://localhost:3090/signUp', formProps);
  
    dispatch({ type: AUTH_USER, payload: response.data.token });
    localStorage.setItem('token', response.data.token);
    callback();
  }
  catch(e) {
    dispatch({ type: AUTH_ERROR, payload: e.message })
  }
}

export const signIn = (formProps, callback) => async dispatch => {
  try {
    const response = await axios.post('http://localhost:3090/signIn', formProps);
  
    dispatch({ type: AUTH_USER, payload: response.data.token });
    localStorage.setItem('token', response.data.token);
    callback();
  }
  catch(e) {
    dispatch({ type: AUTH_ERROR, payload: e.message })
  }
}

export const signOut = () => {
  localStorage.removeItem('token');

  return {
    type: AUTH_USER,
    payload: ''
  };
}