import {
    PLACE_ORDER_FAIL,
    PLACE_ORDER_REQUEST,
    PLACE_ORDER_SUCCESS,
    GET_USER_ORDER_FAIL,
    GET_USER_ORDER_REQUEST,
    GET_USER_ORDER_SUCCESS
} from "../constants/orderConstants";
  
  export const orderReducer = (state = { orders: [] }, action) => {
    switch (action.type) {
      case PLACE_ORDER_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case PLACE_ORDER_SUCCESS:
        return {
          loading: false,
          orders: action.payload,
        };
      case PLACE_ORDER_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case GET_USER_ORDER_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case GET_USER_ORDER_REQUEST:
      case GET_USER_ORDER_SUCCESS:
        return {
          ...state,
          loading: false,
          orders: action.payload,
        };
      default:
        return state;
    }
  };
  