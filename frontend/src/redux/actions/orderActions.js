import {
    PLACE_ORDER_REQUEST,
    PLACE_ORDER_SUCCESS,
    PLACE_ORDER_FAIL,
    GET_USER_ORDER_REQUEST,
    GET_USER_ORDER_SUCCESS,
    GET_USER_ORDER_FAIL,
    GET_ORDER_REQUEST,
    GET_ORDER_SUCCESS,
    GET_ORDER_FAIL,
    CHANGE_ORDER_STATUS_REQUEST,
    CHANGE_ORDER_STATUS_SUCCESS,
    CHANGE_ORDER_STATUS_FAIL
  
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
      dispatch({ type: PLACE_ORDER_SUCCESS});
    } catch (error) {
      console.log(error);
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

  export const getOrders = () => async (dispatch) => {
    try {
      dispatch({ type: GET_ORDER_REQUEST });
      const config = { headers: { "Content-Type": "application/json" } };
  
      const { data } = await axios.get(`http://localhost:5000/api/v1/admin/recycle/order`);
      dispatch({ type: GET_ORDER_SUCCESS, payload: data.order });
    } catch (error) {
      dispatch({ type: GET_ORDER_FAIL, payload: error });
    }
  };
  
// Change order status
  export const updateStatus = (id, status) => async (dispatch) => {
    try {
      dispatch({ type: CHANGE_ORDER_STATUS_REQUEST });
      const config = { headers: { "Content-Type": "application/json" } };
  
      const { data } = await axios.put(`http://localhost:5000/api/v1/admin/recycle/order/${id}/${status}`);
      dispatch({ type: CHANGE_ORDER_STATUS_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: CHANGE_ORDER_STATUS_FAIL, payload: error });
    }
  };