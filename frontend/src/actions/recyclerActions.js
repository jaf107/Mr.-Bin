import {
    GET_RECYCLER_FAIL,
    GET_RECYCLER_REQUEST,
    GET_RECYCLER_SUCCESS,
    GET_SINGLE_RECYCLER_REQUEST,
    GET_SINGLE_RECYCLER_SUCCESS,
    GET_SINGLE_RECYCLER_FAIL
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
     dispatch({ type: GET_SINGLE_RECYCLER_FAIL , payload: error.response.data.message });
  }
};
