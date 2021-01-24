import * as api from '../api';

// Action Creators
export const getNotes = () => async (dispatch) => {
  try {
    const { data } = await api.fechNotes();
    dispatch({ type: 'FETCH_ALL', payload: data});
  } catch (error) {
    console.log(error.message);
  }
};
