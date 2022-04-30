import {
  ADD_PRODUCT_REQUEST,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_FAIL,
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_FAIL,
  GET_PRODUCT_SUCCESS,
  GET_USER_PRODUCT_REQUEST,
  GET_USER_PRODUCT_FAIL,
  GET_USER_PRODUCT_SUCCESS,

} from "../constants/productConstants";
const axios = require("axios");

export const addProduct = (productData) => async (dispatch) => {
  try {
    dispatch({ type: ADD_PRODUCT_REQUEST });

    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.post(
      `http://localhost:5000/api/v1/product/new`,
      productData,
      config
    );


    dispatch({ type: ADD_PRODUCT_SUCCESS, payload: data.product });
  } catch (error) {
    dispatch({
      type: ADD_PRODUCT_FAIL,
      payload: error.response.data.message,
    });
  }
};


// Get Products
export const getProducts = () => async (dispatch) => {
  try {
    dispatch({ type: GET_PRODUCT_REQUEST });

    const { data } = await axios.get(`http://localhost:5000/api/v1/products`);

    dispatch({ type: GET_PRODUCT_SUCCESS, payload: data.product });
  } catch (error) {
     dispatch({ type: GET_PRODUCT_FAIL, payload: error.response.data.message });
  }
};

// Get user specific Products
export const getUserProducts = (user_id) => async (dispatch) => {
  try {
    dispatch({ type: GET_USER_PRODUCT_REQUEST });
    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.get(
      `http://localhost:5000/api/v1/me/product`,
      user_id,
      config
    );

    console.log(data);

    dispatch({ type: GET_USER_PRODUCT_SUCCESS, payload: data.product });
  } catch (error) {
     dispatch({ type: GET_USER_PRODUCT_FAIL, payload: error.response.data.message });
  }
};