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
  CREATE_BID_FAIL,
  CREATE_BID_REQUEST,
  CREATE_BID_SUCCESS,
  GET_BID_FAIL,
  GET_BID_REQUEST,
  GET_BID_SUCCESS,
  ADD_COMMENT_FAIL,
  ADD_COMMENT_REQUEST,
  ADD_COMMENT_SUCCESS,
  GET_COMMENT_FAIL,
  GET_COMMENT_REQUEST,
  GET_COMMENT_SUCCESS,
  DELETE_PRODUCT_REQUEST,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAIL,
  DELETE_PRODUCT_RESET,
  CLEAR_ERRORS,
  UPDATE_PRODUCT_RESET,
  UPDATE_PRODUCT_FAIL,
  UPDATE_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_REQUEST,
  REJECT_BID_FAIL,
  REJECT_BID_REQUEST,
  REJECT_BID_SUCCESS,
  ACCEPT_BID_FAIL,
  ACCEPT_BID_REQUEST,
  ACCEPT_BID_SUCCESS,
  VERIFY_PRODUCT_FAIL,
  VERIFY_PRODUCT_REQUEST,
  VERIFY_PRODUCT_SUCCESS,
  EDIT_BID_FAIL,
  EDIT_BID_REQUEST,
  EDIT_BID_SUCCESS,
} from "../constants/productConstants";
import {
  VERIFY_USER_REQUEST,
  VERIFY_USER_SUCCESS,
} from "../constants/userConstants";

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
        products: [],
      };
    case GET_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload,
      };
      case EDIT_BID_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case EDIT_BID_REQUEST:
      case EDIT_BID_SUCCESS:
        return {
          ...state,
          loading: false,
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
        userProducts: [],
      };
    case GET_USER_PRODUCT_REQUEST:
      return {
        loading: true,
        userProducts: [],
      };
    case GET_USER_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        userProducts: action.payload,
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

export const singleProductReducer = (state = { product: null }, action) => {
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

export const bidReducer = (state = { bids: [] }, action) => {
  switch (action.type) {
    case CREATE_BID_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case CREATE_BID_REQUEST:
    case CREATE_BID_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case GET_BID_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case GET_BID_REQUEST:
    case GET_BID_SUCCESS:
      return {
        ...state,
        loading: false,
        bids: action.payload,
      };
    case REJECT_BID_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case REJECT_BID_REQUEST:
    case REJECT_BID_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case ACCEPT_BID_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case ACCEPT_BID_REQUEST:
    case ACCEPT_BID_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export const commentReducer = (state = { comments: [] }, action) => {
  switch (action.type) {
    case ADD_COMMENT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case ADD_COMMENT_REQUEST:
    case ADD_COMMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
      };
    case GET_COMMENT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case GET_COMMENT_REQUEST:
      return {
        ...state,
        comments: [],
      };
    case GET_COMMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        comments: action.payload,
        error: null,
      };
    default:
      return state;
  }
};

export const updateProductReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_PRODUCT_REQUEST:
    case UPDATE_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: action.payload,
      };

    case UPDATE_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        isUpdated: action.payload,
      };
    case DELETE_PRODUCT_FAIL:
    case UPDATE_PRODUCT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DELETE_PRODUCT_RESET:
      return {
        ...state,
        isDeleted: false,
      };
    case UPDATE_PRODUCT_RESET:
      return {
        ...state,
        isUpdated: false,
      };
    case VERIFY_PRODUCT_REQUEST:
    case VERIFY_PRODUCT_SUCCESS:
      return {
        ...state,
        success : true
      }
    case VERIFY_PRODUCT_FAIL:
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
