import { AUTH } from '../constants/actionTypes';
import * as api from '../api/index.js';

export const signin = (formData, history) => async (dispatch) => {
  try {
    // Log in user

    history.push('/')
  } catch (error) {
    console.log(error)
  }
};


export const signup = (formData, history) => async (dispatch) => {
  try {
    // Sign up user

    history.push('/')
  } catch (error)
  console.log(error)
};
