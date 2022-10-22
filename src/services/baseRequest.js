/**
 * External dependencies
 */
import axios from 'axios';

/**
 * Internal dependencies
 */
import auth from './auth';

// Add a request interceptor

const token = auth.getToken();

axios.interceptors.request.use(
    function (config) {
        config.headers.Authorization = `Bearer ${token}`;
        config.baseURL = auth.baseUrl;

        return config;
    },
    function (error) {
        // Do something with request error
        return Promise.reject(error);
    }
);

export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete,
    patch: axios.patch
};