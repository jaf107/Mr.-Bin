import{
    ADD_PRODUCT_REQUEST,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_FAIL
} from '../constants/productConstants';

export const newProductReducer = (state = { product: {} }, action) => {
    switch (action.type) {
        case ADD_PRODUCT_REQUEST:
            return {
                ...state,
                loading: true,
              }; 
        case ADD_PRODUCT_SUCCESS:
            return {
                loading: false,
                success: action.payload.success,
                product: action.payload.product,
              };
        case ADD_PRODUCT_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
              };
    }
}