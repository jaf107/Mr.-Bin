import {
    CREATE_ORGANIZATION_FAIL,
    CREATE_ORGANIZATION_REQUEST,
    CREATE_ORGANIZATION_SUCCESS,
    DELETE_ORGANIZATION_FAIL,
    DELETE_ORGANIZATION_REQUEST,
    DELETE_ORGANIZATION_SUCCESS,
    GET_ORGANIZATION_FAIL,
    GET_ORGANIZATION_REQUEST,
    GET_ORGANIZATION_SUCCESS
} from "../constants/organizationConstants";

const axios = require("axios");

axios.defaults.withCredentials = true;


// Get all Recyclers
export const getOrganizations = () => async (dispatch) => {
    try {
        dispatch({ type: GET_ORGANIZATION_REQUEST });

        const { data } = await axios.get(`http://localhost:5000/api/v1/organizations`);
        dispatch({ type: GET_ORGANIZATION_SUCCESS, payload: data.organization });
    } catch (error) {
        dispatch({ type: GET_ORGANIZATION_FAIL, payload: error.response.data.message });
    }
};

// Add Organization
export const addOrganization = (organizationData) => async (dispatch) => {
    try {
        dispatch({ type: CREATE_ORGANIZATION_REQUEST });
        const config = { headers: { "Content-Type": "multipart/form-data" } };

        const { data } = await axios.post(`http://localhost:5000/api/v1/organization/new`, organizationData, config);

        dispatch({ type: CREATE_ORGANIZATION_SUCCESS, payload: data.organizations });
    } catch (error) {
        dispatch({ type: CREATE_ORGANIZATION_FAIL, payload: error.response.data.message });
    }
};

export const deleteOrganization = (id) => async (dispatch) => {
    try {
        dispatch({ type: DELETE_ORGANIZATION_REQUEST });

        const { data } = await axios.delete(`http://localhost:5000/api/v1/organization/${id}`);
        dispatch({ type: DELETE_ORGANIZATION_SUCCESS, payload: data.organizations });
    } catch (error) {
        dispatch({ type: DELETE_ORGANIZATION_FAIL, payload: error.response.data.message });
    }
};



// Get single organization details
export const getSingleOrganization = (id) => async (dispatch) => {
    try {
        dispatch({ type: GET_SINGLE_ORGANIZATION_REQUEST });
        const config = { headers: { "Content-Type": "application/json" } };

        const { data } = await axios.get(
            `http://localhost:5000/api/v1/organization/${id}`

        );
        dispatch({ type: GET_SINGLE_ORGANIZATION_SUCCESS, payload: data.organization });
    } catch (error) {
        dispatch({ type: GET_SINGLE_ORGANIZATION_FAIL, payload: error.response.data.message });
    }
};
