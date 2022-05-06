import {
    PLACE_ORDER_REQUEST,
    PLACE_ORDER_SUCCESS,
    PLACE_ORDER_FAIL,
    GET_USER_ORDER_REQUEST,
    GET_USER_ORDER_SUCCESS,
    GET_USER_ORDER_FAIL
  
  } from "../constants/orderConstants";
  const axios = require("axios");
  axios.defaults.withCredentials = true;
  
  export const placeOrder = (orderData) => async (dispatch) => {
    try {
      dispatch({ type: PLACE_ORDER_REQUEST });
      const config = { headers: { "Content-Type": "application/json" } };
      const { data } = await axios.post(
        `http://localhost:5000/api/v1/me/order/new`,
        orderData,
        config
      );
      dispatch({ type: PLACE_ORDER_SUCCESS,  payload: data.order});
    } catch (error) {
      dispatch({
        type: PLACE_ORDER_FAIL,
        payload: error.response.data.message,
      });
    }
  };
  
  
  // Get orders of a user
  export const getUserOrder = () => async (dispatch) => {
    try {
      dispatch({ type: GET_USER_ORDER_REQUEST });
  
      const { data } = await axios.get(`http://localhost:5000/api/v1/me/order`);
      dispatch({ type: GET_USER_ORDER_SUCCESS, payload: data.order });
    } catch (error) {
       dispatch({ type: GET_USER_ORDER_FAIL, payload: error.response.data.message });
    }
  };
  
//   // Get user specific Products
//   export const getUserProducts = (user_id) => async (dispatch) => {
//     try {
//       dispatch({ type: GET_USER_PRODUCT_REQUEST });
//       const config = { headers: { "Content-Type": "application/json" } };
  
//       const { data } = await axios.get(
//         `http://localhost:5000/api/v1/me/product`,
//         user_id,
//         config
//       );
//       dispatch({ type: GET_USER_PRODUCT_SUCCESS, payload: data.product });
//     } catch (error) {
//        dispatch({ type: GET_USER_PRODUCT_FAIL, payload: error.response.data.message });
//     }
//   };