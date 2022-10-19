/**
 * External dependencies
 */
import axios from "axios";

/**
 * Internal dependencies
 */

const baseUrl = 'http://localhost:8000/';

const login = (data) => {
    return axios.post(baseUrl + 'login', {
        email: data.email,
        password: data.password
    });
}

const isLoggedIn = () => {
    return !!localStorage.getItem('jwt');
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

const AuthService = {
    login,
    register,
    isLoggedIn,
    logout
}

export default AuthService;