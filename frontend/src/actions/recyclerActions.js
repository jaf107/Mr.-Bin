import {
  GET_RECYCLER_FAIL,
  GET_RECYCLER_REQUEST,
  GET_RECYCLER_SUCCESS,
  GET_SINGLE_RECYCLER_REQUEST,
  GET_SINGLE_RECYCLER_SUCCESS,
  GET_SINGLE_RECYCLER_FAIL,
  CREATE_RECYCLER_REQUEST,
  CREATE_RECYCLER_SUCCESS,
  CREATE_RECYCLER_FAIL,
  DELETE_RECYCLER_REQUEST,
  DELETE_RECYCLER_SUCCESS,
  DELETE_RECYCLER_FAIL
} from '../constants/recyclerConstants'
const axios = require("axios");
axios.defaults.withCredentials = true;


// Get all Recyclers
export const getRecyclers = () => async (dispatch) => {
  try {
    dispatch({ type: GET_RECYCLER_REQUEST });

    const { data } = await axios.get(`http://localhost:5000/api/v1/recyclers`);
    dispatch({ type: GET_RECYCLER_SUCCESS, payload: data.recycler });
  } catch (error) {
    dispatch({ type: GET_RECYCLER_FAIL, payload: error.response.data.message });
  }
};

// Add Recycler
export const addRecycler = (recyclerData) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_RECYCLER_REQUEST });
    const config = { headers: { "Content-Type": "multipart/form-data" } };

    const { data } = await axios.post(`http://localhost:5000/api/v1/recycler/new`, recyclerData, config);

    dispatch({ type: CREATE_RECYCLER_SUCCESS, payload: data.recyclers });
  } catch (error) {
    dispatch({ type: CREATE_RECYCLER_FAIL, payload: error.response.data.message });
  }
};

export const deleteRecycler = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_RECYCLER_REQUEST });

    const { data } = await axios.delete(`http://localhost:5000/api/v1/recycler/${id}`);
    dispatch({ type: DELETE_RECYCLER_SUCCESS, payload: data.recyclers });
  } catch (error) {
    dispatch({ type: DELETE_RECYCLER_FAIL, payload: error.response.data.message });
  }
};



// Get single recycler details
export const getSingleRecycler = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_SINGLE_RECYCLER_REQUEST });
    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.get(
      `http://localhost:5000/api/v1/recycler/${id}`

    );
    dispatch({ type: GET_SINGLE_RECYCLER_SUCCESS, payload: data.recycler });
  } catch (error) {
    dispatch({ type: GET_SINGLE_RECYCLER_FAIL, payload: error.response.data.message });
  }
};
