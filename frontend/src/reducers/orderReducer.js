import {
    PLACE_ORDER_FAIL,
    PLACE_ORDER_REQUEST,
    PLACE_ORDER_SUCCESS,
    GET_USER_ORDER_FAIL,
    GET_USER_ORDER_REQUEST,
    GET_USER_ORDER_SUCCESS,
    GET_ORDER_SUCCESS,
    GET_ORDER_FAIL,
    GET_ORDER_REQUEST,
} from "../constants/orderConstants";
  
  export const orderReducer = (state = { order: {} }, action) => {
    switch (action.type) {
      case PLACE_ORDER_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case PLACE_ORDER_SUCCESS:
        return {
          ...state,
          loading: false,
          order:action.payload,
        };
      case PLACE_ORDER_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };

    
  export const userOrderReducer = (state = { userOrders: [] }, action) => {
    switch (action.type) {
  
      case GET_USER_ORDER_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case GET_USER_ORDER_REQUEST:
        return {
          loading: true,
        };
      case GET_USER_ORDER_SUCCESS:
        return {
          ...state,
          loading: false,
          userOrders: action.payload,
        };
      default:
        return state;
    }
  };

  export const recycleOrderReducer = (state = { recycleOrders: [] }, action) => {
    switch (action.type) {
  
      case GET_ORDER_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case GET_ORDER_REQUEST:
        return {
          loading: true,
        };
      case GET_ORDER_SUCCESS:
        return {
          ...state,
          loading: false,
          recycleOrders: action.payload,
        };
      default:
        return state;
    }
  };

  
