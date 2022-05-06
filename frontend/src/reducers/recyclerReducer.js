import {
  GET_RECYCLER_REQUEST,
  GET_RECYCLER_SUCCESS,
  GET_RECYCLER_FAIL,
  GET_SINGLE_RECYCLER_REQUEST,
  GET_SINGLE_RECYCLER_FAIL,
  GET_SINGLE_RECYCLER_SUCCESS,
} from "../constants/recyclerConstants";

export const recyclerReducer = (state = { recyclers: [] }, action) => {
  switch (action.type) {
    case GET_RECYCLER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case GET_RECYCLER_REQUEST:
    case GET_RECYCLER_SUCCESS:
      return {
        ...state,
        loading: false,
        recyclers: action.payload,
      };
    
    default:
      return state;
  }
};


export const singleRecyclerReducer = (state = { recycler : {} }, action) => {
  switch (action.type) {
    case GET_SINGLE_RECYCLER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case GET_SINGLE_RECYCLER_REQUEST:
      return {
        ...state,
        loading: true,
        recycler: null,
      };
    case GET_SINGLE_RECYCLER_SUCCESS:
      return {
        ...state,
        loading: false,
        recycler: action.payload,
      
      };
    default:
      return state;
  }
};
