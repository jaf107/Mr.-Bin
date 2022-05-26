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
  GET_SINGLE_PRODUCT_FAIL,
  GET_SINGLE_PRODUCT_REQUEST,
  GET_SINGLE_PRODUCT_SUCCESS,
  CREATE_BID_REQUEST,
  CREATE_BID_SUCCESS,
  CREATE_BID_FAIL,
  GET_BID_REQUEST,
  GET_BID_SUCCESS,
  GET_BID_FAIL,
  ADD_COMMENT_REQUEST,
  ADD_COMMENT_SUCCESS,
  ADD_COMMENT_FAIL,
  GET_COMMENT_REQUEST,
  GET_COMMENT_SUCCESS,
  GET_COMMENT_FAIL,
  DELETE_PRODUCT_FAIL,
  DELETE_PRODUCT_REQUEST,
  DELETE_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_REQUEST,
  UPDATE_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_FAIL,
  ACCEPT_REJECT_BID_FAIL,
  ACCEPT_REJECT_BID_REQUEST,
  ACCEPT_REJECT_BID_SUCCESS
} from "../constants/productConstants";
const axios = require("axios");
axios.defaults.withCredentials = true;

export const addProduct = (productData) => async (dispatch) => {
  try {
    dispatch({ type: ADD_PRODUCT_REQUEST });

    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.post(
      `http://localhost:5000/api/v1/product/new`,
      productData,
      config
    );

    dispatch({ type: ADD_PRODUCT_SUCCESS });
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
    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.get(`http://localhost:5000/api/v1/product`);
    dispatch({ type: GET_PRODUCT_SUCCESS, payload: data.product });
  } catch (error) {
    dispatch({ type: GET_PRODUCT_FAIL, payload: error });
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
    dispatch({ type: GET_USER_PRODUCT_SUCCESS, payload: data.product });
  } catch (error) {
    dispatch({
      type: GET_USER_PRODUCT_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get single product details
export const getSingleProduct = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_SINGLE_PRODUCT_REQUEST });
    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.get(
      `http://localhost:5000/api/v1/product/${id}`
    );
    dispatch({ type: GET_SINGLE_PRODUCT_SUCCESS, payload: data.product });
  } catch (error) {
    dispatch({
      type: GET_SINGLE_PRODUCT_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const createBid = (bid, id) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_BID_REQUEST });
    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.put(
      `http://localhost:5000/api/v1/product/${id}/bid/new`,
      bid,
      config
    );
    dispatch({ type: CREATE_BID_SUCCESS });
  } catch (error) {
    dispatch({ type: CREATE_BID_FAIL, payload: error.response.data.message });
  }
};

export const getBid = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_BID_REQUEST });
    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.get(
      `http://localhost:5000/api/v1/product/${id}/bid`,
      config
    );
    dispatch({ type: GET_BID_SUCCESS, payload: data.bid });
  } catch (error) {
    dispatch({ type: GET_BID_FAIL, payload: error.response.data.message });
  }
};


//Accept Reject Bid
export const rejectBid = (id, bidId) => async (dispatch) => {
  try {
    dispatch({ type: ACCEPT_REJECT_BID_REQUEST });
    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.delete(
      `http://localhost:5000/api/v1/product/${id}/bid/${bidId}`,
      config
    );
    console.log(data)
    dispatch({ type: ACCEPT_REJECT_BID_SUCCESS });
  } catch (error) {
    dispatch({ type: ACCEPT_REJECT_BID_FAIL, payload: error.response.data.message });
  }
};



export const addComment = (comment, id) => async (dispatch) => {
  try {
    dispatch({ type: ADD_COMMENT_REQUEST });
    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.put(
      `http://localhost:5000/api/v1/product/${id}/comment/new`,
      comment,
      config
    );
    console.log(data);
    dispatch({ type: ADD_COMMENT_SUCCESS });
  } catch (error) {
    dispatch({ type: ADD_COMMENT_FAIL, payload: error.response.data.message });
  }
};

export const getComment = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_COMMENT_REQUEST });
    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.get(
      `http://localhost:5000/api/v1/product/${id}/comment`,
      config
    );
    console.log(data);
    dispatch({ type: GET_COMMENT_SUCCESS, payload: data.comment });
  } catch (error) {
    dispatch({ type: GET_COMMENT_FAIL, payload: error.response.data.message });
  }
};

// Delete Product
export const deleteProduct = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_PRODUCT_REQUEST });

    const { data } = await axios.delete(`http://localhost:5000/api/v1/product/${id}`);

    dispatch({
      type: DELETE_PRODUCT_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: DELETE_PRODUCT_FAIL,
      payload: error.response.data.message,
    });
  }
};


// Update Product
export const updateProduct = (id, productData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_PRODUCT_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.put(
      `http://localhost:5000/api/v1/product/${id}/edit`,
      productData,
      config
    );

    dispatch({
      type: UPDATE_PRODUCT_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_PRODUCT_FAIL,
      payload: error.response.data.message,
    });
  }
};
