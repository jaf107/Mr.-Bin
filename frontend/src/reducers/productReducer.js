import {
  ADD_PRODUCT_REQUEST,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_FAIL,
  GET_PRODUCT_FAIL,
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
  GET_USER_PRODUCT_FAIL,
  GET_USER_PRODUCT_REQUEST,
  GET_USER_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_FAIL,
  GET_SINGLE_PRODUCT_REQUEST,
  GET_SINGLE_PRODUCT_SUCCESS,
} from "../constants/productConstants";

export const productReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    
    case GET_PRODUCT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case GET_PRODUCT_REQUEST:
      return {
        loading: true,
        products: null,
      };
    case GET_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload,
      };
    default:
      return state;
  }
};

export const userProductReducer = (state = { userProducts: [] }, action) => {
  switch (action.type) {
    case GET_USER_PRODUCT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
        userProducts: []
      };
    case GET_USER_PRODUCT_REQUEST:
      return {
        loading: true,
        products: null,
      };
    case GET_USER_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload,
      
      };
    default:
      return state;
  }
};

export const newProductReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case ADD_PRODUCT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};


export const singleProductReducer = (state = { product : {} }, action) => {
  switch (action.type) {
    case GET_SINGLE_PRODUCT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case GET_SINGLE_PRODUCT_REQUEST:
    case GET_SINGLE_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        product: action.payload,
      
      };
    default:
      return state;
  }
};


