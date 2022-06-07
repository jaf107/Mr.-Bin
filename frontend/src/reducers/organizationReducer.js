import {
    CREATE_ORGANIZATION_FAIL,
    CREATE_ORGANIZATION_REQUEST,
    CREATE_ORGANIZATION_SUCCESS,
    DELETE_ORGANIZATION_FAIL,
    DELETE_ORGANIZATION_REQUEST,
    DELETE_ORGANIZATION_SUCCESS,
    GET_ORGANIZATION_FAIL,
    GET_ORGANIZATION_REQUEST,
    GET_ORGANIZATION_SUCCESS,
    GET_SINGLE_ORGANIZATION_FAIL,
    GET_SINGLE_ORGANIZATION_REQUEST,
    GET_SINGLE_ORGANIZATION_SUCCESS
} from "../constants/organizationConstants";

export const organizationReducer = (state = { organizations: [] }, action) => {
    switch (action.type) {
        case GET_ORGANIZATION_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case GET_ORGANIZATION_REQUEST:
            return {
                ...state,
                organizations: []

            }
        case GET_ORGANIZATION_SUCCESS:
            return {
                ...state,
                loading: false,
                organizations: action.payload,
            };

        case CREATE_ORGANIZATION_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case CREATE_ORGANIZATION_REQUEST:
            return {
                ...state
            }
        case CREATE_ORGANIZATION_SUCCESS:
            return {
                ...state,
                loading: false,
            };


        case DELETE_ORGANIZATION_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case DELETE_ORGANIZATION_REQUEST:
            return {
                ...state
            }
        case DELETE_ORGANIZATION_SUCCESS:
            return {
                ...state,
                loading: false,
                organizations: action.payload,
            };

        default:
            return state;
    }
};

export const singleOrganizationReducer = (state = { organization: {} }, action) => {
    switch (action.type) {
        case GET_SINGLE_ORGANIZATION_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case GET_SINGLE_ORGANIZATION_REQUEST:
            return {
                ...state,
                loading: true,
                organization: null,
            };
        case GET_SINGLE_ORGANIZATION_SUCCESS:
            return {
                ...state,
                loading: false,
                organization: action.payload,

            };
        default:
            return state;
    }
};
