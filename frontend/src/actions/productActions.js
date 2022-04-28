import {
  ADD_PRODUCT_REQUEST,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_FAIL,
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

    console.log(data);

    dispatch({ type: ADD_PRODUCT_SUCCESS, payload: data.product });
  } catch (error) {
    dispatch({
      type: ADD_PRODUCT_FAIL,
      payload: error.response.data.message,
    });
  }
};
