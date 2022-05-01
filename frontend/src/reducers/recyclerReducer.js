import {
    GET_RECYCLER_REQUEST,
    GET_RECYCLER_SUCCESS,
    GET_RECYCLER_FAIL
} from '../constants/recyclerConstants';

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
  