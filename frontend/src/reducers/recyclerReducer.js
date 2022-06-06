import {
  GET_RECYCLER_REQUEST,
  GET_RECYCLER_SUCCESS,
  GET_RECYCLER_FAIL,
  GET_SINGLE_RECYCLER_REQUEST,
  GET_SINGLE_RECYCLER_FAIL,
  GET_SINGLE_RECYCLER_SUCCESS,
  CREATE_RECYCLER_FAIL,
  CREATE_RECYCLER_REQUEST,
  CREATE_RECYCLER_SUCCESS,
  DELETE_RECYCLER_REQUEST,
  DELETE_RECYCLER_FAIL,
  DELETE_RECYCLER_SUCCESS,
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
      return {
        ...state,
        recyclers: []

      }
    case GET_RECYCLER_SUCCESS:
      return {
        ...state,
        loading: false,
        recyclers: action.payload,
      };

    case CREATE_RECYCLER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case CREATE_RECYCLER_REQUEST:
      return {
        ...state
      }
    case CREATE_RECYCLER_SUCCESS:
      return {
        ...state,
        loading: false,
        recyclers: action.payload,
      };


    case DELETE_RECYCLER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DELETE_RECYCLER_REQUEST:
      return {
        ...state
      }
    case DELETE_RECYCLER_SUCCESS:
      return {
        ...state,
        loading: false,
        recyclers: action.payload,
      };

    default:
      return state;
  }
};


export const singleRecyclerReducer = (state = { recycler: {} }, action) => {
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
