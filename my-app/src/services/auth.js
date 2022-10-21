/**
 * External dependencies
 */
import axios from "axios";


/**
 * Internal dependencies
 */

const baseUrl = process.env.REACT_APP_BASE_URL;

const login = (data) => {
    return axios.post(baseUrl + 'login', {
        email: data.email,
        password: data.password
    });
}

const getToken = () => {
    return localStorage.getItem('jwt');
}

const isLoggedIn = () => {
    return !!getToken();
}

const register = (data) => {
    return axios.post(baseUrl + 'register', {
        email: data.email,
        password: data.password,
        username: data.username
    })
}

const logout = () => {
    return localStorage.removeItem('jwt');
}

const baseConfig = {
    headers: {
        'Authorization': 'Bearer ' + getToken()
    }
};

const AuthService = {
    login,
    register,
    isLoggedIn,
    logout,
    getToken,
    baseUrl,
    baseConfig
}

export default AuthService;